FROM node:20-alpine

WORKDIR /app

RUN apk add --no-cache curl

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3000
