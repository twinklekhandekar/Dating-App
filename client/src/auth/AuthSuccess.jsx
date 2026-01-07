import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import { AuthProvider } from "./AuthContext";

const AuthSuccess = () => {
  const navigate = useNavigate();
  const { setUser } = AuthProvider();

useEffect(() => {
  const finalizeLogin = async () => {
    try {
      const res = await api.get("/auth/me");
      setUser(res.data);
      navigate("/discover", { replace: true });
    } catch {
      navigate("/login", { replace: true });
    }
  };

  finalizeLogin();
}, []);

  return <p className="text-center mt-20">Signing you in...</p>;
};

export default AuthSuccess;
