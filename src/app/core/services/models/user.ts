export interface User {
  email: string;
  password: string;
}
export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user'|'support';
  createdAt: Date;
  updatedAt: Date;
}