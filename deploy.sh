#!/bin/bash

# Portfolio Deployment Script
# This script helps you deploy your portfolio to GitHub Pages

echo "🚀 Portfolio Deployment Helper"
echo "=============================="

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    exit 1
fi

# Check if we're in a git repository
if [ ! -d .git ]; then
    echo "📁 Initializing Git repository..."
    git init
    echo "✅ Git repository initialized"
fi

# Add all files
echo "📝 Adding files to Git..."
git add .

# Commit changes
echo "💾 Committing changes..."
read -p "Enter commit message (or press Enter for default): " commit_message
if [ -z "$commit_message" ]; then
    commit_message="Update portfolio"
fi
git commit -m "$commit_message"

# Check if remote origin exists
if ! git remote get-url origin &> /dev/null; then
    echo "🔗 Setting up remote repository..."
    read -p "Enter your GitHub username: " username
    read -p "Enter your repository name (default: $username.github.io): " repo_name
    if [ -z "$repo_name" ]; then
        repo_name="$username.github.io"
    fi
    git remote add origin "https://github.com/$username/$repo_name.git"
    echo "✅ Remote repository set up"
fi

# Push to GitHub
echo "🚀 Pushing to GitHub..."
git branch -M main
git push -u origin main

echo ""
echo "🎉 Deployment complete!"
echo "Your portfolio should be available at:"
echo "https://$(git remote get-url origin | sed 's/.*github.com\///g' | sed 's/\.git//g' | sed 's/\//.github.io/')"
echo ""
echo "📋 Next steps:"
echo "1. Go to your GitHub repository"
echo "2. Navigate to Settings > Pages"
echo "3. Select 'Deploy from a branch'"
echo "4. Choose 'main' branch and '/ (root)' folder"
echo "5. Click 'Save'"
echo ""
echo "⏰ Note: It may take a few minutes for your site to be live."
