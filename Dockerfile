FROM node:10
WORKDIR /app
COPY package*.json ./
COPY wait-for-it.sh /app/wait-for-it.sh
RUN chmod +x /app/wait-for-it.sh
RUN npm i
COPY . .
EXPOSE 3000
