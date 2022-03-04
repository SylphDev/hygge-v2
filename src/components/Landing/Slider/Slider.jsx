import React from 'react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import beach from '../../../assets/images/image-beach.jpg'
import forest from '../../../assets/images/image-forest.jpg'
import mountains from '../../../assets/images/image-mountains.jpg'
import lakeHouse from '../../../assets/images/image-lake-house.jpg'
import './Slider.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Autoplay]);

const Slider = () => {
    return (
        <div className="Image-slider">
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
            >
                <SwiperSlide>
                    <img src={beach} style={{ width: '100%', height: '35rem', objectFit: "cover" }} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={forest} style={{ width: '100%', height: '35rem', objectFit: "cover" }} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={mountains} style={{ width: '100%', height: '35rem', objectFit: "cover" }} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={lakeHouse} style={{ width: '100%', height: '35rem', objectFit: "cover" }} />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export { Slider };