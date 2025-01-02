# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Build argument for SendGrid API Key
ARG SENDGRID_API_KEY
ARG S3_CDN_ENDPOINT

# Set environment variable for SendGrid API Key (server-side usage)
ENV SENDGRID_API_KEY=$SENDGRID_API_KEY
ENV S3_CDN_ENDPOINT=$S3_CDN_ENDPOINT

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

#REMOVE any existing build cache
RUN rm -rf .next

# Build the Next.js app
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Start the app
CMD ["npm", "run", "start"]
