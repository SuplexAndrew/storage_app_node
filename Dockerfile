FROM node

WORKDIR /app

COPY package.json /app

RUN npm install

Copy . .

EXPOSE 5000

CMD ["tsc"]
CMD ["node", "dist/index.js"]