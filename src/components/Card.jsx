import React from "react";
import cv from "./card.module.css";
import cd1 from "../assets/mobilecart1.png"
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
        <img src={cd1} height='260px' />
          <p className={cv.heading}>Men's Shoes</p>
          <p> 12999₹</p>
          <button>Buy Now</button>
        </div>
        <div className={cv.card}>
        <img src={cd1} height='260px' />
          <p className={cv.heading}>Men's Shoes</p>
          <p> 12999₹</p>
          <button>Buy Now</button>
        </div>
        <div className={cv.card}>
        <img src={cd1} height='260px' />
          <p className={cv.heading}>Men's Shoes</p>
          <p> 12999₹</p>
          <button>Buy Now</button>
        </div>
        <div className={cv.card}>
        <img src={cd1} height='260px' />
          <p className={cv.heading}>Men's Shoes</p>
          <p> 12999₹</p>
          <button>Buy Now</button>
        </div>
        <div className={cv.card}>
        <img src={cd1} height='260px' />
          <p className={cv.heading}>Men's Shoes</p>
          <p> 12999₹</p>
          <button>Buy Now</button>
        </div>
      </div>
      </div>
      
    </>
  );
}

export default Card;
