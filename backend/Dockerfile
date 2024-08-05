FROM node:18

WORKDIR /usr/src/app

COPY package.json ./
RUN npm cache clean --force
RUN npm install

COPY . .

# Verifique se os arquivos são copiados corretamente
RUN ls -la /usr/src/app/config

RUN apt-get update && apt-get install -y netcat-openbsd postgresql-client

COPY wait-for-db.sh /usr/src/app/wait-for-db.sh
RUN chmod +x /usr/src/app/wait-for-db.sh

EXPOSE 3001

ENTRYPOINT ["/usr/src/app/wait-for-db.sh"]
CMD ["node", "src/app.js"]
