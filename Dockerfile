FROM node:8-alpine
WORKDIR /srv
COPY . .
RUN yarn install
CMD [ "yarn", "run", "start:dev" ]