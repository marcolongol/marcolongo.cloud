FROM nginx:stable-alpine
COPY dist/apps/marcolongo.cloud/browser/* /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
