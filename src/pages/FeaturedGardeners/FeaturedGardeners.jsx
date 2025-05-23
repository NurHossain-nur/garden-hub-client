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

              <div className="card-body p-5 space-y-2">
                <h3 className="text-2xl font-heading text-primary">
                  {gardener.name}
                </h3>

                <p className="text-sm text-muted">
                  Age: {gardener.age} | Gender: {gardener.gender}
                </p>

                <p className="text-sm text-accent font-medium">
                  🌿 Experience: {gardener.experiences}
                </p>

                <p className="text-sm text-secondary font-semibold">
                  📝 Total Tips Shared: {gardener.totalSharedTips}
                </p>

                <p className="text-sm text-base-content leading-relaxed">
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
