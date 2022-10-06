FROM node:18-alpine AS build
RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app
COPY . .
RUN yarn install
RUN yarn build

FROM node:18-alpine
RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app
COPY --from=build /usr/src/nuxt-app/.output /usr/src/nuxt-app
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

EXPOSE 3000

ENTRYPOINT ["node", "server/index.mjs"]
