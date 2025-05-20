// components/home/SeasonalGuide.jsx
import { Fade } from "react-awesome-reveal";

const SeasonalGuide = () => {
  return (
    <section className="px-4 md:px-12 py-12 bg-base-100">
      <Fade cascade>
        <div className="text-center mb-10">
          <h2 className="text-4xl font-heading text-primary">🌤 Seasonal Gardening Guide</h2>
          <p className="text-base font-sans text-muted mt-2">
            Make the most of your garden this <span className="text-accent font-semibold">Spring</span> 🌸
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-base-200 p-6 rounded-2xl shadow-md">
            <h3 className="text-2xl font-heading mb-2 text-secondary">Top Spring Tip 🌼</h3>
            <p className="text-base text-muted font-sans">
              Start seeds indoors for vegetables like tomatoes and peppers so they’re ready to plant after the last frost.
            </p>
            <button className="btn btn-outline btn-accent mt-4">Explore Full Guide</button>
          </div>
          <img
            src="https://i.ibb.co/yYdVLjB/spring-garden.jpg"
            className="rounded-2xl object-cover w-full h-72"
            alt="Spring Gardening"
          />
        </div>
      </Fade>
    </section>
  );
};

export default SeasonalGuide;
