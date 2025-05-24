// components/home/ToolShowcase.jsx
import { Slide } from "react-awesome-reveal";

const tools = [
  {
    name: "Hand Trowel",
    type: "Planting Tool",
    img: "https://i.ibb.co/wrrrXS1D/Leonardo-Kino-XL-a-Planting-Tool-image-for-gardening-1.jpg",
  },
  {
    name: "Pruning Shears",
    type: "Cutting Tool",
    img: "https://i.ibb.co/bMHsjr2Y/Leonardo-Kino-XL-a-Cutting-Tool-image-for-gardening-0.jpg",
  },
  {
    name: "Watering Can",
    type: "Irrigation",
    img: "https://i.ibb.co/P8CYHQP/Leonardo-Kino-XL-a-Irrigation-image-for-gardening-0.jpg",
  },
  {
    name: "Garden Fork",
    type: "Soil Tool",
    img: "https://i.ibb.co/tPQcrCJJ/Leonardo-Kino-XL-a-Soil-Tool-image-for-gardening-1.jpg",
  },
];

const ToolShowcase = () => {
  return (
    <section className="max-w-7xl mx-auto mb-20 px-12 py-12 bg-white rounded-3xl my-10">
      <Slide cascade direction="left">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-heading text-primary">🛠 Gardening Tool Showcase</h2>
          <p className="text-secondary font-sans text-muted mt-2">Discover the tools that make your garden grow better</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <div key={index} className="p-4 bg-base-200 rounded-xl hover:scale-105 transition duration-300 shadow">
              <div className="w-full h-40 bg-amber-600 mb-6 rounded-2xl">
                <img src={tool.img} alt={tool.name} className="w-full h-full  object-cover overflow-hidden rounded-2xl" />
              </div>
              <div className="flex justify-between ">
                <h3 className="font-heading text-xl text-secondary">{tool.name}</h3>
              <p className="text-muted font-sans">{tool.type}</p>
              </div>
            </div>
          ))}
        </div>
      </Slide>
    </section>
  );
};

export default ToolShowcase;
