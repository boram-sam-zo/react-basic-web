import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './TopBanner.scss';

const TopBanner = () => {
  return (
    <div className="TopBanner">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true, dynamicBullets: true }}
        className="Swiper"
        autoplay={{ delay: 0, disableOnInteraction: false }}
        speed={7000}
        loop={true}
      >
        <div className="TopBanner-wrapper">
          <SwiperSlide className="SwiperSlide">
            <img src="images/visual1.png" alt="이미지1" className="im" />
          </SwiperSlide>
          <SwiperSlide className="SwiperSlide">
            <img src="images/visual2.png" alt="이미지2" className="im" />
          </SwiperSlide>
          <SwiperSlide className="SwiperSlide">
            <img src="images/visual3.png" alt="이미지3" className="im" />
          </SwiperSlide>
          <SwiperSlide className="SwiperSlide">
            <img src="images/visual4.png" alt="이미지4" className="im" />
          </SwiperSlide>
          <SwiperSlide className="SwiperSlide">
            <img src="images/보노.jpg" alt="이미지5" className="im2" />
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
};
export default TopBanner;
