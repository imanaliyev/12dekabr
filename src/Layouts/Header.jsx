import React, { useContext } from 'react'

import { BasketContext } from '../Context/BasketContext';
import { wishlistcontext } from '../Context/WishlistContext';
import { Link } from 'react-router-dom';

function Header() {
    const {basket} = useContext(BasketContext)
    const {wishlist} = useContext(wishlistcontext)
  
      const openBasket =()=>{
        document.querySelector(".aside-basket").classList.toggle("active")
      }
      const openWishlist =()=>{
        document.querySelector(".aside-wishlist").classList.toggle("active")
      }
    
  return (
    <>
    <header>
       <div className="left">
       <img src="https://preview.colorlib.com/theme/cozastore/images/icons/logo-01.png.webp" alt="" />
       <ul>
        <Link to={"/"}><li>Home</li></Link>
        <Link to={"/shop"}><li>Shop</li></Link>
        <li>Features <sup>HOT</sup></li>
        <li>Blog</li>
        <li>About</li>
        <li>Contact</li>
       </ul>
       </div>
       <div className="right">
        
       <i class="fa-solid fa-magnifying-glass"></i>
       <i onClick={openBasket} class="fa-solid fa-cart-shopping"> <span>{basket.length}</span></i>
       <i onClick={openWishlist} class="fa-regular fa-heart"><span>{wishlist.length}</span></i>

       </div>

    </header>


        
      
     
     
     

    
    </>

  )
}

export default Header