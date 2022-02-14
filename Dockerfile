FROM node:16

WORKDIR /usr/project/

COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 3000

CMD npm start
