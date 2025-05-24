import { useEffect, useState } from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

const TopTrendingTips = () => {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    fetch(
      "https://garden-hub-server-three.vercel.app/gardentips?availability=public"
    )
      .then((res) => res.json())
      .then((data) => {
        const sorted = data
          .sort((a, b) => (b.totalLiked || 0) - (a.totalLiked || 0)) // sort by likes
          .slice(0, 6); // take top 6
        setTips(sorted);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="max-w-7xl mx-auto my-20 px-4">
      <h2 className="text-4xl font-heading text-center mb-12">
        🔥 Top Trending Tips
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tips.map((tip) => (
          <Fade key={tip._id} triggerOnce>
            <div className="bg-white border border-gray-200 shadow-lg rounded-2xl p-5 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-2xl font-bold mb-2 text-green-700">
                  {tip.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-4">
                  {tip.description}
                </p>
                <p className="text-sm text-gray-500 italic">
                  Shared by: {tip.userName || "Unknown"}
                </p>
              </div>
              <div className="flex items-center justify-between mt-4 pt-4 border-t">
                <div className="flex items-center gap-1 text-green-600">
                  <FaRegThumbsUp className="text-lg" />
                  <span>{tip.totalLiked || 0}</span>
                </div>
                <span className="text-sm text-gray-400">
                  Status: {tip.availability || "N/A"}
                </span>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default TopTrendingTips;
