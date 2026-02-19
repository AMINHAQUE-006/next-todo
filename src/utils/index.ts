// src/utils/index.ts
// Utility/helper functions used across the app.
// Keeping them here avoids duplication and keeps components clean.

/**
 * Format a Date object or ISO string into a readable format
 * Example: formatDate("2024-01-15") → "January 15, 2024"
 */
export function formatDate(date: string | Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date));
}

/**
 * Get user's initials for avatars
 * Example: getInitials("John Doe") → "JD"
 */
export function getInitials(name: string): string {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

/**
 * Truncate long strings
 * Example: truncate("Hello World", 8) → "Hello..."
 */
export function truncate(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str;
  return `${str.slice(0, maxLength - 3)}...`;
}

/**
 * Delay execution (useful for testing loading states)
 * Usage: await delay(1000) // waits 1 second
 */
export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Check if we're running in the browser (not server-side)
 * Useful to avoid localStorage errors during SSR
 */
export const isBrowser = typeof window !== 'undefined';
