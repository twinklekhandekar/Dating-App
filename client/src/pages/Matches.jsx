import { useEffect, useState } from "react";
import api from "../api/axios";

const Matches = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    api.get("/match")
      .then(res => setMatches(res.data))
      .catch(err => console.error(err));
  }, []);

  if (matches.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        No matches yet 💔
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-yellow-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Your Matches</h1>

      <div className="grid grid-cols-1 gap-4 max-w-md mx-auto">
        {matches.map((match, i) => (
          <div
            key={i}
            className="bg-white/90 backdrop-blur-md rounded-2xl shadow-md p-4 flex items-center gap-4"
          >
            {match.users.map((u, idx) => (
              <img
                key={idx}
                src={u.avatar || "https://i.pravatar.cc/150?img=47"}
                alt={u.name}
                className="w-12 h-12 rounded-full object-cover"
              />
            ))}

            <div className="flex-1">
              <p className="font-semibold text-gray-800">
                {match.users.map(u => u.name).join(" ❤️ ")}
              </p>
              {match.lastMessage && (
                <p className="text-gray-600 text-sm truncate">{match.lastMessage}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Matches;
