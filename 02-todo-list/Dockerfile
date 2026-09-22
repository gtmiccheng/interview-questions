FROM node:20.20-slim

RUN mkdir -p /app/frontend && \
        mkdir -p /app/backend

WORKDIR /app

COPY ./todo-frontend/package*.* /app/frontend/
RUN cd /app/frontend/ && npm install --legacy-peer-deps 
COPY ./todo-frontend /app/frontend

COPY ./todo-backend/todo-app-js/package*.* /app/backend/
RUN cd /app/backend/ && npm install
COPY ./todo-backend/todo-app-js/ /app/backend

RUN npm install -g concurrently

EXPOSE 5173
EXPOSE 3000

ENTRYPOINT concurrently -n "FRONTEND,BACKEND" -c "cyan,green" "cd /app/frontend && npm run dev" "cd /app/backend && npm run dev"
