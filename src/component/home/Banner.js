import React from 'react'
import banner from "../../assets/images/banner/banner.jfif"
import '../home/Banner.css'

export default function Banner() {
  return (
    <div>
      <div>
        <div className="banner-img">
          <img src={banner} className="w-100"></img>
        </div>

        <div className="banner-text">
          <h3>UP TO 30% OFF OUTDOOR</h3>
          <h6>GET SET FOR SUMMER</h6>
        </div>

        <div className="banner-btn">
          <div className="btn-one">
            <a href="/" className="btn btn-primary">
              SHOP THE SALE
            </a>
          </div>
          <div className="btn-one">
            <a href="/" className="btn btn-primary">
              SHOP OUTDOOR
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
