import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";

const ExploreGardeners = () => {
  const [gardeners, setGardeners] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/gardeners") // no limit to get all
      .then(res => res.json())
      .then(data => setGardeners(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 my-20">
      <h2 className="text-4xl font-extrabold text-center text-green-600 dark:text-green-400 mb-12">
        🔍 Explore Gardeners
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {gardeners.map((gardener, idx) => (
          <Fade key={idx} triggerOnce>
            <div className="bg-white dark:bg-neutral h-full border border-gray-300 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden">
              <img
                src={gardener.image}
                alt={gardener.name}
                className="w-full h-56 object-cover"
              />

              <div className="p-6 space-y-2">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-2xl font-bold text-primary">
                    {gardener.name}
                  </h3>
                  <span
                    className={`badge ${
                      gardener.status === "public"
                        ? "badge-success"
                        : "badge-warning"
                    } text-white capitalize`}
                  >
                    {gardener.status}
                  </span>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-300">
                  🌍 Location: {gardener.location}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  👤 Age: {gardener.age} | Gender: {gardener.gender}
                </p>
                <p className="text-sm text-green-700 dark:text-green-400">
                  🌿 Experience: {gardener.experiences}
                </p>
                <p className="text-sm text-purple-700 dark:text-purple-400 font-medium">
                  📝 Total Shared Tips: {gardener.totalSharedTips}
                </p>

                <p className="text-sm text-gray-700 dark:text-gray-400 mt-2">
                  {gardener.bio.length > 120
                    ? gardener.bio.slice(0, 120) + "..."
                    : gardener.bio}
                </p>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default ExploreGardeners;
