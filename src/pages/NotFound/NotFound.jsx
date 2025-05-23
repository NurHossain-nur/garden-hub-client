
import { Link } from "react-router";
import Lottie from "lottie-react";
import notFoundAnim from "../../assets/lottie/404-plant.json";
import { Fade } from "react-awesome-reveal";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-100 text-base-content p-6 text-center">
      <Fade cascade>
        <div className="max-w-sm">
          <Lottie animationData={notFoundAnim} loop={true} />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mt-6 font-heading">404</h1>
        <p className="text-xl md:text-2xl mt-2 font-sans">
          Oops! The garden path you're looking for is missing. 🌱
        </p>

        <Link to="/" className="btn btn-primary mt-6">
          Back to Home
        </Link>
      </Fade>
    </div>
  );
};

export default NotFound;
