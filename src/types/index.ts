export interface TestimonialType {
  content: string;
  name: string;
}

export interface ServiceType {
  title: string;
  description: string;
  icon: 'dumbbell' | 'video' | 'users' | 'heart' | 'apple' | 'running';
}

export interface StatType {
  count: number;
  label: string;
}

export interface ClassType {
  title: string;
  time: string;
  instructor: string;
  image: string;
}

export type Role = 'admin' | 'user' | 'trainer';
export type Theme = 'light' | 'dark';
export type Layout = 'default' | 'compact';
export type FontSize = 12 | 14 | 16 | 18 | 20;

export interface User {
  id: string;
  email: string;
  name: string;
  role: Role;
  permissions?: string[];
  createdAt: string;
  updatedAt: string;
}

export interface ApiError {
  message: string;
  code: string;
  status: number;
} 