# JavaScript Assignment

## Pre-Requiistes

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

## Assignment

The developers just finished coding this user story. Prepare the E2E Playwright tests that verifies this.

### User Story

```Gherkin
As a User,
When I have added multiple Tasks to the To Do List,
And I have marked some Task as "Done",
Then the "Clear Completed" button should be enabled.

When I click on "Clear Completed",
Then I should only see "Undone" Tasks on the To Do list.
```

### Acceptance Criteria

- [ ] `AC-1`: Show the **"Clear Completed" button** in the **front-end** when there are some Tasks that are marked a "Done".
- [ ] `AC-2`: When we click on the **"Clear Completed" button**, the "Done" items should be cleared from the list. Status should be persisted to the server.

> **Note:** `AC` stands for "Acceptance Criteria".