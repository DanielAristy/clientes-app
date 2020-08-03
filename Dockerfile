FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build -- --prod

#stage 2
FROM nginx:alpine
COPY --from=node /app/dist/clientes-app /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf