FROM node:lts-alpine as builder
RUN apk add git
RUN npx degit c01-glucoseguardian/web --force
COPY docker/config.js src/js/config.js
RUN npm install
RUN npm run build

FROM nginx:alpine as app
ENV API_URL=https://api.glucoseguardian.it
EXPOSE 80/tcp
COPY --from=builder src/dist/ /usr/share/nginx/html/
COPY docker/nginx.conf.template /etc/nginx/conf.d/default.conf.template
COPY docker/docker-entrypoint.sh /
RUN chmod +x docker-entrypoint.sh
