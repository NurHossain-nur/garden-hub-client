import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Fade } from 'react-awesome-reveal';
import { Typewriter } from 'react-simple-typewriter';

const Banner = () => {
  const slides = [
    {
      id: 1,
      image: "https://i.ibb.co/Zz4sVbCx/Leonardo-Kino-XL-garden-image-i-want-to-use-as-a-banner-image-0.jpg",
      title: "Spring Garden Fiesta",
      subtitle: "Explore vibrant colors and tips from top gardeners!",
      buttonText: "Join Now"
    },
    {
      id: 2,
      image: "https://i.ibb.co/rGR26Y41/Leonardo-Kino-XL-garden-image-slidely-dark-type-i-want-to-use-1.jpg",
      title: "Organic Gardening Tips",
      subtitle: "Grow healthy, pesticide-free produce at home.",
      buttonText: "Learn More"
    },
    {
      id: 3,
      image: "https://i.ibb.co/GQwSN8Yj/Leonardo-Kino-XL-garden-image-i-want-to-use-as-a-banner-image-0-1.jpg",
      title: "Photo Contest",
      subtitle: "Capture and share your garden magic!",
      buttonText: "Submit Entry"
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 my-10 py-10">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="rounded-2xl overflow-hidden"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="h-[500px] md:h-[600px] bg-cover bg-center text-white flex flex-col items-center justify-center text-center px-4"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <Fade cascade>
                <h2 className="text-4xl md:text-6xl font-heading mb-2">
                  <Typewriter
                    words={[slide.title]}
                    loop={false}
                    cursor
                    cursorStyle="|"
                    typeSpeed={80}
                    deleteSpeed={0}
                    delaySpeed={1000}
                  />
                </h2>
                <p className="text-lg md:text-xl font-sans mb-6">{slide.subtitle}</p>
                <button className="btn btn-primary">{slide.buttonText}</button>
              </Fade>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
