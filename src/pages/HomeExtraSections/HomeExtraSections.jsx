// 📦 HomeExtraSections.jsx - Best 3 Sections for GardenHub

import CountUp from "react-countup";
import { FaCheckCircle, FaEnvelopeOpenText, FaUsers, FaSeedling } from "react-icons/fa";
// import { CountUp } from "use-count-up";
// import { motion } from "framer-motion";

const HomeExtraSections = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 space-y-20 my-28 font-sans">
      {/* 🌿 Why Choose Us */}
      <section className="text-center space-y-6">
        <h2 className="text-4xl font-heading text-primary">🌿 Why Choose GardenHub?</h2>
        <p className="text-muted max-w-2xl mx-auto">
          We’re building a passionate gardening community. Here’s why gardeners love us:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {[
            {
              icon: <FaCheckCircle className="text-3xl text-green-600" />,
              title: "Trusted Garden Tips",
              desc: "All tips are shared by real gardeners and reviewed by community experts."
            },
            {
              icon: <FaUsers className="text-3xl text-yellow-500" />,
              title: "Active Community",
              desc: "Join 1,000+ active users exchanging tips and experiences."
            },
            {
              icon: <FaSeedling className="text-3xl text-accent" />,
              title: "Easy to Use",
              desc: "Beautiful, clean interface for finding and sharing tips with ease."
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-base-200 border border-border rounded-xl p-6 shadow hover:shadow-lg transition"
            >
              <div className="mb-3">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-base-content">{item.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 📈 GardenHub Stats */}
      <section className="text-center bg-base-200 rounded-2xl py-12 px-4 shadow-md">
        <h2 className="text-3xl font-heading text-primary mb-6">📈 GardenHub in Numbers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { label: "Tips Shared", value: 300 },
            { label: "Gardeners", value: 120 },
            { label: "Reviews", value: 540 },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-white text-primary-content rounded-xl py-6 px-4 border border-border shadow-sm"
            >
              <h3 className="text-4xl font-bold text-primary">
                <CountUp isCounting end={stat.value} duration={2.4} />+
              </h3>
              <p className="text-base-content text-sm mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ✉️ Newsletter Signup */}
      <section className="bg-gradient-to-br from-green-100 to-lime-200 p-10 rounded-2xl text-center border border-primary shadow-inner">
        <h2 className="text-3xl font-heading text-green-800 mb-4 flex items-center justify-center gap-2">
          <FaEnvelopeOpenText /> Subscribe for Gardening Tips
        </h2>
        <p className="text-secondary max-w-xl mx-auto mb-6">
          Join our newsletter and get seasonal gardening secrets directly in your inbox.
        </p>
        <form className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered input-success w-full"
            required
          />
          <button className="btn btn-primary text-white">Subscribe</button>
        </form>
      </section>
    </div>
  );
};

export default HomeExtraSections;
