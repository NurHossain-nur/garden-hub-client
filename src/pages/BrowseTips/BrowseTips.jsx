import { useEffect, useState } from "react";
import { Link } from "react-router";

const BrowseTips = () => {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/gardentips?availability=public")
      .then((res) => res.json())
      .then((data) => {
        console.log("data",data);
        setTips(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-4 lg:p-10">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
        🌿 Public Garden Tips
      </h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr className="bg-base-200 text-base-content">
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
