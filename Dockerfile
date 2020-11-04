FROM node:14-alpine

WORKDIR /usr/app

COPY ./ /usr/app

RUN npm install
RUN npm run build

EXPOSE 3002

CMD npm start
