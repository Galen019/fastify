# Stage 1: Build the app
FROM node:current-alpine AS build

# Set working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json (or yarn.lock) to the working directory
COPY package*.json ./

# Install dependencies (including ts-node and typescript)
RUN npm install

# Copy the source code to the container
COPY . .

# Expose the port your app will run on
EXPOSE 3000

# Start the application using ts-node (directly without building first)
CMD ["npm", "start"]