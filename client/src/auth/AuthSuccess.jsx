import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import { AuthProvider } from "./AuthContext";

const AuthSuccess = () => {
  const navigate = useNavigate();
  const { setUser } = AuthProvider();

  useEffect(() => {
    api
      .get("/auth/me")
      .then((res) => {
        setUser(res.data);
        window.location.href = "/discover";
      })
      .catch(() => (window.location.href = "/login"));
  }, []);

  return null; 
};

export default AuthSuccess;
