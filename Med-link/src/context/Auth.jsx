import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Restore user on refresh
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (email, password) => {
    if (!email || !password) {
      return { success: false, error: "All fields required" };
    }

    const mockUser = { email, name: "Demo User" };
    setUser(mockUser);
    localStorage.setItem("user", JSON.stringify(mockUser));
    return { success: true };
  };

  const signup = (email, password, fullName) => {
    if (!email || !password || !fullName) {
      return { success: false, error: "All fields required" };
    }

    const mockUser = { email, name: fullName };
    setUser(mockUser);
    localStorage.setItem("user", JSON.stringify(mockUser));
    return { success: true };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
