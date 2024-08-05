#!/bin/sh

# Espera pelo banco de dados estar disponível
until pg_isready -h db -p 5432 -U your_username; do
  echo "Waiting for db..."
  sleep 2
done

# Roda as migrações e inicia o servidor
npx sequelize-cli db:migrate
exec "$@"
