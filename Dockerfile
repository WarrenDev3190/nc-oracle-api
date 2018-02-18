FROM node:8-alpine
WORKDIR /srv
COPY . .
RUN yarn install
EXPOSE 4040
CMD [ "yarn", "run", "start:dev" ]