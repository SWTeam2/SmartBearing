FROM node:13.12.0-alpine
WORKDIR /app
COPY src/main/frontend/package.json ./
COPY src/main/frontend/package-lock.json ./
RUN npm install
COPY . ./
EXPOSE 3000