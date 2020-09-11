FROM node:12.13-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8877
CMD [ "node", "index.js" ]