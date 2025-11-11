# Stage 1: Build
FROM node:20-alpine AS base

WORKDIR /app

# Optimierung: Kopieren Sie *nur* die Abhängigkeitsdefinitionen
COPY package*.json ./

# Installieren Sie *nur* die Produktionsabhängigkeiten
RUN npm ci

# Kopieren Sie den restlichen Anwendungscode
COPY . .

EXPOSE 3000

CMD ["node", "app.js"]