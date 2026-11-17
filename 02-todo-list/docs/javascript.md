# JavaScript Project

## Setup

### Running the To Do List app

The To Do List app can be found here: <https://todolist-demo.app.tc1.airbase.sg/>

<details>
<summary>Alternative way of running the To Do List app</summary>

### Docker Run

Use Docker to run the To Do List app.

```bash
docker run -p 3000:3000 -p 5173:5173 ghcr.io/gtmiccheng/todolist-app
```

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

### Application URLs

- Frontend Application: <http://localhost:5173>
- Backend API: <http://localhost:3000>

</details>

### To run the Playwright End-to-End Test

In a separate Terminal window, in the `./e2e/js` folder.

```bash
npm run e2e
```
