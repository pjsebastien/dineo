#!/bin/bash

# Script de build pour Vercel avec prerendering
echo "🏗️  Building with Vite..."
npm run build

echo "🚀 Starting preview server..."
npm run preview &
SERVER_PID=$!

# Attendre que le serveur soit prêt
echo "⏳ Waiting for server to be ready..."
sleep 5

# Tester si le serveur répond
MAX_RETRIES=10
RETRY_COUNT=0
while [ $RETRY_COUNT -lt $MAX_RETRIES ]; do
  if curl -s http://localhost:4173 > /dev/null; then
    echo "✅ Server is ready!"
    break
  fi
  RETRY_COUNT=$((RETRY_COUNT + 1))
  echo "   Retry $RETRY_COUNT/$MAX_RETRIES..."
  sleep 2
done

if [ $RETRY_COUNT -eq $MAX_RETRIES ]; then
  echo "❌ Server failed to start"
  kill $SERVER_PID 2>/dev/null
  exit 1
fi

# Lancer le prerendering
echo "🎨 Prerendering pages..."
node scripts/simple-prerender.mjs

PRERENDER_EXIT=$?

# Arrêter le serveur
echo "🛑 Stopping preview server..."
kill $SERVER_PID 2>/dev/null

if [ $PRERENDER_EXIT -eq 0 ]; then
  echo "✅ Build completed successfully!"
  exit 0
else
  echo "❌ Prerendering failed"
  exit 1
fi
