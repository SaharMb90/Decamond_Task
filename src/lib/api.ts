// src/lib/api.ts
import { User } from './types';
import randomUserData from '@/data/api.json';

export const fetchRandomUser = async () => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 100)); // Optional mock delay
    if (!randomUserData.results || !Array.isArray(randomUserData.results)) {
      throw new Error('Invalid JSON format: missing or invalid results array');
    }
    return randomUserData;
  } catch (err) {
    console.error(err);
    throw new Error('Failed to fetch user data');
  }
};