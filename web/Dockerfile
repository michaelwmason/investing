FROM nginx

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

COPY /src/default.conf /etc/nginx/conf.d/default.conf

COPY /dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
