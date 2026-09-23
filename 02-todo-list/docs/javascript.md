# JavaScript Project

## Setup

### Running the To Do List app

Use Docker to run the To Do List app.

```bash
docker run -p 3000:3000 -p 5173:5173 ghcr.io/gtmiccheng/todolist-app
```

<details>
<summary>Alternative way of running the To Do List app</summary>

#### Build and run the To Do List app locally

```bash
cd todo-frontend
npm install --legacy-peer-deps
cd ../todo-backend/todo-app-js
npm install
cd ../../e2e/js
npm install
npm run dev
```
</details>

### Application URLs

- Frontend Application: <http://localhost:5173>
- Backend API: <http://localhost:3000>

### To run the Playwright End-to-End Test

In a separate Terminal window, in the `./e2e/js` folder.

```bash
npm run e2e
```
