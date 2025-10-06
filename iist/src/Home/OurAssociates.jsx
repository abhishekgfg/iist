import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

// Import images
import csImage from "../images/1.c8f39183728a6b7ce746.webp";
import teacherImage from "../images/2.bec59e4018b0f715c634.webp";
import hospitalImage from "../images/3.c3a978d4f3130ee873a4.webp";
import beautyImage from "../images/4.2c5a943c2831dd33d54b.webp";
import artsImage from "../images/5.18793d0eab32da82b3cc.webp";
import tailoringImage from "../images/6.678789320a76f43ea4ce.webp";
import businessImage from "../images/7.f782e80cde1b5f9197fb.webp";
import safetyImage from "../images/8.05e79e1b3994bd6c150d.webp";

// Program data
const programs = [
  { title: "Computer Science and IT", img: csImage },
  { title: "Teacher Training", img: teacherImage },
  { title: "Hospital and Health Management", img: hospitalImage },
  { title: "Beauty, Wellness and Cosmetics", img: beautyImage },
  { title: "Arts and Paintings", img: artsImage },
  { title: "Tailoring", img: tailoringImage },
  { title: "Business Management", img: businessImage },
  { title: "Safety Management", img: safetyImage },
];

export default function OurAssociates() {
  return (
    <div className="bg-white py-10">
      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-blue-900 uppercase">
         OUR ASSOCIATES
        </h2>
      </div>

      {/* Swiper Slider */}
      <div className="relative px-6 md:px-16">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          spaceBetween={20}
          slidesPerView={4} // 5 images visible ek row me
          slidesPerGroup={1} // ek bar scroll pe ek hi image move hogi
          loop={true}
        >
          {programs.map((program, index) => (
            <SwiperSlide key={index}>
              <div className="relative rounded-xl overflow-hidden ">
                <img
                  src={program.img}
                  alt={program.title}
                  className="w-full h-50 object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

{/* Custom Navigation Arrows */}
<button className="custom-prev absolute top-1/2 left-6 md:left-10 transform -translate-y-1/2 bg-blue-900 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-blue-800 transition z-10">
  <FontAwesomeIcon icon={faArrowLeft} />
</button>

<button className="custom-next absolute top-1/2 right-6 md:right-10 transform -translate-y-1/2 bg-blue-900 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-blue-800 transition z-10">
  <FontAwesomeIcon icon={faArrowRight} />
</button>



      </div>

      {/* Button */}
      <div className="text-center mt-10">
        <button className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
          Explore More
        </button>
      </div>
    </div>
  );
}
