FROM node:10 AS ui-build

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install

COPY . ./

RUN yarn build:prod

FROM nginx
COPY ./nginx-conf/default.conf /etc/nginx/conf.d/default.conf
COPY --from=ui-build /app/dist/task /usr/share/nginx/html
