import { Fade } from "react-awesome-reveal";

const Support = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10 px-4 py-16 font-sans text-base-content">
      <Fade direction="down" triggerOnce>
        <h2 className="text-4xl font-heading text-center mb-10 text-primary">
          🛠️ Support Center
        </h2>
      </Fade>

      <Fade direction="up" triggerOnce>
        <div className="bg-base-200 p-6 md:p-10 rounded-xl shadow-lg border border-border space-y-6">
          <p className="text-lg text-justify leading-relaxed">
            Facing issues or need help using GardenHub? We're here to help.
          </p>

          <ul className="list-disc list-inside space-y-2 text-muted">
            <li>❓ Forgot your password or can’t log in?</li>
            <li>🔧 Issues with submitting tips or editing your profile?</li>
            <li>💬 Want to suggest a new feature or report a bug?</li>
          </ul>

          <p className="mt-6">
            Contact our support team directly at <strong>help@gardenhub.com</strong> or open a ticket through our Contact page. 💌
          </p>
        </div>
      </Fade>
    </div>
  );
};

export default Support;
