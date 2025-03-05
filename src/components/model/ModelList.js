import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router";
import "swiper/css";
import "swiper/css/pagination";

const ModelList = () => {
  const [tab, setTab] = useState(1);
  const navigate = useNavigate();

  return (
    <section className="min-h-screen px-6 mt-[70px] overflow-hidden">
      <h3 className="my-8 text-[28px] text-primary font-bold leading-none">
        Explore <br /> Your Favorite <br /> Desserts!
      </h3>
      <Swiper
        slidesPerView={1}
        spaceBetween={16}
        style={{ overflow: "visible" }}
        className="mb-8"
      >
        <SwiperSlide onClick={() => navigate("/~mj469/pudding")}>
          <div className="p-4 relative bg-[#EDE2DD] rounded-[24px] cursor-pointer">
            <img src="/~mj469/assets/pudding.png" alt="pudding" />
            <img
              className="w-[32px] absolute right-4 bottom-4"
              src="/~mj469/assets/arrow.png"
              alt="arrow"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide onClick={() => navigate("/~mj469/cake")}>
          <div className="p-4 relative bg-[#EDE2DD] rounded-[24px] cursor-pointer">
            <img src="/~mj469/assets/cake.png" alt="cake" />
            <img
              className="w-[32px] absolute right-4 bottom-4"
              src="/~mj469/assets/arrow.png"
              alt="arrow"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide onClick={() => navigate("/~mj469/milk")}>
          <div className="p-4 relative bg-[#EDE2DD] rounded-[24px] cursor-pointer">
            <img src="/~mj469/assets/milk.png" alt="milk" />
            <img
              className="w-[32px] absolute right-4 bottom-4"
              src="/~mj469/assets/arrow.png"
              alt="arrow"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default ModelList;
