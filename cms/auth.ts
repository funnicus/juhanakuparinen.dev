/*
Welcome to the auth file! Here we have put a config to do basic auth in Keystone.

`createAuth` is an implementation for an email-password login out of the box.
`statelessSessions` is a base implementation of session logic.

For more on auth, check out: https://keystonejs.com/docs/apis/auth#authentication-api
*/

import { createAuth } from "@keystone-6/auth";

// See https://keystonejs.com/docs/apis/session#session-api for the session docs
import { statelessSessions } from "@keystone-6/core/session";

import { SESSION_MAX_AGE, SESSION_SECRET } from "./config";

let sessionSecret = SESSION_SECRET;

// Here is a best practice! It's fine to not have provided a session secret in dev,
// however it should always be there in production.
if (!sessionSecret) {
  if (process.env.NODE_ENV === "production") {
    throw new Error(
      "The SESSION_SECRET environment variable must be set in production"
    );
  } else {
    sessionSecret = "-- DEV COOKIE SECRET; CHANGE ME --";
  }
}

// Here we define how auth relates to our schemas.
// What we are saying here is that we want to use the list `User`, and to log in
// we will need their email and password.
const { withAuth } = createAuth({
  listKey: "User",
  identityField: "email",
  sessionData: "name",
  secretField: "password",
  initFirstItem: {
    // If there are no items in the database, keystone will ask you to create
    // a new user, filling in these fields.
    fields: ["name", "email", "password"],
  },
});

// This defines how sessions should work. For more details, check out: https://keystonejs.com/docs/apis/session#session-api
const session = statelessSessions({
  maxAge: SESSION_MAX_AGE,
  secret: sessionSecret!,
});

export { withAuth, session };
