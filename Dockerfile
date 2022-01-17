FROM node

WORKDIR /app

COPY package*.json /app/

COPY tsconfig.json /app

RUN npm install -g typescript

RUN npm install

CMD npm run build

COPY . /app

RUN ls -a

EXPOSE 5000

CMD ["node", "dist/index.js"]