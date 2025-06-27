import { Typewriter } from 'react-simple-typewriter';
import { Fade } from 'react-awesome-reveal';

const AboutUs = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 mt-10 py-16 font-sans text-base-content">
      <Fade direction="down" triggerOnce>
        <h1 className="text-4xl md:text-5xl font-heading text-center mb-10 text-primary">
          <Typewriter
            words={['🌿 Welcome to GardenHub!', 'Grow with Us!']}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={60}
            delaySpeed={1500}
          />
        </h1>
      </Fade>

      <Fade direction="up" triggerOnce>
        <div className="bg-base-200 p-6 md:p-10 rounded-xl shadow-lg border border-border space-y-6">
          <p className="text-lg text-justify leading-relaxed">
            <strong>GardenHub</strong> is a vibrant community and resource platform built for gardening enthusiasts of all levels. Whether you're a seasoned gardener or just starting out, we provide tools, tips, and a community to help you thrive.
          </p>

          <ul className="list-disc list-inside space-y-2 text-muted">
            <li>🌱 Share and discover gardening tips</li>
            <li>📸 Connect with top gardeners and explore their profiles</li>
            <li>📝 Post and manage your own gardening advice</li>
            <li>🔍 Browse tips filtered by difficulty and category</li>
            <li>📊 Track engagement through likes and shares</li>
          </ul>

          <p className="text-base mt-6 text-muted">
            Our mission is to make gardening more accessible, joyful, and collaborative. We believe that sharing green knowledge can help our communities grow stronger—literally and figuratively!
          </p>
        </div>
      </Fade>
    </div>
  );
};

export default AboutUs;
