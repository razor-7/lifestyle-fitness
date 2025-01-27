import { User, Role } from '../types';
import { sessionManager } from './sessionManager';

export const authorization = {
  hasRole: (requiredRole: Role): boolean => {
    const user = sessionManager.getUser();
    return user ? user.role === requiredRole : false;
  },

  hasPermission: (permission: string): boolean => {
    const user = sessionManager.getUser();
    return Boolean(user?.permissions?.includes(permission));
  },

  canAccessRoute: (requiredRoles: Role[]): boolean => {
    const user = sessionManager.getUser();
    return user ? requiredRoles.includes(user.role) : false;
  }
}; 