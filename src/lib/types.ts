// src/lib/types.ts
export interface User {
    name: {
      title?: string; // Optional to accommodate "title"
      first: string;
      last: string;
    };
    email: string;
    [key: string]: any; // Allow extra fields like "gender", "location", etc.
  }