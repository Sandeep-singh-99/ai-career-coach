FROM node:22.17.0 AS builder

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install

# Copy app files and env
COPY . .
# COPY .env .env

RUN npx prisma generate
RUN npm run build

FROM node:22.17.0 AS runner

WORKDIR /app

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/.env ./.env

EXPOSE 3000

CMD ["npm", "start"]
