FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY tsconfig.json ./

COPY . .

RUN npx tsc -p .

EXPOSE 3000

CMD ["node", "dist/app.js"]
