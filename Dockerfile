FROM node:20 as builder
WORKDIR /usr/src/app
COPY . .
RUN npm ci
ENTRYPOINT ["tail", "-f", "/dev/null"]