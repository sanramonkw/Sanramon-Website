#!/usr/bin/env bash
# Builds the master site (Bold "Slate Stage", promoted to production) + the
# two remaining design variants kept around for owner comparison, and
# assembles them into one combined dist/ folder for GitHub Pages review:
#
#   dist/                      -> master (Bold), built with DEPLOY_TARGET=pages
#   dist/variants/premium/     -> premium variant
#   dist/variants/editorial/   -> editorial variant
#
# The master's astro.config.mjs is env-driven (see src/data/site.ts):
# DEPLOY_TARGET=pages switches it from the production site/base
# (https://sanramonkw.com, base "/") to the GitHub Pages review site/base
# (https://sanramonkw.github.io, base "/Sanramon-Website/") so every link,
# asset and sitemap entry in this combined dist/ resolves under the project
# pages subpath. The variants are review-only and already hardcoded to their
# own /Sanramon-Website/variants/<name>/ base — no env var needed for them.
#
# Run from the repo root: bash scripts/build-all.sh
set -euo pipefail
cd "$(dirname "$0")/.."
ROOT="$(pwd)"

echo "==> Building master (DEPLOY_TARGET=pages)"
npm install --no-audit --no-fund
rm -rf dist
DEPLOY_TARGET=pages npm run build

echo "==> Building variants"
for v in premium editorial; do
  echo "  -> $v"
  (cd "variants/$v" && npm install --no-audit --no-fund && rm -rf dist && npm run build)
done

echo "==> Assembling combined dist/"
mkdir -p dist/variants
for v in premium editorial; do
  rm -rf "dist/variants/$v"
  cp -r "variants/$v/dist" "dist/variants/$v"
done

echo "==> Done. Combined output is in dist/"
echo "    Deploy it with: npm run deploy:all"
