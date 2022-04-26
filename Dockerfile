# Base Image
FROM node:alpine


# Dependencies
WORKDIR /usr/app
COPY ./package.json ./
RUN npm install 
COPY ./ ./

# Default Command
CMD ["npm", "start"]