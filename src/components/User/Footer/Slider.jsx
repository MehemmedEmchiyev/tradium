// SliderItems.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

  const images = Array.from({length : 6} , (_,i) => i)


function SliderItems() {
      const path = '/images/'

  const settings = {
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 4 }
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 4 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2 }
      }
    ]
  }
  return (
    <div className="w-full px-4">
      <h2 className="text-lg font-semibold mb-4">@TRADIUMBAKU</h2>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="px-2 border-0 outline-0">
            <img
              src={path + `footer${index + 1 }.jpg`}
              alt={`slider-img-${index}`}
              className="w-full h-auto object-cover border-0 outline-0"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SliderItems;
