import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './BottomBanner.scss';
const BottomBanner = () => {
  return (
    <div className="BottomBanner">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={3}
        pagination={{ clickable: true, dynamicBullets: true }}
        className="Swiper"
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={3000}
        loop={true}
      >
        <div className="BottomBanner-wrapper">
          <SwiperSlide className="SwiperSlide">
            <img src="images/partner_1.png" alt="이미지1" className="im" />
          </SwiperSlide>
          <SwiperSlide className="SwiperSlide">
            <img src="images/partner_2.png" alt="이미지2" className="im" />
          </SwiperSlide>
          <SwiperSlide className="SwiperSlide">
            <img src="images/partner_3.png" alt="이미지3" className="im" />
          </SwiperSlide>
          <SwiperSlide className="SwiperSlide">
            <img src="images/partner_4.png" alt="이미지4" className="im" />
          </SwiperSlide>
          <SwiperSlide className="SwiperSlide">
            <img src="images/partner_5.png" alt="이미지5" className="im" />
          </SwiperSlide>
          <SwiperSlide className="SwiperSlide">
            <img src="images/partner_1.png" alt="이미지1" className="im" />
          </SwiperSlide>
          <SwiperSlide className="SwiperSlide">
            <img src="images/partner_2.png" alt="이미지2" className="im" />
          </SwiperSlide>
          <SwiperSlide className="SwiperSlide">
            <img src="images/partner_3.png" alt="이미지3" className="im" />
          </SwiperSlide>
          <SwiperSlide className="SwiperSlide">
            <img src="images/partner_4.png" alt="이미지4" className="im" />
          </SwiperSlide>
          <SwiperSlide className="SwiperSlide">
            <img src="images/partner_5.png" alt="이미지5" className="im" />
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
};
export default BottomBanner;
