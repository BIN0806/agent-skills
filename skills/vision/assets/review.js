"use strict";

const data = JSON.parse(document.getElementById("vision-data").textContent);
const cards = data.cards;
const verdicts = ["In vision", "Off mission", "Conditional"];
const ledger = [];
let topIdx = 0;

function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

document.title = "Vision review - " + data.project;
document.getElementById("vr-meta").textContent = data.project + " · " + data.run_note;
const doc = document.getElementById("vr-doc");
let paragraph = [];
function flush() {
  if (paragraph.length) doc.append(element("p", "", paragraph.join(" ")));
  paragraph = [];
}
for (const line of data.draft.split("\n")) {
  if (line.startsWith("## ")) { flush(); doc.append(element("h2", "", line.slice(3))); }
  else if (line.startsWith("# ")) { flush(); doc.append(element("h1", "", line.slice(2))); }
  else if (!line.trim()) flush();
  else paragraph.push(line);
}
flush();

const stack = document.getElementById("vr-stack");
const nodes = [];
for (const [i, card] of cards.entries()) {
  const node = element("div", "vr-card");
  node.append(element("span", "vr-card-id", card.id + " · " + (i + 1) + "/" + cards.length));
  node.append(element("h3", "vr-card-title", card.title));
  node.append(element("p", "vr-card-body", card.body));
  node.append(element("div", "vr-card-tests", card.tests));
  const why = element("div", "vr-why");
  why.append(element("span", "vr-why-label", "Why the answer is not obvious"));
  why.append(element("p", "", card.why));
  node.append(why);
  const choices = element("div", "vr-verdicts");
  const reason = element("textarea", "vr-reason");
  reason.placeholder = "reasoning (this is what the vision gets rebuilt from)";
  const commit = element("button", "vr-commit", "Record verdict");
  commit.type = "button";
  commit.disabled = true;
  let selected = null;
  for (const verdict of verdicts) {
    const button = element("button", "", verdict);
    button.type = "button";
    button.setAttribute("aria-pressed", "false");
    button.addEventListener("click", function () {
      if (i !== topIdx) return;
      for (const other of choices.children) other.setAttribute("aria-pressed", "false");
      button.setAttribute("aria-pressed", "true");
      selected = verdict;
      commit.disabled = false;
    });
    choices.append(button);
  }
  commit.addEventListener("click", function () {
    if (!selected || i !== topIdx) return;
    const notes = reason.value.trim();
    const bridge = window.lavish;
    if (!bridge || typeof bridge.queuePrompt !== "function") {
      window.alert("The review bridge is unavailable. Keep this board open and restart the review host.");
      return;
    }
    bridge.queuePrompt(card.id + " (" + card.title + "): " + selected + "." + (notes ? " Reasoning: " + notes : ""), {
      tag: "vision-verdict", queueKey: card.id, text: card.id + ": " + selected,
      element: node, data: {id: card.id, verdict: selected, notes: notes}
    });
    ledger.push({id: card.id, verdict: selected, notes: notes});
    node.classList.add("vr-gone");
    node.hidden = true;
    commit.disabled = true;
    topIdx += 1;
    layout();
    if (topIdx === cards.length) {
      const list = document.getElementById("vr-ledger");
      for (const entry of ledger) list.append(element("li", "", entry.id + " " + entry.verdict + (entry.notes ? " - " + entry.notes : "")));
      stack.hidden = true;
      document.getElementById("vr-done").hidden = false;
    }
  });
  node.append(choices, reason, commit);
  stack.append(node);
  nodes.push(node);
}

function layout() {
  for (const [i, node] of nodes.entries()) {
    const depth = i - topIdx;
    node.hidden = depth < 0 || depth > 2;
    if (!node.hidden) node.dataset.depth = String(depth);
  }
  document.getElementById("vr-progress").textContent = Math.min(topIdx + 1, cards.length) + " / " + cards.length;
}

document.getElementById("vr-send").addEventListener("click", function () {
  if (topIdx !== cards.length) return;
  const bridge = window.lavish;
  if (!bridge || typeof bridge.queuePrompt !== "function" || typeof bridge.sendQueuedPrompts !== "function") {
    window.alert("The review bridge is unavailable. Your verdicts remain on this board.");
    return;
  }
  bridge.queuePrompt("All " + cards.length + " hypotheticals are answered. Fold every verdict into the draft and send back the next round.", {
    tag: "vision-verdict", queueKey: "vision-round-complete", text: "All verdicts recorded - next round",
    element: document.getElementById("vr-done"), data: {complete: true, verdicts: ledger}
  });
  bridge.sendQueuedPrompts();
  this.disabled = true;
  this.textContent = "Sent for the next round";
  document.getElementById("vr-sent").hidden = false;
});
layout();
