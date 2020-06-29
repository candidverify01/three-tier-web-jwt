FROM node:13.12.0-alpine as build
WORKDIR /myapp

ENV NODE_ENV production

COPY package.json ./
COPY package-lock.json ./

# Install Node.js dependencies
RUN npm ci --only=production

# Copy Node.js files
COPY . ./

# Expose port 8080 and start Node.js server
EXPOSE 8080
CMD ["node", "server.js"]
