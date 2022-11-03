import React from "react";
import styled from "styled-components";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import sliderItem from "./bannerItem";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./slider.scss";

const SliderImg = styled.img`
  width: 100%;
`;

const Banner = () => {
  return (
    <section>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView={1}
        navigation
        autoplay={true}
        speed={2000}
        loop={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {sliderItem.map(({ img }, i) => (
          <SwiperSlide key={i}>
            <SliderImg src={img} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;
