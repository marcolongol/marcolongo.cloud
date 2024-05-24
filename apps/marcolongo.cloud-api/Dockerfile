ARG NODE_VERSION=20.10.0
ARG ALPINE_VERSION=3.19.1

FROM node:${NODE_VERSION}-alpine as node
FROM alpine:${ALPINE_VERSION} as development

COPY --from=node /usr/lib /usr/lib
COPY --from=node /usr/local/lib /usr/local/lib
COPY --from=node /usr/local/bin /usr/local/bin
COPY --from=node /usr/local/include /usr/local/include

RUN apk update && apk upgrade

RUN apk add --no-cache python3 build-base pkgconfig pixman-dev cairo-dev pango-dev libjpeg-turbo-dev giflib-dev

WORKDIR /app

COPY ./package*.json ./
COPY ./nx.json ./
COPY ./tsconfig*.json ./
COPY ./.eslintrc.json ./
RUN npm install --loglevel verbose

COPY ./apps ./apps
COPY ./libs ./libs

EXPOSE 3000

CMD [ "npm", "run", "start:api" ]

# Install dependencies only when needed
FROM node:lts-alpine as deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY dist/apps/marcolongo.cloud-api/package*.json ./
RUN npm install --omit=dev

# Production image, copy all the files and run nest
FROM node:lts-alpine as runner
RUN apk add --no-cache dumb-init
ENV NODE_ENV production
ENV PORT 3000
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/package.json ./package.json
COPY dist/apps/marcolongo.cloud-api .
RUN chown -R node:node .
USER node
EXPOSE 3000
CMD ["dumb-init", "node", "main.js"]
