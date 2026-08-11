#!/bin/bash
set -e

# Install Node.js 20 on Ubuntu if not installed
if ! command -v node &> /dev/null; then
  sudo apt update && sudo apt install -y curl
  curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
  sudo apt install -y nodejs
fi

# Install dependencies, build, and serve
npm install
npm run build
