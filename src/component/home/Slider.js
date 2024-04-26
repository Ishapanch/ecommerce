import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../home/Slider.css'

export default function Slider() {

    const slider_responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          slidesToSlide: 4 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 768 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 767, min: 464 },
          items: 2,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

      const sliderImageUrl = [
        {
            url:'https://cb2.scene7.com/is/image/CB2/032124_Art_Tile?wid=536&qlt=75'
        },
        {
            url:'https://cb2.scene7.com/is/image/CB2/032124_Dining_Tile?wid=536&qlt=75'
        },
        {
            url:'https://cb2.scene7.com/is/image/CB2/032124_Living_Tile?wid=536&qlt=75'
        },
        {
            url:'https://cb2.scene7.com/is/image/CB2/032124_Outdoor_Tile?wid=536&qlt=75'
        }
    ];
  return (
    <div>
      <div className="parent">
        <Carousel
          responsive={slider_responsive}
          autoPlay={true}
          swipeable={true}
          draggable={true}
          showDots={true}
          infinite={true}
          partialVisible={false}
          dotListClass="custom-dot-list-style"
        >
          {sliderImageUrl.map((imageUrl, index) => {
            return (
              <div className="slider" key={index}>
                <img src={imageUrl.url} alt="movie" />
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}