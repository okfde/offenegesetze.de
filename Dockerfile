FROM node:14

RUN apt-get update && apt-get install g++ make python

WORKDIR /code

COPY package*.json ./

RUN npm install

COPY . .

RUN node_modules/.bin/next build

EXPOSE 3000
CMD [ "npm", "run", "production"]
