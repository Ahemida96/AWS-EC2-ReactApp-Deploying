# Use the official lightweight Node.js 14 image
FROM node:14-slim

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the dependencies file to the working directory
COPY package.json .

# Install all dependencies
RUN npm install

# Copy the content of the local src directory to the working directory
COPY . .

# Build the app
RUN npm run build

# Inform Docker that the container is listening on the specified port at runtime
EXPOSE 3000

# Set the command to run the app
CMD ["npm", "start"]

