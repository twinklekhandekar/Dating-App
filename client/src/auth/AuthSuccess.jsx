import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import { AuthProvider } from "./AuthContext";

const AuthSuccess = () => {
  const navigate = useNavigate();
  const { setUser } = AuthProvider();

  useEffect(() => {
    api.get("/auth/me")
      .then(res => {
        setUser(res.data);
        navigate("/discover");
      })
      .catch(() => navigate("/login"));
  }, []);

  return <p className="text-center mt-20">Signing you in...</p>;
};

export default AuthSuccess;
