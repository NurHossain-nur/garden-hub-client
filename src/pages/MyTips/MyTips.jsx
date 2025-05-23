import { useContext, useEffect, useState } from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
// import auth from "@/firebase/firebase.config";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { AuthContext } from "../../provider/AuthProvider";

const MyTips = () => {
  const { user } = useContext(AuthContext);
  const [tips, setTips] = useState([]);
  const [selectedTip, setSelectedTip] = useState(null);

  //   console.log(selectedTip);

  // Fetch user tips
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/gardentips?userEmail=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          // console.log(data)
          setTips(data);
        });
    }
  }, [user]);

  // Delete Tip
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Tip will be deleted permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/gardentips/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              toast.success("Tip deleted successfully!");
              setTips((prev) => prev.filter((tip) => tip._id !== id));
            }
          });
      }
    });
  };

  // Submit updated tip
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedTip = {
      title: form.title.value,
      topic: form.topic.value,
      difficulty: form.difficulty.value,
      description: form.description.value,
      image: form.image.value,
      category: form.category.value,
      availability: form.availability.value,
    };

    fetch(`http://localhost:5000/gardentips/${selectedTip._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedTip),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Tip updated successfully!");
        setSelectedTip(null);
        // Refresh tips list
        fetch(`http://localhost:5000/gardentips?userEmail=${user.email}`)
          .then((res) => res.json())
          .then((data) => setTips(data));
      });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-heading text-primary mb-6 text-center">My Garden Tips</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead className="bg-base-300 text-base-content">
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Status</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tips.map((tip) => (
              <tr key={tip._id}>
                <td>{tip.title}</td>
                <td>{tip.category}</td>
                <td>{tip.availability}</td>
                <td>
                  <img
                    src={tip.image}
                    alt={tip.title}
                    className="w-16 h-12 rounded"
                  />
                </td>
                <td className="space-x-2">
                  <button
                    onClick={() => setSelectedTip(tip)}
                    className="btn btn-sm btn-primary"
                  >
                    ✏️ Update
                  </button>
                  <button
                    onClick={() => handleDelete(tip._id)}
                    className="btn btn-sm btn-error"
                  >
                    🗑️ Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for Update */}
      {selectedTip && (
        <dialog id="updateModal" open className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Update Tip</h3>
            <form onSubmit={handleUpdate} className="space-y-2">
              <input
                name="title"
                defaultValue={selectedTip.title}
                className="input input-bordered w-full"
              />
              <input
                name="topic"
                defaultValue={selectedTip.topic}
                className="input input-bordered w-full"
              />
              <select
                name="difficulty"
                defaultValue={selectedTip.difficulty}
                className="select select-bordered w-full"
              >
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </select>

              <select
                name="category"
                defaultValue={selectedTip.category}
                className="select select-bordered w-full"
              >
                <option>Composting</option>
                <option>Plant Care</option>
                <option>Vertical Gardening</option>
              </select>
              <select
                name="availability"
                defaultValue={selectedTip.status}
                className="select select-bordered w-full"
              >
                <option>public</option>
                <option>hidden</option>
              </select>

              <input
                name="image"
                defaultValue={selectedTip.image}
                className="input input-bordered w-full"
              />

              <textarea
                name="description"
                defaultValue={selectedTip.description}
                className="textarea textarea-bordered w-full"
              />

              <p className="text-sm text-gray-500">
                By {user.displayName} ({user.email})
              </p>
              <div className="modal-action">
                <button type="submit" className="btn btn-success">
                  Update
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedTip(null)}
                  className="btn"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default MyTips;
