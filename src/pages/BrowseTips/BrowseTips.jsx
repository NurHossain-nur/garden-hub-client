import { useEffect, useState } from "react";
import { ImSpinner3 } from "react-icons/im";
import { Link } from "react-router";


const BrowseTips = () => {
  const [loading, setLoading] = useState(true);
  const [tips, setTips] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/gardentips?availability=public")
      .then((res) => res.json())
      .then((data) => {
        console.log("data",data);
        setTips(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
      setLoading(false);
  }, []);

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

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead className="bg-base-300 text-base-content">
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Category</th>
              <th>Image</th>
              <th>See More</th>
            </tr>
          </thead>
          <tbody>
            {tips.map((tip, index) => (
              <tr key={tip._id}>
                <th>{index + 1}</th>
                <td>{tip.title}</td>
                <td>{tip.category}</td>
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
    </div>
  );
};

export default BrowseTips;
