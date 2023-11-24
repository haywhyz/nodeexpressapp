# # Stage 1: Build and Test
# FROM node:14 AS build-stage
# WORKDIR /app
# COPY package*.json .
# RUN npm install express
# COPY . .

# COPY test.js .
# # This stage runs unit testing as demonstrated during the last class
# RUN npm install mocha chai --save-dev
# CMD ["npx", "mocha", "test.js"]

# # Stage 2: Build Release
# FROM node:14-alpine AS build-release-stage
# WORKDIR /app

# COPY --from=build-stage /app/package.json .
# COPY --from=build-stage /app/app.js .
# COPY --from=build-stage /app/node_modules ./node_modules
# EXPOSE 7000
# CMD ["node", "app.js"]


FROM node:14 AS build-stage

WORKDIR /app

COPY package*.json .

RUN npm install express

COPY . .

FROM node:14-alpine AS build-release-stage

WORKDIR /app

COPY --from=build-stage /app .

EXPOSE 7000

CMD ["node", "app.js"]