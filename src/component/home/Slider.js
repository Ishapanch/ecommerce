import React from "react";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../home/Slider.css";
import { FaPlay, FaPause } from "react-icons/fa";

export default function Slider({ slider}) {
  const slider_responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
      slidestoShow: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 767, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  // const sliderImageUrl = [
  //   {
  //     url: "https://cb2.scene7.com/is/image/CB2/032124_Art_Tile?wid=536&qlt=75",
  //     name: "Art",
  //   },
  //   {
  //     url: "https://cb2.scene7.com/is/image/CB2/032124_Dining_Tile?wid=536&qlt=75",
  //     name: "Dining Room"
  //   },
  //   {
  //     url: "https://cb2.scene7.com/is/image/CB2/032124_Living_Tile?wid=536&qlt=75",
  //     name: "Living Room"
  //   },
  //   {
  //     url: "https://cb2.scene7.com/is/image/CB2/032124_Outdoor_Tile?wid=536&qlt=75",
  //     name: "Outdoor"
  //   },
  // ];

  const [isautoplay, setautoplay] = useState(true);

  const playPause = () => {
    setautoplay(!isautoplay);
  };
  return (
    <div className="padding-sec grey-sec">
      <div className="parent">
        <div className="section-title">
          <h3>{slider.titleName}</h3>
          {/* <h3>FOR EVERY SPACE</h3> */}
        </div>
        <Carousel
          responsive={slider_responsive}
          autoPlay={isautoplay}
          swipeable={true}
          draggable={true}
          showDots={true}
          infinite={true}
          partialVisible={false}
          dotListClass="custom-dot-list-style"
        >
          {slider.images.map((imageUrl, index) => {
            return (
              <div className="slider" key={index}>
                <img src={imageUrl.url} alt="slider" />
                <h6 className="slider-text">{imageUrl.name}</h6>
              </div>
            );
          })}

        </Carousel>

        <button className="play-pause" onClick={playPause}>
          {isautoplay ? <FaPause /> : <FaPlay />}
        </button>
      </div>
    </div>
  );
}
