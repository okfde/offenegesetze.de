FROM node:14-alpine

RUN apk add g++ make python

WORKDIR /code

COPY package*.json ./

RUN npm install

COPY . .

RUN node_modules/.bin/next build

EXPOSE 3000
CMD [ "npm", "run", "production"]
