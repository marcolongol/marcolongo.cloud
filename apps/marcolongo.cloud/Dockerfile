ARG NODE_VERSION=20.10.0
ARG ALPINE_VERSION=3.19.1

FROM node:${NODE_VERSION}-alpine as node
FROM alpine:${ALPINE_VERSION} as development

COPY --from=node /usr/lib /usr/lib
COPY --from=node /usr/local/lib /usr/local/lib
COPY --from=node /usr/local/bin /usr/local/bin
COPY --from=node /usr/local/include /usr/local/include

RUN apk update && apk upgrade

WORKDIR /app

COPY ./package*.json ./
COPY ./nx.json ./
COPY ./tsconfig*.json ./
COPY ./.eslintrc.json ./
RUN npm install --loglevel verbose

COPY ./apps ./apps
COPY ./libs ./libs

EXPOSE 4200

CMD [ "npm", "run", "start:web" ]

FROM docker.io/nginx:stable-alpine as production
COPY dist/apps/marcolongo.cloud/* /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
