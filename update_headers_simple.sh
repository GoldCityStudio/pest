#!/bin/bash

# Simple script to update headers using sed
# This will add the Blog link to all navigation menus

echo "Updating headers to include Blog link..."

# Find all HTML files except index.html and blog files
find . -name "*.html" -not -path "./index.html" -not -path "./blog/*" | while read file; do
    echo "Processing $file..."
    
    # Add Blog link before "聯絡我們" in navigation
    sed -i '' 's|<li role="none"><a href="contact.html" role="menuitem">聯絡我們</a></li>|<li role="none"><a href="blog/index.html" role="menuitem" style="background: rgba(255, 255, 255, 0.15); border: 1px solid rgba(255, 255, 255, 0.3); font-weight: 600; color: #fff !important; text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3); border-radius: 6px; margin: 0 3px; padding: 15px 20px;">Blog</a></li>\n                    <li role="none"><a href="contact.html" role="menuitem">聯絡我們</a></li>|g' "$file"
    
    # Update logo link to point to index.html
    sed -i '' 's|<a href="#home"|<a href="index.html"|g' "$file"
    
    # Update phone number link
    sed -i '' 's|href="tel:[^"]*"|href="https://wa.me/85270173695"|g' "$file"
    
    # Update phone number text
    sed -i '' 's|+852-[0-9]*-[0-9]*|+852-7017-3695|g' "$file"
done

echo "Header update completed!" 