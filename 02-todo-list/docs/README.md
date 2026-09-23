# Assignment

Your team is working on a To Do List application.

Users can:

- Create new To Do List items.
- Mark To Do List items as completed.
- Update the To Do List item description.
- Delete To Do List items.

The developers just finished coding a new feature below. Help prepare the E2E Playwright tests that verifies this.

## User Story

```Gherkin
As a User,
When I have added multiple Tasks to the To Do List,
And I have marked some Task as "Done",
Then the "Clear Completed" button should be enabled.

When I click on "Clear Completed",
Then I should only see "Undone" Tasks on the To Do list.
```

## Acceptance Criteria

- [ ] `AC-1`: Show the **"Clear Completed" button** in the **front-end** when there are some Tasks that are marked a "Done".
- [ ] `AC-2`: When we click on the **"Clear Completed" button**, the "Done" items should be cleared from the list. Status should be persisted to the server.

> **Note:** `AC` stands for "Acceptance Criteria".

---

## The Code

Do the assignment in one of the following folders:

- [JavaScript Project](./javascript.md)
