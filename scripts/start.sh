#!/bin/bash
# start.sh - Script to start the application

echo "Starting IrrigaFlow Smart Irrigation Cloud..."

# Assuming you want to start the backend for now
# Later you can extend this to start the frontend as well
cd backend
npm install
npm start
