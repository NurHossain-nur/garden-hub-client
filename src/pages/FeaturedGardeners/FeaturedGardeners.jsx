import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";

const FeaturedGardeners = () => {
  const [gardeners, setGardeners] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/gardeners?status=active&limit=6")
      .then(res => res.json())
      .then(data => setGardeners(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="max-w-6xl mx-auto my-20 px-4">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-green-600 dark:text-green-400">
        🌟 Featured Gardeners
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {gardeners.map((gardener, idx) => (
          <Fade key={idx} triggerOnce>
            <div className="card bg-white dark:bg-neutral h-full text-base-content border border-gray-300 dark:border-gray-700 shadow-md hover:shadow-2xl transition duration-300">
              <figure className="relative">
                <img
                  src={gardener.image}
                  alt={gardener.name}
                  className="h-56 w-full object-cover"
                />
                <span className="absolute top-2 right-2 badge badge-success text-white capitalize">
                  {gardener.status}
                </span>
              </figure>

              <div className="card-body">
                <h3 className="text-2xl font-bold text-primary">
                  {gardener.name}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Age: {gardener.age} | Gender: {gardener.gender}
                </p>

                <p className="text-sm text-green-700 dark:text-green-400 mt-1 font-medium">
                  🌿 Experience: {gardener.experiences}
                </p>

                <p className="text-sm mt-1 text-purple-600 dark:text-purple-400 font-semibold">
                  📝 Total Tips Shared: {gardener.totalSharedTips}
                </p>

                <p className="text-sm text-gray-700 dark:text-gray-400 mt-2">
                  {gardener.bio.length > 100
                    ? gardener.bio.slice(0, 100) + "..."
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

export default FeaturedGardeners;
