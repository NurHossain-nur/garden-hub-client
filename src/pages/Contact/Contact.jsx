import { Fade } from "react-awesome-reveal";

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10 px-4 py-16 font-sans text-base-content">
      <Fade direction="down" triggerOnce>
        <h2 className="text-4xl font-heading text-center mb-10 text-primary">
          📞 Contact Us
        </h2>
      </Fade>

      <Fade direction="up" triggerOnce>
        <div className="bg-base-200 p-6 md:p-10 rounded-xl shadow-lg border border-border space-y-6">
          <p className="text-lg text-justify leading-relaxed">
            Have questions, feedback, or just want to say hello? We'd love to hear from you!
          </p>

          <div className="space-y-4">
            <p><strong>Email:</strong> support@gardenhub.com</p>
            <p><strong>Phone:</strong> +880 1234-567890</p>
            <p><strong>Address:</strong> Dinajpur, Bangladesh</p>
          </div>

          <p className="text-sm text-muted mt-6">
            We usually respond within 24 hours. 🌿
          </p>
        </div>
      </Fade>
    </div>
  );
};

export default Contact;
