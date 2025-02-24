import React, { useState } from 'react'
import nv from './navbar.module.css'
import { Search, User } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { Menu } from 'lucide-react';
function Navbar() {
  const [navM ,setnavM] = useState(false);
  
  return (
    <>
        <div className={nv.navbar}>
        <div className={nv.logo}></div>
        <div className={nv.menu}>
            <a>Men</a>
            <a>Women</a>
            <a>Kids</a>
            <a>Sale</a>
        </div>
        <div className={nv.menuItem}>
        <input type='text' placeholder='Search' className={nv.search}/>
        <a href='#' className={nv.deco}>
        <Search  className={nv.item}/> 
        </a>
        <a href='#' className={nv.deco}>
        <User className={nv.item}/> 
        </a>
        <a href='#' className={nv.deco}>
        <ShoppingCart className={nv.item}/>
        </a>
        
        
        </div>
        <a href='#' onClick={()=>setnavM(!navM)}  className={nv.deco}>
        <Menu  className={nv.menuMobile}/>
        </a>
        
        
        </div>
        
        <div className={navM ? nv.menuMobileVeiw :nv.menuMobileVeiwHidden}>
            <a>Men</a>
            <a>Women</a>
            <a>Kids</a>
            <a>Sale</a>
        </div>
    </>
  )
}

export default Navbar
