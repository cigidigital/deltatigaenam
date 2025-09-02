#!/bin/bash

# 🚀 cPanel Auto-Deploy Script
# This script automatically extracts only the dist folder contents
# after pulling from Git, keeping the web directory clean

set -e

echo "🚀 Starting cPanel auto-deployment..."

# Get the current directory (should be /home/cigico/deltatigaenam.com)
CURRENT_DIR=$(pwd)
echo "📍 Working directory: $CURRENT_DIR"

# Store the script name to ensure it's not deleted
SCRIPT_NAME=$(basename "$0")

# Stash any local changes to avoid conflicts during git pull
echo "📦 Stashing any local changes..."
git stash push -m "Auto-stash before deployment $(date)"

# Pull latest changes from Git
echo "📥 Pulling latest changes from Git..."
git pull origin main

# Check if dist folder exists
if [ ! -d "dist" ]; then
    echo "❌ Error: dist folder not found!"
    echo "💡 Make sure you've built the project and committed the dist folder"
    exit 1
fi

# Create a backup of current web files (optional)
echo "💾 Creating backup of current files..."
if [ -f "index.html" ]; then
    mkdir -p backup/$(date +%Y%m%d_%H%M%S)
    cp -r index.html assets/ .htaccess backup/$(date +%Y%m%d_%H%M%S)/ 2>/dev/null || true
fi

# Remove all current web files (except .git, dist, backup, and this script)
echo "🧹 Cleaning current directory..."
find . -maxdepth 1 ! -name '.' ! -name '..' ! -name '.git' ! -name 'dist' ! -name 'backup' ! -name "$SCRIPT_NAME" -exec rm -rf {} +

# Copy dist contents to current directory
echo "📁 Extracting built files from dist..."
cp -r dist/. .

# Remove dist folder (clean up)
rm -rf dist

# Set proper permissions
echo "🔒 Setting proper file permissions..."
find . -type f -exec chmod 644 {} \;
find . -type d -exec chmod 755 {} \;

# Make sure .htaccess is readable
if [ -f ".htaccess" ]; then
    chmod 644 .htaccess
fi

# Apply stashed changes if any (for files that don't conflict)
echo "🔄 Applying stashed changes (if any)..." 
git stash pop 2>/dev/null || echo "ℹ️  No stashed changes to apply or conflicts occurred"

echo "✅ Deployment completed successfully!"
echo "🌐 Your website should now be live at your domain"
echo "📁 Files deployed:"
ls -la

# Optional: Log the deployment
echo "$(date): Deployment completed successfully" >> deploy.log