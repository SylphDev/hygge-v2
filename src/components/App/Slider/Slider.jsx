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

const Slider = ({ images = [beach, forest, mountains, lakeHouse] }) => {
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
                {images.map(image => {
                    console.log('>>SLIDER', image);
                    return (
                        <React.Fragment key={image}>
                            <SwiperSlide key={image}>
                                <img src={`${image}`} style={{ width: '100%', height: '35rem', objectFit: "cover" }} />
                            </SwiperSlide>
                        </React.Fragment>
                    )
                })}
            </Swiper>
        </div>
    );
}

export { Slider };