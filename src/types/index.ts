
export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  perPage: number;
  totalPages: number;
}

export interface FormField<T = string> {
  value: T;
  error: string;
  touched: boolean;
}

export interface NavItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
  children?: NavItem[];
}

export type ID = string | number;
