FROM node:10-alpine
ARG ALGOLIA_INDEX_KEY
ARG ALGOLIA_APP_KEY
ARG ALGOLIA_SEARCH_KEY
RUN npm install -g http-server --unsafe-perm
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 8080
CMD [ "http-server", "dist" ]
