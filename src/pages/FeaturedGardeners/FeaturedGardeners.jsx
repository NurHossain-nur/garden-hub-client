import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";

const FeaturedGardeners = () => {
  const [gardeners, setGardeners] = useState([]);
  const [selectedGardener, setSelectedGardener] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/gardeners?status=active&limit=6")
      .then((res) => res.json())
      .then((data) => setGardeners(data))
      .catch((err) => console.error(err));
  }, []);

  const openModal = (gardener) => {
    setSelectedGardener(gardener);
  };

  const closeModal = () => {
    setSelectedGardener(null);
  };

  return (
    <div className="max-w-7xl mx-auto my-16 px-4 font-sans text-base-content">
      <h2 className="text-4xl font-heading text-primary text-center mb-12">
        🌟 Featured Gardeners
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {gardeners.map((gardener, idx) => (
          <Fade key={idx} triggerOnce>
            <div className="bg-base-100 h-full border border-border rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
              <figure className="relative">
                <img
                  src={gardener.image}
                  alt={gardener.name}
                  className="h-56 w-full object-cover rounded-t-2xl"
                />
                <span className="absolute top-2 right-2 badge bg-success text-white capitalize">
                  {gardener.status}
                </span>
              </figure>

              <div className="card-body p-5 space-y-3">
                <h3 className="text-2xl font-heading text-primary">
                  {gardener.name}
                </h3>

                <p className="text-sm text-base-content leading-relaxed">
                  {gardener.bio?.length > 100
                    ? gardener.bio.slice(0, 100) + "..."
                    : gardener.bio}
                </p>

                <button
                  className="text-sm btn btn-outline btn-primary mt-2"
                  onClick={() => openModal(gardener)}
                >
                  See Details
                </button>
              </div>
            </div>
          </Fade>
        ))}
      </div>

      {/* Modal with Framer Motion */}
      <AnimatePresence>
        {selectedGardener && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal} // <-- close modal when clicking on background
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-base-200 p-8 rounded-2xl shadow-xl w-full max-w-3xl relative"
              onClick={(e) => e.stopPropagation()} // <-- prevent background click when clicking modal content
            >
              <button
                onClick={closeModal}
                className="absolute top-3 right-4 text-lg text-gray-500 hover:text-red-500"
              >
                ✕
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <img
                  src={selectedGardener.image}
                  alt={selectedGardener.name}
                  className="w-full h-64 object-cover rounded-xl"
                />

                <div className="space-y-2">
                  <h3 className="text-3xl font-heading text-primary mb-2">
                    {selectedGardener.name}
                  </h3>
                  <p className="text-sm text-muted">
                    Age: {selectedGardener.age} | Gender:{" "}
                    {selectedGardener.gender}
                  </p>
                  <p className="text-sm text-accent font-medium">
                    🌿 Experience: {selectedGardener.experiences}
                  </p>
                  <p className="text-sm text-secondary font-semibold">
                    📝 Total Tips Shared: {selectedGardener.totalSharedTips}
                  </p>
                  <p className="text-sm text-base-content leading-relaxed mt-4">
                    {selectedGardener.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="text-center mt-10">
        <Link to="/explore-gardeners">
          <button className="btn btn-primary btn-wide">
            See All Gardeners
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedGardeners;
