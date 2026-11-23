#!/usr/bin/env python3
"""Build a Vision review board from data, without evaluating its contents."""
import argparse
import json
from pathlib import Path
import shutil


def build(source: Path, output: Path) -> None:
    data = json.loads(source.read_text(encoding="utf-8"))
    if not isinstance(data, dict):
        raise ValueError("Board data must be an object")
    for key in ("project", "run_note", "draft"):
        if not isinstance(data.get(key), str):
            raise ValueError(f"{key} must be a string")
    cards = data.get("cards")
    if not isinstance(cards, list) or not cards:
        raise ValueError("cards must be a nonempty list")
    ids = set()
    for card in cards:
        if not isinstance(card, dict) or any(
            not isinstance(card.get(key), str)
            for key in ("id", "title", "body", "tests", "why")
        ):
            raise ValueError("Each card needs string id, title, body, tests, and why")
        if not card["id"] or card["id"] in ids:
            raise ValueError("Card IDs must be nonempty and unique")
        ids.add(card["id"])
    assets = Path(__file__).resolve().parent.parent / "assets"
    payload = json.dumps(data, ensure_ascii=True).replace("&", "\\u0026").replace("<", "\\u003c").replace(">", "\\u003e")
    html = (assets / "review-template.html").read_text(encoding="utf-8")
    html = html.replace("{{VISION_DATA_JSON}}", payload)
    output = output.resolve()
    if output.name in {"review.css", "review.js"}:
        raise ValueError("Output must not replace a board asset")
    output.parent.mkdir(parents=True, exist_ok=True)
    for name in ("review.css", "review.js"):
        destination = output.parent / name
        if destination.resolve() != (assets / name).resolve():
            shutil.copyfile(assets / name, destination)
    output.write_text(html, encoding="utf-8")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("data", type=Path)
    parser.add_argument("output", type=Path)
    args = parser.parse_args()
    build(args.data, args.output)
