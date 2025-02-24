import React from "react";
import cv from "./card.module.css";
import cd1 from "../assets/mobilecart1.png"
import cd2  from "../assets/cd2.png"
import cd3  from "../assets/cd3.png"
import cd4  from "../assets/cd4.png"
import cd5  from "../assets/cd5.png"
import cd6  from "../assets/cd6.png"
import cd7  from "../assets/cd7.png"
function Card() {
  return (
    <>
      <div className={cv.hero2}>
      <div className={cv.card_section}>
        <div className={cv.card}>
        <img src={cd1} height='260px' />
          <p className={cv.heading}>Men's Shoes</p>
          <p> 12999₹</p>
          <button>Buy Now</button>
        </div>
        <div className={cv.card}>
        <img src={cd2} height='260px' />
          <p className={cv.heading}>Men's Shoes</p>
          <p> 10999₹</p>
          <button>Buy Now</button>
        </div>
        <div className={cv.card}>
        <img src={cd3} height='260px' />
          <p className={cv.heading}>Men's Shoes</p>
          <p> 1999₹</p>
          <button>Buy Now</button>
        </div>
        <div className={cv.card}>
        <img src={cd4} height='260px' />
          <p className={cv.heading}>Men's Shoes</p>
          <p> 18999₹</p>
          <button>Buy Now</button>
        </div>
        <div className={cv.card}>
        <img src={cd5} height='260px' />
          <p className={cv.heading}>Men's Shoes</p>
          <p> 1899₹</p>
          <button>Buy Now</button>
        </div>
        <div className={cv.card}>
        <img src={cd6} height='260px' />
          <p className={cv.heading}>Men's Shoes</p>
          <p> 1999₹</p>
          <button>Buy Now</button>
        </div>
        <div className={cv.card}>
        <img src={cd7} height='260px' />
          <p className={cv.heading}>Men's Shoes</p>
          <p> 11999₹</p>
          <button>Buy Now</button>
        </div>
      </div>
      </div>
      
    </>
  );
}

export default Card;
