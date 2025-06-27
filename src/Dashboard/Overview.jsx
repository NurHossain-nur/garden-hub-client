import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../provider/AuthProvider";
import { FaLeaf, FaHeart, FaRegUserCircle } from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";

const Overview = () => {
  const { user } = useContext(AuthContext);
  const [tips, setTips] = useState([]);
  const [totalLikes, setTotalLikes] = useState(0);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/gardentips?userEmail=${user.email}`)
        .then(res => res.json())
        .then(data => {
          setTips(data);
          const likes = data.reduce((sum, tip) => sum + (tip.totalLiked || 0), 0);
          setTotalLikes(likes);
        })
        .catch(err => console.error("Failed to fetch user tips", err));
    }
  }, [user]);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-heading text-primary mb-8 text-center">
        🌿 Welcome back, {user?.displayName?.split(" ")[0]}!
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="bg-white/80 backdrop-blur-lg border border-border rounded-xl p-6 shadow hover:shadow-lg transition-all">
          <div className="flex flex-col items-center text-center text-primary">
            <FaRegUserCircle className="text-5xl text-primary mb-3" />
            <h3 className="text-xl text-primary font-semibold">{user?.displayName}</h3>
            <p className="text-sm text-muted">{user?.email}</p>
          </div>
        </div>

        {/* Tips Card */}
        <div className="bg-white/80 backdrop-blur-lg border border-border rounded-xl p-6 shadow hover:shadow-lg transition-all text-center text-primary">
          <FaLeaf className="text-4xl text-secondary mx-auto mb-2" />
          <h4 className="text-xl font-semibold">{tips.length}</h4>
          <p className="text-sm text-muted">Tips Shared</p>
        </div>

        {/* Likes Card */}
        <div className="bg-white/80 backdrop-blur-lg border border-border rounded-xl p-6 shadow hover:shadow-lg transition-all text-center text-primary">
          <FaHeart className="text-4xl text-red-500 mx-auto mb-2" />
          <h4 className="text-xl font-semibold">{totalLikes}</h4>
          <p className="text-sm text-muted">Total Likes</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
