import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useNavigate } from "react-router";
import "swiper/css";
import "swiper/css/pagination";

const ModelList = () => {
  const navigate = useNavigate();

  return (
    <section className="px-6 pb-10 mt-[70px] overflow-hidden">
      <h3 className="max-w-2xl mx-auto my-8 text-[28px] text-primary font-bold leading-none">
        Explore <br /> Your Favorite <br /> Desserts!
      </h3>
      <Swiper
        slidesPerView={1}
        spaceBetween={16}
        pagination
        modules={[Pagination]}
        style={{
          overflow: "visible",
          padding: "0 calc((100vw - 42rem - 1.5rem) / 2)",
        }}
        className="mb-8"
      >
        <SwiperSlide className="max-w-2xl" onClick={() => navigate("/pudding")}>
          <div className="p-4 relative bg-[#EDE2DD] rounded-[24px] cursor-pointer">
            <img src="/~mj469/assets/pudding.png" alt="pudding" />
            <img
              className="w-[32px] absolute right-4 bottom-4"
              src="/~mj469/assets/arrow.png"
              alt="arrow"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="max-w-2xl" onClick={() => navigate("/cake")}>
          <div className="p-4 relative bg-[#EDE2DD] rounded-[24px] cursor-pointer">
            <img src="/~mj469/assets/cake.png" alt="cake" />
            <img
              className="w-[32px] absolute right-4 bottom-4"
              src="/~mj469/assets/arrow.png"
              alt="arrow"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="max-w-2xl" onClick={() => navigate("/milk")}>
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
