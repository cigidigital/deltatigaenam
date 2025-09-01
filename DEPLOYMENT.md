# 🚀 cPanel Deployment Guide

This guide will help you deploy your React app to cPanel using Git with deploy keys for private repositories.

## 📋 Prerequisites

-   cPanel hosting account with Git Version Control
-   Your private Git repository URL
-   SSH access to your cPanel (optional but recommended)

## 🔑 **Deploy Key Setup (Required for Private Repos)**

### Step 1: Generate SSH Key Pair in cPanel

1. **Access cPanel Terminal** (if available) or use SSH access
2. **Generate SSH key pair**:
    ```bash
    ssh-keygen -t ed25519 -C "cpanel-deploy-key" -f ~/.ssh/delta_deploy_key
    ```
3. **Set proper permissions**:
    ```bash
    chmod 600 ~/.ssh/delta_deploy_key
    chmod 644 ~/.ssh/delta_deploy_key.pub
    ```

### Step 2: Get the Public Key

1. **Display the public key**:
    ```bash
    cat ~/.ssh/delta_deploy_key.pub
    ```
2. **Copy the entire output** (starts with `ssh-ed25519`)

### Step 3: Add Deploy Key to Your Git Repository

1. **Go to your Git repository** (GitHub, GitLab, etc.)
2. **Navigate to Settings → Deploy Keys** (or SSH Keys)
3. **Click "Add deploy key"**
4. **Title**: `cPanel Deploy Key`
5. **Key**: Paste the public key you copied
6. **Check "Allow write access"** if you need to push from cPanel
7. **Click "Add key"**

### Step 4: Create SSH Config (Critical for cPanel Git)

**This step is essential for cPanel Git to work properly!**

```bash
# Create SSH config directory
mkdir -p ~/.ssh
chmod 700 ~/.ssh

# Create SSH config file
cat > ~/.ssh/config << 'EOF'
Host github-delta
    HostName github.com
    User git
    IdentityFile ~/.ssh/delta_deploy_key
    IdentitiesOnly yes
    PreferredAuthentications publickey
EOF

# Set proper permissions
chmod 600 ~/.ssh/config
```

### Step 5: Test SSH Connection

1. **Test with explicit key**:
    ```bash
    ssh -i ~/.ssh/delta_deploy_key -T git@github.com
    ```
2. **Test with SSH config** (should work now):
    ```bash
    ssh -T git@github-delta
    ```
3. **You should see**: "Hi username! You've successfully authenticated..."

## 🔧 Step-by-Step Deployment

### 1. **Access cPanel Git Version Control**

1. Log into your cPanel
2. Find and click on "Git Version Control" or "Git"
3. Click "Create" to set up a new repository

### 2. **Configure Git Repository**

1. **Repository Name**: Enter a name for your project (e.g., `deltatigaenam`)
2. **Repository URL**: Use SSH config format: `git@github-delta:username/repo-name.git`
    - **Example**: `git@github-delta:cigiagency/deltatigaenam.git`
3. **Branch**: Set to `main` or `master` (your default branch)
4. **Directory**: Set to `public_html` (or your desired web directory)
5. **Check "Deploy automatically"** if you want automatic deployments

### 3. **SSH Configuration**

1. **SSH Key**: The deploy key you generated will be used automatically
2. **SSH Config**: The config file ensures cPanel Git uses the correct key
3. **No password needed** - the SSH key handles authentication

### 4. **Initial Clone**

Click "Create" to clone your repository. This may take a few minutes.

### 5. **Build and Deploy**

After the initial clone, you have several options:

#### Option A: Pre-built Assets (Recommended if dist is committed)

**If you've committed the `dist` folder to Git:**

1. **Clone automatically includes built files** - no build needed!
2. **Just copy the built files** to the web directory:
    ```bash
    cd public_html
    cp -r dist/* .
    rm -rf dist
    ```

**Benefits:**

-   ✅ **No build time** in cPanel (much faster)
-   ✅ **No dependency installation** needed
-   ✅ **Consistent builds** across environments
-   ✅ **Works on shared hosting** with limited resources

#### Option B: Use the Deploy Script

1. **Make the script executable**:

    ```bash
    chmod +x deploy.sh
    ```

2. **Run the deployment script**:

    ```bash
    ./deploy.sh
    ```

3. **The script will automatically**:
    - Install dependencies
    - Build the application
    - Copy .htaccess and public assets
    - Prepare everything for deployment

#### Option C: Manual Build

1. **Access Terminal** (if available in cPanel)
2. Navigate to your repository directory:
    ```bash
    cd public_html
    ```
3. **Install dependencies**:
    ```bash
    npm install
    ```
4. **Build the application**:
    ```bash
    npm run build:cpanel
    ```
5. **Move build files**:
    ```bash
    # Copy all files from dist to current directory
    cp -r dist/* .
    # Remove dist folder
    rm -rf dist
    ```

#### Option D: Automatic Deployment

If you enabled automatic deployment, cPanel will pull updates when you push to your repository. However, you'll still need to handle the built files.

### 6. **Set up Auto-Deploy Hook (Optional)**

For automatic deployments after each push:

1. Create a webhook in your Git repository
2. Point it to: `https://yourdomain.com/deploy.php`
3. Create `deploy.php` in your cPanel:

**If dist is committed to Git:**

```php
<?php
// deploy.php - for pre-built assets
$output = shell_exec('cd /home/username/public_html && git pull && cp -r dist/* . && rm -rf dist 2>&1');
file_put_contents('deploy.log', date('Y-m-d H:i:s') . ': ' . $output . "\n", FILE_APPEND);
?>
```

**If building in cPanel:**

```php
<?php
// deploy.php - for building in cPanel
$output = shell_exec('cd /home/username/public_html && git pull && npm install && npm run build:cpanel && cp -r dist/* . && rm -rf dist 2>&1');
file_put_contents('deploy.log', date('Y-m-d H:i:s') . ': ' . $output . "\n", FILE_APPEND);
?>
```

## 🔄 Updating Your App

### Method 1: Pre-built Assets (Recommended if dist is committed)

1. **Build locally**:

    ```bash
    npm run build:cpanel
    # or if using bun
    bun run build:cpanel
    ```

2. **Commit and push** the `dist` folder:

    ```bash
    git add dist/
    git commit -m "Update built assets"
    git push origin main
    ```

3. **In cPanel**: Click "Pull or Deploy" to get the latest changes
4. **Copy built files**:
    ```bash
    cd public_html
    cp -r dist/* .
    rm -rf dist
    ```

**Benefits:**

-   ✅ **Fast deployment** - no build time in cPanel
-   ✅ **Consistent builds** - same environment as development
-   ✅ **No dependency issues** - works on any hosting
-   ✅ **Easy rollback** - just pull previous commit

### Method 2: Push and Pull with Build

1. Make changes locally
2. Push to your Git repository
3. In cPanel, click "Pull or Deploy" to get the latest changes
4. Rebuild the application using one of the methods above

### Method 3: Use Deploy Script

1. Make changes locally
2. Push to your Git repository
3. In cPanel, pull the latest changes
4. Run `./deploy.sh` to rebuild and deploy

### Method 4: Direct Upload

1. Build locally: `npm run build:cpanel`
2. Upload the contents of the `dist` folder to your cPanel public_html directory

## 🔑 **Managing Multiple Websites with Different Deploy Keys**

### SSH Config for Multiple Websites

```bash
# Create SSH config for multiple deploy keys
cat > ~/.ssh/config << 'EOF'
# Website 1: deltatigaenam
Host github-delta
    HostName github.com
    User git
    IdentityFile ~/.ssh/delta_deploy_key
    IdentitiesOnly yes

# Website 2: another-website
Host github-another
    HostName github.com
    User git
    IdentityFile ~/.ssh/another_deploy_key
    IdentitiesOnly yes

# Website 3: third-website
Host github-third
    HostName github.com
    User git
    IdentityFile ~/.ssh/third_deploy_key
    IdentitiesOnly yes
EOF

chmod 600 ~/.ssh/config
```

### Usage for Different Websites

-   **Website 1**: `git@github-delta:cigiagency/deltatigaenam.git`
-   **Website 2**: `git@github-another:username/another-repo.git`
-   **Website 3**: `git@github-third:username/third-repo.git`

### Adding New Websites

1. **Generate new deploy key**:
    ```bash
    ssh-keygen -t ed25519 -f ~/.ssh/website2_deploy_key
    ```
2. **Add to GitHub** as deploy key
3. **Add to SSH config** with new host alias
4. **Use new host alias** in cPanel Git

## ⚠️ Important Notes

1. **Node.js Version**: Ensure your cPanel supports the Node.js version your project requires
2. **Build Time**: The build process may take several minutes on shared hosting
3. **Memory Limits**: Large builds might hit memory limits on shared hosting
4. **File Permissions**: Ensure proper file permissions (usually 644 for files, 755 for directories)
5. **SSH Key Security**: Keep your private key secure and never share it
6. **SSH Config**: Essential for cPanel Git to work with deploy keys
7. **Script Permissions**: Always make deployment scripts executable with `chmod +x`
8. **Dist Folder Strategy**:
    - **Option A**: Commit `dist` folder to Git for fast deployment (no build in cPanel)
    - **Option B**: Keep `dist` in `.gitignore` and build in cPanel (more control)
9. **Pre-built Assets**: If committing `dist`, ensure all public assets are included in the build

## 🐛 Troubleshooting

### SSH Connection Issues

-   **Verify the deploy key is added** to your Git repository
-   **Check SSH key permissions** (600 for private, 644 for public)
-   **SSH config is critical** - cPanel Git needs it to find your deploy key
-   **Test with explicit key**: `ssh -i ~/.ssh/delta_deploy_key -T git@github.com`
-   **Test with SSH config**: `ssh -T git@github-delta`

### Common SSH Errors

-   **"Permission denied (publickey)"**: SSH config not set up or wrong key file
-   **"No such device or address"**: cPanel trying to use HTTPS instead of SSH
-   **"Could not read Username"**: cPanel defaulting to HTTPS authentication

### Script Permission Issues

-   **"Permission denied"**: Run `chmod +x deploy.sh` to make script executable
-   **"Command not found"**: Ensure you're in the correct directory
-   **"No such file"**: Check if the script exists in current directory

### MIME Type and Asset Issues

-   **"application/octet-stream" error**: Ensure `.htaccess` is properly uploaded with MIME type fixes
-   **404 errors for assets**: Check if public assets are copied during build
-   **Missing images**: Verify `npm run build:cpanel` copies all public files

### Build Fails

-   Check Node.js version compatibility
-   Increase memory limits if possible
-   Use `npm run build:cpanel` instead of `npm run build`
-   Ensure all dependencies are installed

### Routing Issues

-   Ensure `.htaccess` file is properly uploaded
-   Check that mod_rewrite is enabled on your hosting
-   Verify React Router paths are correct

### Performance Issues

-   Enable gzip compression in `.htaccess`
-   Use CDN for static assets if possible
-   Optimize images and assets

## 📁 File Structure After Deployment

Your `public_html` directory should contain:

```
public_html/
├── index.html
├── .htaccess
├── assets/
│   ├── css/
│   ├── js/
│   └── images/
├── logo.png
├── other public assets
└── other static files
```

## 🎉 Success!

Your React app should now be accessible at your domain! The `.htaccess` file will handle React Router routing, MIME types will be correct, and all assets will be properly served.

## 🔐 **Security Best Practices**

1. **Use deploy keys** instead of personal access tokens
2. **Limit deploy key permissions** to read-only unless you need write access
3. **Rotate keys regularly** for production environments
4. **Monitor access logs** for any suspicious activity
5. **Use SSH key passphrases** for additional security (optional)
6. **Separate deploy keys** for different websites/projects
7. **Use SSH config** to manage multiple keys efficiently
8. **Secure file permissions** (600 for SSH keys, 644 for web files)

## 🚀 **Quick Reference Commands**

```bash
# Generate deploy key
ssh-keygen -t ed25519 -f ~/.ssh/website_deploy_key

# Set permissions
chmod 600 ~/.ssh/website_deploy_key
chmod 644 ~/.ssh/website_deploy_key.pub

# Test connection
ssh -i ~/.ssh/website_deploy_key -T git@github.com

# Create SSH config
cat > ~/.ssh/config << 'EOF'
Host github-website
    HostName github.com
    User git
    IdentityFile ~/.ssh/website_deploy_key
    IdentitiesOnly yes
EOF

# Test with config
ssh -T git@github-website

# Make deploy script executable
chmod +x deploy.sh

# Run deployment
./deploy.sh

# Manual build and deploy
npm run build:cpanel
cp -r dist/* .
rm -rf dist
```
