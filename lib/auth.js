// lib/auth.js
export const getAuthHeaders = () => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      
      if (token) {
        return {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        };
      }
    }
    
    return {
      'Content-Type': 'application/json',
    };
  };
  
  export const isAuthenticated = () => {
    if (typeof window !== 'undefined') {
      return !!localStorage.getItem('token');
    }
    return false;
  };

  