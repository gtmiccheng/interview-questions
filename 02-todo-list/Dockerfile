FROM node:20.20-slim

RUN mkdir -p /app/frontend && \
        mkdir -p /app/backend

WORKDIR /app

COPY ./todo-frontend/package*.* /app/frontend/
RUN cd /app/frontend && npm install --legacy-peer-deps
COPY ./todo-frontend /app/frontend
RUN cd /app/frontend && npm run build

COPY ./todo-backend/todo-app-js/package*.* /app/backend/
RUN cd /app/backend && npm install
COPY ./todo-backend/todo-app-js/ /app/backend

EXPOSE 3000

ENV FRONTEND_DIST=/app/frontend/dist

ENTRYPOINT ["node", "/app/backend/index.js"]
