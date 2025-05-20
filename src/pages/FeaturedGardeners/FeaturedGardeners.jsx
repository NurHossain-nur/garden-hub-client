import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";

const FeaturedGardeners = () => {
  const [gardeners, setGardeners] = useState([]);
  console.log(gardeners)

  useEffect(() => {
    fetch("http://localhost:5000/gardeners?status=active&limit=6")
      .then(res => res.json())
      .then(data => setGardeners(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="max-w-6xl mx-auto my-16 px-4">
      <h2 className="text-4xl font-heading text-center mb-10">
        🌟 Featured Gardeners
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gardeners.map((gardener, idx) => (
          <Fade key={idx} triggerOnce>
            <div className="card bg-neutral text-base-content shadow-xl h-full">
              <figure>
                <img src={gardener.photo} alt={gardener.name} className="h-56 w-full object-cover" />
              </figure>
              <div className="card-body">
                <h3 className="text-2xl font-bold">{gardener.name}</h3>
                <p className="text-sm text-muted">{gardener.location}</p>
                <p className="mt-2">{gardener.bio}</p>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default FeaturedGardeners;

