import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import data from "./data";
import Certificate from "./Certificate";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./certificates.css";

const Certificates = () => {
  return (
    <section id="certificates">
      <h2>Academia</h2>
      <p>Here are diplomas & Certificates I have earned</p>

      <div className="container">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {data.map((certificate) => (
            <SwiperSlide key={certificate.id}>
              <Certificate certificate={certificate} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Certificates;
