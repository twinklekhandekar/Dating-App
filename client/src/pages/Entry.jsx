import { useNavigate } from "react-router-dom";

const Entry = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">
      <div className="text-center p-8 bg-white/80 backdrop-blur-md rounded-3xl shadow-xl max-w-sm w-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome</h1>
        <p className="text-gray-600 mb-8">Discover people. Connect instantly.</p>
        <button
          onClick={() => navigate("/login")}
          className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Entry;
