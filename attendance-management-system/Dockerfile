#Base image
FROM node:22-alpine AS base

# Set working directory
WORKDIR /app

# Copy only package files first
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the application files
COPY . .

# Start the app
CMD ["yarn", "dev"]