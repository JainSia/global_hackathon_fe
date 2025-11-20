// Generate UUID v4
export const generateUUID = (): string => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

// Store auth UUID in localStorage
export const setAuthUUID = (uuid: string): void => {
  localStorage.setItem('authUUID', uuid);
};

// Get auth UUID from localStorage
export const getAuthUUID = (): string | null => {
  return localStorage.getItem('authUUID');
};

// Check if user is authenticated
export const isAuthenticated = (): boolean => {
  return getAuthUUID() !== null;
};

// Clear authentication and all localStorage
export const clearAuth = (): void => {
  localStorage.clear();
};

