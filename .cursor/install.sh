#!/usr/bin/env bash
# Idempotent bootstrap for the punktfunk-website Cloud Agent environment.
# Installs Bun 1.4.x (pinned) if missing, then installs project dependencies.
set -euo pipefail

BUN_VERSION="bun-v1.4.0"
export BUN_INSTALL="${BUN_INSTALL:-$HOME/.bun}"
export PATH="$BUN_INSTALL/bin:$PATH"

if ! command -v bun >/dev/null 2>&1; then
  echo "Installing $BUN_VERSION…"
  curl -fsSL https://bun.sh/install | bash -s "$BUN_VERSION"
fi

echo "bun $(bun --version)"

# Install exactly what the lockfile pins.
bun install --frozen-lockfile
