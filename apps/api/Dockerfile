# Install dependencies only when needed
FROM node:lts-alpine as deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY dist/apps/api/package*.json ./
RUN npm install --omit=dev


# Production image, copy all the files and run nest
FROM node:lts-alpine as development
RUN apk add --no-cache dumb-init
RUN npm i -g nodemon
ENV NODE_ENV development
ENV PORT 3000
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/package.json ./package.json
COPY dist/apps/api/ .
RUN npx prisma generate
RUN chown -R node:node /app
USER node
EXPOSE 3000
CMD ["nodemon", "main.js"]

# Production image, copy all the files and run nest
FROM node:lts-alpine as prod
RUN apk add --no-cache dumb-init
ENV NODE_ENV production
ENV PORT 3000
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/package.json ./package.json
COPY dist/apps/api .
RUN chown -R node:node /app
RUN npx prisma generate
USER node
EXPOSE 3000
CMD ["dumb-init", "node", "main.js"]
