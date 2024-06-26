FROM node:18-alpine

RUN mkdir -p /app

WORKDIR /app

COPY package*json ./

RUN npm install

COPY . .

ENV PORT=8080

EXPOSE 8080

CMD ["npm", "run", "docker"]