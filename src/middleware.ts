import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Routes that require the user to be signed in
const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/settings(.*)",
  "/api/protected(.*)",
  "/admin(.*)", // admin is protected and will get an extra RBAC check
]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) {
    auth.protect(); // redirects to sign-in if not authenticated
  }
  // RBAC checks are done in the route handlers/pages themselves
});

export const config = {
  matcher: [
    // Run on all routes except static assets/next internals
    "/((?!.+\\.[\\w]+$|_next).*)",
    "/",
    "/(api)(.*)",
  ],
};
