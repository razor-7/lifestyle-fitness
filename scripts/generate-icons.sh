#!/bin/bash

# Create directories if they don't exist
mkdir -p public/assets/icons

# Download the base icon (you can replace this URL with your own icon)
curl -o public/assets/icons/original.png "https://raw.githubusercontent.com/FortAwesome/Font-Awesome/master/svgs/solid/dumbbell.svg"

# Convert SVG to PNG and create favicon.ico
convert public/assets/icons/original.png -resize 256x256 public/favicon.ico

# Generate various sizes for different devices
convert public/assets/icons/original.png -resize 16x16 public/assets/icons/favicon-16x16.png
convert public/assets/icons/original.png -resize 32x32 public/assets/icons/favicon-32x32.png
convert public/assets/icons/original.png -resize 192x192 public/assets/icons/android-chrome-192x192.png
convert public/assets/icons/original.png -resize 512x512 public/assets/icons/android-chrome-512x512.png
convert public/assets/icons/original.png -resize 180x180 public/assets/icons/apple-touch-icon.png
convert public/assets/icons/original.png -resize 152x152 public/assets/icons/apple-touch-icon-152x152.png
convert public/assets/icons/original.png -resize 120x120 public/assets/icons/apple-touch-icon-120x120.png
convert public/assets/icons/original.png -resize 76x76 public/assets/icons/apple-touch-icon-76x76.png
convert public/assets/icons/original.png -resize 60x60 public/assets/icons/apple-touch-icon-60x60.png
convert public/assets/icons/original.png -resize 70x70 public/assets/icons/mstile-70x70.png
convert public/assets/icons/original.png -resize 150x150 public/assets/icons/mstile-150x150.png
convert public/assets/icons/original.png -resize 310x150 public/assets/icons/mstile-310x150.png
convert public/assets/icons/original.png -resize 310x310 public/assets/icons/mstile-310x310.png 