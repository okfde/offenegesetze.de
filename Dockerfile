FROM node:10-alpine

WORKDIR /code

COPY package*.json ./

RUN npm install

COPY . .

RUN node_modules/.bin/next build

EXPOSE 3000
CMD [ "npm", "run", "production"]
