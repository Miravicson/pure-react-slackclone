FROM node:10 
WORKDIR /app
COPY package.json yarn.lock ./
COPY public/ public/
COPY src/ src/
RUN yarn --pure-lockfile

COPY README.md ./

CMD yarn build && yarn start
