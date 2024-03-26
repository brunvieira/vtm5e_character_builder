# Use the latest LTS (Long Term Support) version of Node.js
FROM node:lts

RUN yarn set version stable
RUN yarn install 

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if present) to the container
# COPY package*.json ./

# Install dependencies
# RUN npm install

# Copy the rest of the application code to the container
COPY character_builder/* .

RUN yarn

# Expose the port your app runs on
EXPOSE 3000

# Expose the port for Storybook
EXPOSE 6006

# Start the application
CMD ["bash"]

# Define the volume to mount on local directory
VOLUME /app