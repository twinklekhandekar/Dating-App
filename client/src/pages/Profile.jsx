import { useEffect, useState } from "react";
import api from "../api/axios";

const Profile = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    api.get("/user/me").then(res => setUser(res.data));
  }, []);

  const saveProfile = async () => {
    await api.put("/user/profile", user);
    alert("Profile updated");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100 flex items-center justify-center p-4">
      <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl max-w-md w-full p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Your Profile</h1>

        {/* Avatar Placeholder */}
        <div className="flex justify-center mb-6">
          <img
            src={user.avatar || "https://i.pravatar.cc/150?img=47"}
            alt="Avatar"
            className="w-28 h-28 rounded-full shadow-md"
          />
        </div>

        {/* Name Input */}
        <input
          className="border border-gray-300 rounded-lg p-3 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
          placeholder="Name"
          value={user.name || ""}
          onChange={e => setUser({ ...user, name: e.target.value })}
        />

        {/* Bio Input */}
        <textarea
          className="border border-gray-300 rounded-lg p-3 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
          placeholder="Bio"
          value={user.bio || ""}
          onChange={e => setUser({ ...user, bio: e.target.value })}
        />

        {/* Location Input */}
        <input
          className="border border-gray-300 rounded-lg p-3 w-full mb-6 focus:outline-none focus:ring-2 focus:ring-purple-400"
          placeholder="Location"
          value={user.location || ""}
          onChange={e => setUser({ ...user, location: e.target.value })}
        />

        <button
          onClick={saveProfile}
          className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Save Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
