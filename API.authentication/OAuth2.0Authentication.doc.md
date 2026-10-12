# OAuth 2.0 Authentication

## What is OAuth 2.0?
**OAuth 2.0** is the industry-standard protocol used for **authorization**. It allows applications to securely access a user's account on another service (like Google, GitHub, or Facebook) without ever seeing or storing the user's actual password.

Instead of handling passwords directly, OAuth 2.0 delegates user authentication to the service that already hosts the user's account.

---

## OAuth 2.0 Flow Overview
Think of this process like checking into a secure building using a temporary visitor pass:

1. **User clicks "Login with [Provider]"** in your app (e.g., "Sign in with Google").
2. **User is redirected** to the provider's official login page.
3. **User authenticates and authorizes** your app by logging in and approving permissions.
4. **Provider redirects back** to your app, attaching a temporary **authorization code** in the URL.
5. **Your app exchanges the code** for an **access token** by making a secure background request to the provider.
6. **Your app accesses data** using that token (strictly within the authorized scope, such as reading the user's email and name).

---

## Implementing with Passport.js (Node.js)

**Passport.js** is a popular authentication middleware for Node.js that simplifies adding authentication strategies (like Google OAuth) to your Express application.

### Step 1: Install Required Packages
Open your terminal in your project directory and run the following command to install Passport, the Google OAuth 2.0 strategy, and session support:

```bash
npm install passport passport-google-oauth20 express-session