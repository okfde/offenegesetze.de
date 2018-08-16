FROM node:8.11.4-alpine

WORKDIR /code

COPY package*.json ./

RUN npm install

COPY . .

RUN node_modules/.bin/next build

EXPOSE 3000
CMD [ "npm", "start" ]