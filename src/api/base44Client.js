import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client with authentication required
export const base44 = createClient({
  appId: "694c5e62039007bf5418deaf", 
  requiresAuth: true // Ensure authentication is required for all operations
});
