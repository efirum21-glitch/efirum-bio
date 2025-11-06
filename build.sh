#!/bin/bash
set -e

echo "🧱 Installing dependencies..."
npm install

echo "🚀 Building Next.js project..."
npm run build

echo "✅ Build completed successfully!"
