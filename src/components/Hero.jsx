import React from 'react'
import hv from './hero.module.css'
function Hero() {
  return (
    <>
      <div className={hv.hero}>
        <div className={hv.hero_item_1}>
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES. YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU OUR SHOES.</p>
            <button>Shop Now</button>
        </div>
        <div className={hv.hero_item_2}></div>
      </div>
    </>
  )
}

export default Hero
