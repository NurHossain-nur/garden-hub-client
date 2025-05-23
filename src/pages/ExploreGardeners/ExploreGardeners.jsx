import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";

const ExploreGardeners = () => {
  const [gardeners, setGardeners] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/gardeners")
      .then(res => res.json())
      .then(data => setGardeners(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="max-w-7xl min-h-[550px] mx-auto px-4 my-20 font-sans text-base-content">
      <h2 className="text-4xl font-heading text-primary text-center mb-12">
        🔍 Explore Gardeners
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {gardeners.map((gardener, idx) => (
          <Fade key={idx} triggerOnce>
            <div className="bg-base-300 border h-full border-border rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
              <img
                src={gardener.image}
                alt={gardener.name}
                className="w-full h-56 object-cover"
              />

              <div className="p-6 space-y-2">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-2xl font-heading text-primary">
                    {gardener.name}
                  </h3>
                  <span
                    className={`badge px-3 py-1 text-white font-medium ${
                      gardener.status === "public"
                        ? "bg-success"
                        : "bg-secondary"
                    } capitalize`}
                  >
                    {gardener.status}
                  </span>
                </div>

                <p className="text-sm text-muted">
                  👤 Age: {gardener.age} | Gender: {gardener.gender}
                </p>
                <p className="text-sm text-accent">
                  🌿 Experience: {gardener.experiences}
                </p>
                <p className="text-sm text-secondary font-semibold">
                  📝 Total Shared Tips: {gardener.totalSharedTips}
                </p>

                <p className="text-sm text-base-content mt-2 leading-relaxed">
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
