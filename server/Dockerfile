# Base image
FROM node:20

# Install Python
RUN apt-get update && apt-get install -y \
    python3 \
    python3-pip

# Working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install Node dependencies
RUN npm install

# Copy python requirements
COPY python/requirements.txt ./python/requirements.txt

# Install Python dependencies
RUN pip3 install --break-system-packages -r python/requirements.txt

# Copy source code
COPY . .

# Compile TypeScript
RUN npm run build

# Port
EXPOSE 5000

# Run app
CMD ["npm", "start"]