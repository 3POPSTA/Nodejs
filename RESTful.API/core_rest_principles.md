# Core REST Principles

Understanding these principles is crucial for designing effective RESTful APIs. They ensure your API is scalable, maintainable, and easy to use.

## Key Principles in Practice

- **Resource-Based:** Focus on resources rather than actions.
- **Stateless:** Each request is independent and self-contained.
- **Cacheable:** Responses define their cacheability.
- **Uniform Interface:** Consistent resource identification and manipulation.
- **Layered System:** Client doesn't need to know about the underlying architecture.

## The Core Principles of REST Architecture

1. **Client-Server Architecture:** Separation of concerns between the client and the server.
2. **Statelessness:** No client context is stored on the server between requests.
3. **Cacheability:** Responses must define themselves as cacheable or non-cacheable.
4. **Layered System:** A client cannot tell whether it is connected directly to the end server.
5. **Uniform Interface:** Resources are identified in requests, resources are manipulated through representations, self-descriptive messages, and HATEOAS (Hypertext As The Engine Of Application State).

---

## HTTP Methods and Their Usage

RESTful APIs use standard HTTP methods to perform operations on resources. Each method has specific semantics and should be used appropriately.

### Idempotency and Safety

- **Safe Methods:** `GET`, `HEAD`, `OPTIONS` (should not modify resources).
- **Idempotent Methods:** `GET`, `PUT`, `DELETE` (multiple identical requests have the exact same effect as a single request).
- **Non-Idempotent Methods:** `POST`, `PATCH` (may have different effects or return different states with multiple calls).

> **Tip:** Always use the most specific method that matches your operation's intent.

### HTTP Method Reference Table

| Method | Action | Example |
| :--- | :--- | :--- |
| **GET** | Retrieve resource(s) | `GET /api/users` |
| **POST** | Create a new resource | `POST /api/users/123` |
| **PUT** | Update a resource completely | `PUT /api/users/123` |
| **PATCH** | Update a resource partially | `PATCH /api/users/123` |
| **DELETE** | Delete a resource | `DELETE /api/users/123` |