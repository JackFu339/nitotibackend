FROM mhart/alpine-node:11 AS builder
WORKDIR /app

COPY package.json /app
COPY lerna.json /app
COPY babel.config.js /app

COPY packages/bankpro /app/packages/bankpro
COPY shared/package.json /app/shared/package.json
COPY shared/bankpro /app/shared/bankpro
COPY shared/Library /app/shared/Library

RUN yarn && cd packages/bankpro && yarn build

FROM mhart/alpine-node
RUN yarn global add serve
WORKDIR /app
COPY --from=builder /app/packages/bankpro/build .
CMD ["serve", "-p", "80", "-s", "."]