FROM node
WORKDIR /app
COPY package.json package.json
RUN npm install 
COPY . . 
EXPOSE 9981
CMD ["node","app.js"]