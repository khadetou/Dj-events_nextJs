import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { API_URL } from "@/config/index";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  //Register user
  const register = async (user) => {
    console.log(user);
  };

  //Log In user
  const login = async ({ email: indentifier, password }) => {
    console.log({ indentifier, password });
  };

  //Log out user
  const logout = async () => {
    console.log("log out");
  };

  //Check if user is logged in
  const checkUserLoggedIn = async (user) => {
    console.log("Check");
  };

  return (
    <AuthContext.Provider value={{ user, error, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
