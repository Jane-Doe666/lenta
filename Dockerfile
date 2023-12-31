FROM --platform=linux/amd64 node 

WORKDIR /app
COPY package.json /app
RUN npm install
COPY . .

EXPOSE 8080
CMD ["npm","run", "build"]