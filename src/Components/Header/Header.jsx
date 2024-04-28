// import required modules
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Header = () => {
  return (
    <div className=" ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative">
            <img src="/header2.jpg" alt="" />
          </div>
          <div className="absolute lg:top-[250px] lg:left-[180px] md:top-[250px] md:left-[150px] top-[100px] ">
            <h1 className="text-2xl font-bold text-white md:text-4xl lg:text-5xl text-center">
              The best way to find your tourism please
            </h1>
            <p className="text-center md:text-xl text-white my-3">
              There are no alternative to refresh of mind better then travel,{" "}
              <br /> This is most important to refresh our mind.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src="/header3.jpg" alt="" />
          </div>
          <div className="absolute lg:top-[250px] lg:left-[180px] md:top-[250px] md:left-[150px] top-[100px] ">
            <h1 className="text-2xl font-bold text-white md:text-4xl lg:text-5xl text-center">
              The best way to find your tourism please
            </h1>
            <p className="text-center md:text-xl text-white my-3">
              There are no alternative to refresh of mind better then travel,{" "}
              <br /> This is most important to refresh our mind.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src="/header4.jpg" alt="" />
          </div>
          <div className="absolute lg:top-[250px] lg:left-[180px] md:top-[250px] md:left-[150px] top-[100px] ">
            <h1 className="text-2xl font-bold text-white md:text-4xl lg:text-5xl text-center">
              The best way to find your tourism please
            </h1>
            <p className="text-center md:text-xl text-white my-3">
              There are no alternative to refresh of mind better then travel,{" "}
              <br /> This is most important to refresh our mind.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src="/header5.jpg" alt="" />
          </div>
          <div className="absolute lg:top-[250px] lg:left-[180px] md:top-[250px] md:left-[150px] top-[100px] ">
            <h1 className="text-2xl font-bold text-white md:text-4xl lg:text-5xl text-center">
              The best way to find your tourism please
            </h1>
            <p className="text-center md:text-xl text-white my-3">
              There are no alternative to refresh of mind better then travel,{" "}
              <br /> This is most important to refresh our mind.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Header;
