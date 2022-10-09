FROM node:16.17.1

WORKDIR /usr/src/sc-pictures

COPY . .

RUN npm install

EXPOSE 8080

CMD ["npm", "start"]