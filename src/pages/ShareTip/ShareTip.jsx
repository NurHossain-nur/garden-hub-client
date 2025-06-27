// src/pages/ShareTip.jsx
import { useContext, useState } from "react";

import { toast } from "react-toastify";
// import axios from "axios";
import { AuthContext } from "../../provider/AuthProvider";

const ShareTip = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const tipData = {
      title: form.title.value,
      topic: form.topic.value,
      difficulty: form.difficulty.value,
      description: form.description.value,
      image: form.image.value,
      category: form.category.value,
      availability: form.availability.value,
      userName: user.displayName,
      userEmail: user.email,
    };

    try {
      const response = await fetch("http://localhost:5000/gardentips", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tipData),
      });

      const data = await response.json();

      // console.log(data);

      if (data.insertedId) {
        // alert("hello")
        toast.success("🌱 Tip shared successfully!");
        form.reset();
      } else {
        throw new Error("Insert failed");
      }
    } catch (err) {
      console.error(err);
      toast.error("❌ Failed to share tip.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-heading text-center mb-6 text-primary">
        {" "}
        Share a Garden Tip
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-base-200 p-8 rounded-xl shadow"
      >
        <input
          type="text"
          name="title"
          placeholder="Tip Title"
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          name="topic"
          placeholder="Plant Type/Topic"
          className="input input-bordered w-full"
          required
        />

        <select
          name="difficulty"
          className="select select-bordered w-full"
          required
        >
          <option value="">Select Difficulty</option>
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>

        <select
          name="category"
          className="select select-bordered w-full"
          required
        >
          <option value="">Select Category</option>
          <option>Composting</option>
          <option>Plant Care</option>
          <option>Vertical Gardening</option>
          <option>Soil & Water</option>
        </select>

        <select
          name="availability"
          className="select select-bordered w-full"
          required
        >
          <option value="">Select Availability</option>
          <option>Public</option>
          <option>Hidden</option>
        </select>

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          className="input input-bordered w-full"
          required
        />

        <textarea
          name="description"
          placeholder="Write your gardening tip description..."
          className="textarea textarea-bordered md:col-span-2 w-full h-32"
          required
        ></textarea>

        <input
          type="text"
          value={user?.displayName || ""}
          readOnly
          className="input input-bordered w-full bg-base-100"
        />
        <input
          type="email"
          value={user?.email || ""}
          readOnly
          className="input input-bordered w-full bg-base-100"
        />

        <button
          type="submit"
          disabled={loading}
          className="btn btn-primary md:col-span-2"
        >
          {loading ? "Submitting..." : "Share Tip"}
        </button>
      </form>
    </section>
  );
};

export default ShareTip;
