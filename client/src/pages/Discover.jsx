import { useEffect, useState } from "react";
import api from "../api/axios";

const Discover = () => {
  const [users, setUsers] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    api.get("/user/discover")
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  }, []);

  const likeUser = async () => {
  if (!users[index]) return;
  nextUser();

  try {
    const res = await api.post("/match/like", {
      toUser: users[index]._id,
    });

    if (res.data.match) alert("It's a match! 💖");
  } catch (err) {
    console.error(err);
  }
};

  const skipUser = () => nextUser();

  const nextUser = () => {
    if (index + 1 < users.length) {
      setIndex(index + 1);
    } else {
      setIndex(0); 
    }
  };

  if (!users[index]) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        No more users to discover 😢
      </div>
    );
  }

  const user = users[index];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100 flex items-center justify-center p-4">
      <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl max-w-sm w-full p-6 text-center">

        <img
          src={user.photo || "https://i.pravatar.cc/150?img=50"}
          alt={user.name}
          className="w-48 h-48 mx-auto rounded-full shadow-md mb-4 object-cover"
        />

        <h2 className="text-2xl font-bold text-gray-800 mb-1">{user.name}</h2>
        <p className="text-gray-600 mb-2">{user.location || "Unknown"}</p>
        <p className="text-gray-700 mb-6">{user.bio || "No bio available"}</p>

        <div className="flex justify-between gap-4">
          <button
            onClick={skipUser}
            className="flex-1 py-2 bg-gray-300 text-gray-800 font-semibold rounded-full hover:bg-gray-400 transition"
          >
            Skip
          </button>
          <button
            onClick={likeUser}
            className="flex-1 py-2 bg-pink-500 text-white font-semibold rounded-full hover:bg-pink-600 transition"
          >
            Like ❤️
          </button>
        </div>
      </div>
    </div>
  );
};

export default Discover;
