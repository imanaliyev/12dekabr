import React, { useContext } from 'react'
import { Carousel } from 'react-carousel-minimal';
import { BasketContext } from '../Context/BasketContext';
import { wishlistcontext } from '../Context/WishlistContext';

function Header() {
    const {basket} = useContext(BasketContext)
    const {wishlist} = useContext(wishlistcontext)
    const data = [
        {
          image: "https://preview.colorlib.com/theme/cozastore/images/slide-02.jpg.webp",
          caption:"<div class='txt'><h2 >Men's new collection</h2><h1>New Arrivval</h1> <button>Shop Now </button></div>"
        
        },
        {
          image: "https://preview.colorlib.com/theme/cozastore/images/slide-03.jpg.webp",
          caption:"<div class='txt'><h2 >Men's new collection</h2><h1>New Season</h1> <button>Shop Now </button></div>"
        },
        {
            image: "https://preview.colorlib.com/theme/cozastore/images/slide-01.jpg.webp",
            caption:"<div class='txt'><h2 >Womans's new collection</h2><h1>New Arrivval</h1> <button>Shop Now </button></div>"
          },

      ];
      const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
        

      }
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
        <li>Home</li>
        <li>Shop</li>
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


        
      
     <div className="carusel">
     <Carousel
            data={data}
            time={3500}
            width="100%"
            height="800px"
            automatic={true}
            captionStyle={captionStyle}
            
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
           
            
          />
     </div>
     
     

    
    </>

  )
}

export default Header