// work slider data
export const workSlider = {
  slides: [
    {
      images: [
        {
          title: "Auth App",
          path: "/img1.png",
          link: "https://mern-auth-pa2l.onrender.com/",
          gitHub:"https://github.com/Kuwar20/Auth-fullstack-P-2",
        },
        {
          title: "Real Estate Platform",
          path: "/img2.png",
          link: "https://real-estate-6a8.pages.dev/",
          gitHub: "https://github.com/Kuwar20/Mern-frontend-P-3",
        },
        {
          title: "Ecommerce",
          path: "/img3.png",
          link: "https://kuwar-frontend-react-project.netlify.app/",
          gitHub: "https://github.com/Kuwar20/Ecom-frontend-P-1",
        },
      ],
    },
    {
      images: [
        {
          title: "Mern Recipe App",
          path: "/img4.png",
          link: "",
          gitHub: "https://github.com/Kuwar20/Mern-frontend-P-1",
        },
      ],
    },
  ],
};

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

// icons
import { BsArrowRight } from "react-icons/bs";
// next image
import Image from "next/image";
import Link from "next/link";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlider.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                    key={index}
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group">
                      {/* image */}
                      <Image src={image.path} width={500} height={300} alt="" />
                      {/* overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                      {/* title */}
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                        <h4>{image.title}</h4>
                        <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                          {/* title part 1 */}
                          <a href={image.link} target="_blank" rel="noopener noreferrer" className="delay-100">
                            Live |
                          </a>
                          {/* title part 2 */}

                          <a
                            href={image.gitHub}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150"
                          >
                            GitHub
                          </a>
                          {/* icon */}
                          <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
