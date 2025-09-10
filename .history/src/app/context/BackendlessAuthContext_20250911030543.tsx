"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { BackendlessAuth } from "@/lib/backendless";

interface User {
  id: string;
  email: string;
  name: string;
  role: "admin" | "user";
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function BackendlessAuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in with Backendless
    const checkAuthStatus = async () => {
      try {
        const result = await BackendlessAuth.getCurrentUser();
        if (result.success && result.user) {
          const userData: User = {
            ...result.user,
            role: (result.user.role === "admin" ? "admin" : "user") as "admin" | "user"
          };
          setUser(userData);
        }
      } catch (error) {
        console.error("Error checking auth status:", error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      setIsLoading(true);
      
      const result = await BackendlessAuth.login(email, password);
      if (result.success && result.user) {
        const userData: User = {
          ...result.user,
          role: (result.user.role === "admin" ? "admin" : "user") as "admin" | "user"
        };
        setUser(userData);
        return true;
      }

      return false;
    } catch (error) {
      console.error("Login error:", error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      await BackendlessAuth.logout();
      setUser(null);
    } catch (error) {
      console.error("Logout error:", error);
      setUser(null); // Clear user anyway
    }
  };

  const value: AuthContextType = {
    user,
    isLoading,
    login,
    logout,
    isAuthenticated: !!user,
    isAdmin: user?.role === "admin"
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
