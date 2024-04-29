import React from 'react'
import Banner from './Banner'
import Slider from './Slider'
import Limited from './Limited'
import Popular from './Popular'
import ShopOutdoor from './ShopOutdoor'

export default function Home() {
  return (
    <>
      <Banner />
      <Slider/>
      <Limited />
      <Popular />
      <ShopOutdoor />
    </>
  )
}
