#!/usr/bin/env bash
set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"

cd "$PROJECT_DIR"

echo "▶ Building..."
npm run build

echo "▶ Stopping existing next-server..."
pkill -f "next-server" 2>/dev/null || true
pkill -f "next start"  2>/dev/null || true
sleep 1

echo "▶ Starting..."
nohup npm start > /tmp/next-homepage.log 2>&1 &
echo "  PID: $!"

sleep 2
if curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/ | grep -q "200"; then
  echo "✓ Server is up at http://localhost:3000"
else
  echo "⚠ Server may still be starting. Check: tail -f /tmp/next-homepage.log"
fi
