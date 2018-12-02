FROM node:11.2-alpine

RUN npm install -g nodemon@1.12.6

WORKDIR /usr/project
COPY package.json .
RUN npm install --quiet

COPY . .
