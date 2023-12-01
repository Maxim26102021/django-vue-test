FROM node:alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build


FROM nginx:stable-alpine
COPY  --from=build /app/static /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]