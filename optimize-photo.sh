#!/bin/bash

# Photo Optimization Script
# Place this script in your portfolio folder and run it

echo "📸 Portfolio Photo Optimizer"
echo "============================"

# Check if ImageMagick is installed (for resizing)
if command -v convert &> /dev/null; then
    echo "✅ ImageMagick found - can optimize photos"
    
    # Ask for photo file
    read -p "Enter your photo filename (e.g., my-photo.jpg): " photo_file
    
    if [ -f "$photo_file" ]; then
        echo "🔄 Optimizing $photo_file..."
        
        # Create optimized version
        convert "$photo_file" -resize 400x500^ -gravity center -crop 400x500+0+0 -quality 85 profile-photo.jpg
        
        echo "✅ Optimized photo saved as 'profile-photo.jpg'"
        echo "📏 Size: 400x500 pixels"
        echo "🎯 Ready for your portfolio!"
    else
        echo "❌ Photo file '$photo_file' not found"
    fi
else
    echo "ℹ️  ImageMagick not installed - manual resizing needed"
    echo "You can:"
    echo "1. Use online tools like tinypng.com or squoosh.app"
    echo "2. Use Preview (Mac) or Paint (Windows) to resize"
    echo "3. Install ImageMagick: brew install imagemagick"
fi

echo ""
echo "📝 Remember to update data.js with:"
echo "profileImage: \"./profile-photo.jpg\""
