import React from 'react'
import Banner from './Banner'
import Slider from './Slider'
import Limited from './Limited'
import Popular from './Popular'
import ShopOutdoor from './ShopOutdoor'
import MiddlleBanner from './MiddlleBanner'
import Footer from '../Footer'

export default function Home() {


  const sliderImageUrl ={
    titleName : "FOR EVERY SPACE" ,
    images : [
    {
      url: "https://cb2.scene7.com/is/image/CB2/032124_Art_Tile?wid=536&qlt=75",
      name: "Art",
    },
    {
      url: "https://cb2.scene7.com/is/image/CB2/032124_Dining_Tile?wid=536&qlt=75",
      name: "Dining Room"
    },
    {
      url: "https://cb2.scene7.com/is/image/CB2/032124_Living_Tile?wid=536&qlt=75",
      name: "Living Room"
    },
    {
      url: "https://cb2.scene7.com/is/image/CB2/032124_Outdoor_Tile?wid=536&qlt=75",
      name: "Outdoor"
    },
  ]};
  
  const sliderImageUrltwo ={
    titleName : "ON THE WANT LIST" ,
    images :  [
    {
      url: "https://cb2.scene7.com/is/image/CB2/TaikoODLoveseatWCshns3QSHS24/$web_pdp_main_carousel_md$/240509084905/TaikoODLoveseatWCshns3QSHS24.jpg",
      name: "TAIKO TEAK LOVESEAT",
    },
    {
      url: "https://cb2.scene7.com/is/image/CB2/Peyote20inBlkThrwPllwDASHS24/$web_pdp_main_carousel_md$/240215085310/peyote-black-alpaca-throw-pillow-20.jpg",
      name: "PEYOTE PILLOW"
    },
    {
      url: "https://cb2.scene7.com/is/image/CB2/CalandraPendantLightSmROS24/$web_pdp_main_carousel_md$/240215085315/calandra-glass-and-travertine-pendant-light-small.jpg",
      name: "CALANDRA PENDANT LIGHTS"
    },
    {
      url: "https://cb2.scene7.com/is/image/CB2/HepburnBrsTprCndlHldrS2SHS24/$web_pdp_main_carousel_md$/240215085317/hepburn-brass-taper-candle-holders.jpg",
      name: "HEPBURN TAPER HOLDER"
    },
  ]};


  return (
    <>
      <Banner />
      <Slider slider={sliderImageUrl}/>
      <Limited />
      <Popular />
      <ShopOutdoor />
      <MiddlleBanner />
      <Slider slider={sliderImageUrltwo}/>
      <Footer/>
    </>
  )
}
