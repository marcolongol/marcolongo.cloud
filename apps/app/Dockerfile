FROM nginx:stable-alpine
COPY dist/apps/app/browser/ /usr/share/nginx/html/
COPY apps/app/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
