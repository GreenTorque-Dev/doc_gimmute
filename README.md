# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Quick Setup (Single Command)

Run this single command on Ubuntu

```bash
chmod +x setup.sh
./setup.sh
```

### What `setup.sh` does automatically:
1. Detects OS and installs **Node.js (v20)** and **npm** if not already installed
2. Installs all project dependencies (`npm install`)
3. Builds the production site (`npm run build`)
4. Launches the live server accessible locally and remotely on `http://<SERVER_IP>:3000/` (`npx docusaurus serve --host 0.0.0.0 --port 3000`)

---

## Manual Installation & Commands

## Installation

```bash
yarn
```

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
