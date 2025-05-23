import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import { FaThumbsUp, FaLeaf, FaTag, FaUser, FaLock, FaSeedling } from "react-icons/fa";

const TipDetails = () => {
  const { id } = useParams();
  const [tip, setTip] = useState(null);
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/gardentips/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTip(data);
        setLoading(false);
      });
  }, [id]);

  const handleLike = () => {
    if (liked) return toast.warn("You already liked this tip!");

    fetch(`http://localhost:5000/gardentips/like/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then(() => {
        setTip((prev) => ({
          ...prev,
          totalLiked: (prev.totalLiked || 0) + 1,
        }));
        setLiked(true);
        toast.success("Thanks for liking this tip! 🌿");
      })
      .catch(() => {
        toast.error("Something went wrong. Please try again.");
      });
  };

  if (loading)
    return (
      <p className="text-center mt-10 text-xl font-medium font-sans text-base-content">
        Loading...
      </p>
    );

  return (
    <div className="p-4 max-w-7xl mx-auto mt-10 mb-20 font-sans text-base-content">
      <div className="bg-white/70 backdrop-blur-sm shadow-lg rounded-2xl overflow-hidden animate-fadeIn border border-border">
        <img
          src={tip.image}
          alt={tip.title}
          className="w-full h-[320px] object-cover"
        />

        <div className="p-6 md:p-10 space-y-6">
          <h2 className="text-4xl md:text-5xl font-heading text-center text-primary">
            {tip.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-neutral">
            <InfoItem icon={<FaLeaf />} label="Plant Type" value={tip.topic} />
            <InfoItem icon={<FaSeedling />} label="Difficulty" value={tip.difficulty} />
            <InfoItem icon={<FaTag />} label="Category" value={tip.category} />
            <InfoItem icon={<FaLock />} label="Availability" value={tip.availability} />
            <InfoItem icon={<FaUser />} label="Author" value={`${tip.userName} (${tip.userEmail})`} />
          </div>

          <h3 className="text-2xl font-heading text-secondary">Description</h3>
          <div className="bg-base-200 p-5 rounded-xl shadow-inner border border-border">
            <p className="text-justify leading-relaxed text-muted">
              {tip.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-6">
            <button
              onClick={handleLike}
              disabled={liked}
              className={`btn ${liked ? "btn-disabled" : "bg-primary hover:bg-accent"} text-white text-base px-6 gap-2`}
            >
              <FaThumbsUp />
              {liked ? "Liked" : "Like this tip"}
            </button>

            <p className="text-lg font-semibold text-secondary font-sans">
              Total Likes: {tip.totalLiked || 0}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable info block
const InfoItem = ({ icon, label, value }) => (
  <p className="flex items-start gap-2">
    <span className="text-primary text-xl">{icon}</span>
    <span>
      <span className="font-semibold">{label}:</span> {value}
    </span>
  </p>
);

export default TipDetails;
