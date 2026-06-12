FROM node:20

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY src/ .

RUN npx prisma generate

EXPOSE 3000

CMD ["npm", "run", "dev"]

