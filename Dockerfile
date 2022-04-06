FROM node:14-alpine 

WORKDIR /app
ADD . /app

RUN yarn install
RUN yarn build

CMD yarn start:prod