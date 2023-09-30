import { useContext } from "react";
import { AuthContext } from "./AuthProvider/AuthContext";

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
