FROM node:16-alpine
WORKDIR /usr/app
COPY package*.json ./
RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh
RUN npm install && npm install typescript -g
COPY . .
CMD [ "tsc" ]
EXPOSE 2567
CMD [ "npm", "start" ]