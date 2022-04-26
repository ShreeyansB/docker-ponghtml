# Base Image
FROM node:alpine


# Dependencies
WORKDIR /usr/app
COPY ./ ./
RUN npm install 

# Default Command
CMD ["npm", "start"]