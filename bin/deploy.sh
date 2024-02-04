#!/bin/bash

# Clone the repository from GitHub
git clone https://github.com/absyro/absyro-website ~/git_temp

# Navigate to the cloned repository directory
cd ~/git_temp

# Run npm build to build the project
npm run build

# Copy the contents of the dist directory to the target directory ~/absyro-website
cp -r ~/git_temp/dist/* ~/absyro-website/site

# Navigate to the target directory ~/absyro-website
cd ~/absyro-website/site

# Remove ~/git_temp folder
rm -rf ~/git_temp

# Use pm2 to serve the application on port 8080
pm2 serve 8080 --watch --ignore-watch="node_modules databases logs" --attach --deep-monitoring --max-memory-restart 3G -o logs/outputs.log -e logs/errors.log