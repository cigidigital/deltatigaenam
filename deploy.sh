#!/bin/bash

# Exit on any error
set -e

echo "🚀 Starting deployment..."

# Install dependencies using Bun
echo "📦 Installing dependencies..."
bun install

# Build the application
echo "🔨 Building application..."
bun run build

# Copy .htaccess to dist folder
echo "📁 Copying .htaccess..."
cp public/.htaccess dist/

# Copy all public assets to dist folder
echo "📁 Copying public assets..."
cp -r public/* dist/

echo "✅ Deployment completed successfully!"
echo "📁 Build output is in the 'dist' folder"
echo "🌐 Upload the contents of 'dist' folder to your cPanel public_html directory"
