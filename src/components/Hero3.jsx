import React from 'react'
import h3v from './hero3.module.css'
function Hero3() {
  return (
    <>
    <div className={h3v.parent}>
    <div className={h3v.heading}>
    <h1>SHOP BY CATEGORIES FABULOUS</h1>
    <p>Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius claritas est etiam processus dynamicus, qui sequitur mutationem.</p>
    </div>
    <div className={h3v.photos}>
    <div className={h3v.div1}>
    <h1>Kids</h1>
        <div className={h3v.category1}></div>
        <button className={h3v.cbutton}>Show More</button>
    </div>
    <div className={h3v.div2}>
    <h1>Kids</h1>
        <div className={h3v.category2}></div>
        <button className={h3v.cbutton}>Show More</button>
    </div>
    <div className={h3v.div3}>
    <h1>Kids</h1>
        <div className={h3v.category3}></div>
        <button className={h3v.cbutton}>Show More</button>
        </div>
    </div>
   
</div>
      
    </>
  )
}

export default Hero3
