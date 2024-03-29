FROM node:19.8.1-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install -g @angular/cli
RUN npm install
COPY . .
RUN ng build
EXPOSE 4200
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4200"]
