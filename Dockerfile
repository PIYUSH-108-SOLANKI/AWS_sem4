# Dockerfile

# Use Node.js LTS
FROM node:20-alpine

# Set working directory
WORKDIR /usr/src/app

# Install dependencies
COPY backend/package*.json ./
RUN npm install

# Copy application code
COPY backend/ ./

# Expose port
EXPOSE 3000

# Start application
CMD ["npm", "start"]
