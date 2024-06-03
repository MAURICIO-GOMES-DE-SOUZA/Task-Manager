import { useContext } from "react";
import { AuthContext } from "../contexts/authContex";

export function useAuth() {
  return useContext(AuthContext);
}
