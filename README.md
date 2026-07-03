# Interview Questions

## URL Shortener API Service

Build a URL shortener service that allows users to shorten long URLs and redirect to the original URL when the shortened URL is accessed.

The service should have the following features:

1. Shorten a long URL and return a unique shortened URL.
2. Redirect to the original URL when the shortened URL is accessed.

### Requirements

- The service should provide a RESTful API for creating and resolving shortened URLs.
- Refer to the provided [OpenAPI specification](openapi.yml) (https://go.gov.sg/swe-ar-interview-question) for the API endpoints and request/response formats.
- Data persistence can be in-memory for simplicity, but you may choose to use a database if you prefer.
- Use any programming language and framework of your choice.
- Automated tests are encouraged but not required.

### Out of Scope

- User authentication and authorization.
- Analytics and tracking of shortened URLs.
- Rate limiting or abuse prevention.

### Cans & Cannots

- You **can** use any libraries or packages that you find helpful.
- You **can** search online documentation to help with syntax only.
- You **can** use AI tools to assist you in the development process.
- You **cannot** refer to online examples / tutorials, or use pre-built URL shortening services / libraries that handle the core functionality for you.

### Time Limit

- You have 1 hour to complete the task.