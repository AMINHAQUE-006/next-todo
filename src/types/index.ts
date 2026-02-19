// src/types/index.ts
// Centralize shared TypeScript types here.
// Importing from one place means updating one place when types change.

// Common API response wrapper
export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

// Paginated list response
export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  perPage: number;
  totalPages: number;
}

// Common form field state
export interface FormField<T = string> {
  value: T;
  error: string;
  touched: boolean;
}

// Navigation item type
export interface NavItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
  children?: NavItem[];
}

// Generic ID type (useful for API calls)
export type ID = string | number;
