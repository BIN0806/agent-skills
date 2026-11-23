#!/usr/bin/env bash
set -euo pipefail

source_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
target_dir="${1:-.}"

if [[ ! -d "$target_dir" ]]; then
  printf 'Target directory does not exist: %s\n' "$target_dir" >&2
  exit 2
fi
target_dir="$(cd "$target_dir" && pwd)"

if [[ -L "$target_dir/.agents" || -L "$target_dir/.agents/skills" || -L "$target_dir/AGENTS.md" ]]; then
  printf 'Refusing to install through a symlink in %s\n' "$target_dir" >&2
  exit 1
fi

source_skills="$source_dir/skills"
target_skills="$target_dir/.agents/skills"
begin_marker='<!-- BEGIN interview-copilot template -->'

shopt -s nullglob
skill_dirs=("$source_skills"/*)
for skill_dir in "${skill_dirs[@]}"; do
  [[ -d "$skill_dir" && -f "$skill_dir/SKILL.md" ]] || continue
  skill_name="$(basename "$skill_dir")"
  destination="$target_skills/$skill_name"
  if [[ -e "$destination" || -L "$destination" ]]; then
    if [[ ! -d "$destination" ]] || ! diff -qr "$skill_dir" "$destination" >/dev/null; then
      printf 'Conflicting skill already exists: %s\n' "$destination" >&2
      exit 1
    fi
  fi
done

target_agents="$target_dir/AGENTS.md"
if [[ -e "$target_agents" || -L "$target_agents" ]]; then
  if [[ ! -f "$target_agents" ]]; then
    printf 'Cannot update AGENTS.md: %s\n' "$target_agents" >&2
    exit 1
  fi
  if grep -Fqx "$begin_marker" "$target_agents"; then
    existing_block="$(sed -n '/^<!-- BEGIN interview-copilot template -->$/,/^<!-- END interview-copilot template -->$/p' "$target_agents")"
    template_block="$(cat "$source_dir/workflows/interview-AGENTS.md")"
    if [[ "$existing_block" != "$template_block" ]]; then
      printf 'Existing interview template rules differ: %s\n' "$target_agents" >&2
      exit 1
    fi
  fi
fi

mkdir -p "$target_skills"
for skill_dir in "${skill_dirs[@]}"; do
  [[ -d "$skill_dir" && -f "$skill_dir/SKILL.md" ]] || continue
  skill_name="$(basename "$skill_dir")"
  destination="$target_skills/$skill_name"
  if [[ ! -e "$destination" && ! -L "$destination" ]]; then
    cp -R "$skill_dir" "$destination"
    printf 'Installed %s\n' "$skill_name"
  fi
done

if [[ ! -e "$target_agents" && ! -L "$target_agents" ]]; then
  cp "$source_dir/workflows/interview-AGENTS.md" "$target_agents"
elif ! grep -Fqx "$begin_marker" "$target_agents"; then
  printf '\n' >> "$target_agents"
  cat "$source_dir/workflows/interview-AGENTS.md" >> "$target_agents"
fi

printf 'Skills catalog ready in %s\n' "$target_dir"
