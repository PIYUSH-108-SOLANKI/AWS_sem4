#!/bin/bash
# health-check.sh - Script to check the health of the application

echo "Checking health of the backend..."

RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/health)

if [ "$RESPONSE" -eq 200 ]; then
  echo "Application is HEALTHY."
  exit 0
else
  echo "Application is DOWN or UNHEALTHY (Status code: $RESPONSE)."
  exit 1
fi
