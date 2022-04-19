FROM node:carbon AS build
WORKDIR /source
COPY ./package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx
COPY --from=build /source/dist /var/www/static
