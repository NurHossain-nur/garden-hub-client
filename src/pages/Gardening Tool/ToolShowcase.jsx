// components/home/ToolShowcase.jsx
import { Slide } from "react-awesome-reveal";

const tools = [
  {
    name: "Hand Trowel",
    type: "Planting Tool",
    img: "https://i.ibb.co/9TffJtD/trowel.png",
  },
  {
    name: "Pruning Shears",
    type: "Cutting Tool",
    img: "https://i.ibb.co/vJkBmk5/pruners.png",
  },
  {
    name: "Watering Can",
    type: "Irrigation",
    img: "https://i.ibb.co/m8WbQYg/watering-can.png",
  },
  {
    name: "Garden Fork",
    type: "Soil Tool",
    img: "https://i.ibb.co/dJjNZPK/fork.png",
  },
];

const ToolShowcase = () => {
  return (
    <section className="px-4 md:px-12 py-12 bg-base-100">
      <Slide cascade direction="left">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-heading text-primary">🛠 Gardening Tool Showcase</h2>
          <p className="text-base font-sans text-muted mt-2">Discover the tools that make your garden grow better</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <div key={index} className="p-4 bg-base-200 rounded-xl hover:scale-105 transition duration-300 shadow">
              <img src={tool.img} alt={tool.name} className="w-full h-32 object-contain mb-4" />
              <h3 className="font-heading text-xl text-secondary">{tool.name}</h3>
              <p className="text-muted font-sans">{tool.type}</p>
            </div>
          ))}
        </div>
      </Slide>
    </section>
  );
};

export default ToolShowcase;
