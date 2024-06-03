import { useContext } from "react";
import { AuthContext } from "../authContex";

export function useAuth() {
    return useContext(AuthContext)
}