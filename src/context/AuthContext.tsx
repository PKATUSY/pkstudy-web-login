
import React, { createContext, useState, useContext, useEffect } from 'react';

type User = {
  id: string;
  name: string;
  mobile: string;
  email: string | null;
  profile_pic: string | null;
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  login: (mobile: string, password: string) => Promise<boolean>;
  signup: (name: string, mobile: string, email: string | null, password: string) => Promise<boolean>;
  logout: () => void;
  resetPassword: (mobile: string, dob: string, email: string, newPassword: string) => Promise<boolean>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is logged in from local storage
    const storedUser = localStorage.getItem('pkstudyUser');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Failed to parse stored user data:', error);
        localStorage.removeItem('pkstudyUser');
      }
    }
  }, []);

  const login = async (mobile: string, password: string): Promise<boolean> => {
    // Simulate API call to PHP backend
    try {
      // In a real app, this would be an actual fetch to your PHP backend
      // For demo purposes, we'll simulate a successful login with hardcoded data
      
      // Validation - simple mobile number check (10 digits)
      if (!/^\d{10}$/.test(mobile)) {
        throw new Error('Invalid mobile number format');
      }
      
      // Simulate backend check (would be a PHP endpoint in real app)
      if (mobile === "1234567890" && password === "password") {
        const userData: User = {
          id: "user_123",
          name: "Test User",
          mobile: mobile,
          email: "test@example.com",
          profile_pic: null
        };
        
        setUser(userData);
        setIsAuthenticated(true);
        localStorage.setItem('pkstudyUser', JSON.stringify(userData));
        return true;
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const signup = async (name: string, mobile: string, email: string | null, password: string): Promise<boolean> => {
    // Simulate API call to PHP backend
    try {
      // Validation
      if (!name || name.length < 2) {
        throw new Error('Name is required (minimum 2 characters)');
      }
      
      if (!/^\d{10}$/.test(mobile)) {
        throw new Error('Invalid mobile number format');
      }
      
      if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        throw new Error('Invalid email format');
      }
      
      if (!password || password.length < 6) {
        throw new Error('Password must be at least 6 characters');
      }
      
      // In a real app, this would be an actual fetch to your PHP backend
      const userData: User = {
        id: "user_" + Date.now(),
        name: name,
        mobile: mobile,
        email: email,
        profile_pic: null
      };
      
      setUser(userData);
      setIsAuthenticated(true);
      localStorage.setItem('pkstudyUser', JSON.stringify(userData));
      return true;
    } catch (error) {
      console.error('Signup error:', error);
      return false;
    }
  };

  const resetPassword = async (mobile: string, dob: string, email: string, newPassword: string): Promise<boolean> => {
    // Simulate API call to PHP backend
    try {
      // Validation
      if (!/^\d{10}$/.test(mobile)) {
        throw new Error('Invalid mobile number format');
      }
      
      if (!dob) {
        throw new Error('Date of birth is required');
      }
      
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        throw new Error('Invalid email format');
      }
      
      if (!newPassword || newPassword.length < 6) {
        throw new Error('New password must be at least 6 characters');
      }
      
      // In a real app, this would be an actual fetch to your PHP backend
      // Simulating successful password reset
      return true;
    } catch (error) {
      console.error('Password reset error:', error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('pkstudyUser');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        signup,
        logout,
        resetPassword
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
