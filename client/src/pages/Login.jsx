import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const loginWithGoogle = () => {
    window.location.href = `${import.meta.env.VITE_API_URL}/auth/google`;
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100">
      <div className="bg-white/90 backdrop-blur-md p-10 rounded-3xl shadow-2xl text-center max-w-sm w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome</h1>
        <p className="text-gray-600 mb-8">Sign in to continue connecting.</p>

        <button
          onClick={loginWithGoogle}
          className="flex items-center justify-center gap-3 w-full px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-full shadow-lg transition-all duration-300"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
