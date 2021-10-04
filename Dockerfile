FROM node:14-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/server
COPY ["package.json", "yarn.lock*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 7000
CMD ["npm", "start"]
