import { useEffect, useState } from "react";
import { ImSpinner3 } from "react-icons/im";

const AllTips = () => {
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  

  useEffect(() => {
    fetch("http://localhost:5000/gardentips?availability=public")
      .then((res) => res.json())
      .then((data) => {
        setTips(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  const filteredTips = tips.filter((tip) => {
    const matchesSearch = tip.title.toLowerCase().includes(search.toLowerCase());
    const matchesFilter =
      filter === "all" || tip.difficulty ?.toLowerCase() === filter.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <ImSpinner3 className="text-5xl animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="p-6 md:p-10">
      <h2 className="text-3xl font-heading text-primary mb-6 text-center">
        🌱 All Garden Tips
      </h2>

      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by title..."
          className="input input-bordered w-full md:w-1/2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="select select-bordered w-full md:w-1/4"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All Difficulties</option>
  <option value="Easy">Easy</option>
  <option value="Medium">Medium</option>
  <option value="Hard">Hard</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="table w-full table-zebra text-base">
          <thead className="bg-base-300 text-base-content">
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Author</th>
              <th>Difficulty</th>
              <th>Availability</th>
              <th>Likes</th>
            </tr>
          </thead>
          <tbody>
            {filteredTips.map((tip, index) => (
              <tr key={tip._id}>
                <th>{index + 1}</th>
                <td>{tip.title}</td>
                <td>{tip.userName || "Unknown"}</td>
                <td>{tip.difficulty}</td>
                <td>
                  <span
                    className={`badge ${
                      tip.availability === "public"
                        ? "badge-success"
                        : "badge-warning"
                    }`}
                  >
                    {tip.availability}
                  </span>
                </td>
                <td>{tip.totalLiked || 0}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllTips;
