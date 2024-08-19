import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './Slider.css';
import playicon from '../../assets/assets/play_icon.png';
import infoicon from '../../assets/assets/info_icon.png';
import slider_data from '../../assets/assets/cards/slider_data';

const Slider = () => {
  const navigate = useNavigate();

  const handleWatchNow = (video) => {
    navigate('/detailspage', { state: { video } });
  };

  return (
    <div className="slideshow">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
      >
        {slider_data.map((video, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content">
              <div className="hero-caption">
                <h2 className="title">{video.name}</h2>
                <p className='description'>{video.description}</p>
                <div className="hero-btn">
                  <button className="btn" onClick={() => handleWatchNow(video)}>
                    <img src={playicon} alt="Play" /> Watch Now
                  </button>
                  <button className="btn dark-btn">
                    <img src={infoicon} alt="Info" />
                  </button>
                </div>
              </div>
              <div className="image-container">
                <img src={video.image} alt={video.name} className="slide-image" />
                <div className="fade-overlay"></div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
