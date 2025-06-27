import { useEffect, useState } from "react";
import { ImSpinner3 } from "react-icons/im";
import { Link } from "react-router"; // ✅ fixed import

const BrowseTips = () => {
  const [loading, setLoading] = useState(true);
  const [tips, setTips] = useState([]);
  const [filteredTips, setFilteredTips] = useState([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [viewType, setViewType] = useState(() => {
  return localStorage.getItem("tipViewType") || "table";
});

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/gardentips?availability=public")
      .then((res) => res.json())
      .then((data) => {
        setTips(data);
        setFilteredTips(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const handleFilterChange = (e) => {
    const level = e.target.value;
    setSelectedDifficulty(level);

    if (level === "all") {
      setFilteredTips(tips);
    } else {
      const filtered = tips.filter(
        (tip) => tip.difficulty?.toLowerCase() === level
      );
      setFilteredTips(filtered);
    }
  };

  const handleViewChange = (e) => {
  const selected = e.target.value;
  setViewType(selected);
  localStorage.setItem("tipViewType", selected);
};

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <ImSpinner3 className="text-5xl animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="max-w-7xl min-h-[550px] mx-auto px-4 py-20">
      <h2 className="text-3xl font-heading text-primary mb-6 text-center">
        🌿 Public Garden Tips
      </h2>

      {/* 🔎 Filter & View Switcher */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <select
          value={selectedDifficulty}
          onChange={handleFilterChange}
          className="select select-bordered w-full max-w-xs"
        >
          <option value="all">All Difficulties</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>

        <div className="flex items-center gap-4">
          <label className="label cursor-pointer">
            <span className="label-text mr-2">Table</span>
            <input
              type="radio"
              name="view"
              value="table"
              className="radio radio-sm checked:bg-primary"
              checked={viewType === "table"}
              onChange={handleViewChange}
            />
          </label>
          <label className="label cursor-pointer">
            <span className="label-text mr-2">Cards</span>
            <input
              type="radio"
              name="view"
              value="card"
              className="radio radio-sm checked:bg-primary"
              checked={viewType === "card"}
              onChange={handleViewChange}
            />
          </label>
        </div>
      </div>

      {/* ✅ Table View */}
      {viewType === "table" && (
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead className="bg-base-300 text-base-content">
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Category</th>
                <th>Difficulty</th>
                <th>Image</th>
                <th>See More</th>
              </tr>
            </thead>
            <tbody>
              {filteredTips.map((tip, index) => (
                <tr key={tip._id}>
                  <th>{index + 1}</th>
                  <td>{tip.title}</td>
                  <td>{tip.category}</td>
                  <td className="capitalize">{tip.difficulty}</td>
                  <td>
                    <img
                      src={tip.image}
                      alt="tip"
                      className="w-16 h-16 object-cover rounded"
                    />
                  </td>
                  <td>
                    <Link
                      to={`/tip/${tip._id}`}
                      className="btn btn-sm btn-accent text-white"
                    >
                      👁️ See More
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* ✅ Card View */}
      {viewType === "card" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-6">
          {filteredTips.map((tip) => (
            <div
              key={tip._id}
              className="bg-base-200 border border-base-300 rounded-xl shadow-md overflow-hidden"
            >
              <img
                src={tip.image}
                alt={tip.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-xl font-semibold text-primary">
                  {tip.title}
                </h3>
                <p className="text-sm text-base-content">
                  <span className="font-medium">Category:</span> {tip.category}
                </p>
                <p className="text-sm text-accent capitalize">
                  Difficulty: {tip.difficulty}
                </p>
                <Link
                  to={`/tip/${tip._id}`}
                  className="btn btn-sm btn-outline btn-accent mt-3"
                >
                  👁️ See More
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BrowseTips;
