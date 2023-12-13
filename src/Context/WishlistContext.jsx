import React, { Children, createContext, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'


export const wishlistcontext = createContext()

function WishlistProvider( {children}) {
    
    const [wishlist, setWishlist] = useLocalStorage("wishlist",[])

    const addWishlist=(item)=>{
        const index = wishlist.findIndex(x=> x.id === item.id)
        if (index === -1 ) {
            setWishlist([...wishlist,item])
            document.querySelector(`#a${item.id}`).classList.add("red")
          

          
           
            
            
           
            

            
        }
        else{
            document.querySelector(`#a${item.id}`).classList.remove("red")
            setWishlist(wishlist.filter(x=> x.id !== item.id))
        }
         

    }







    const data={
        wishlist,addWishlist

    }
  return (
    <>
    <wishlistcontext.Provider value={data}>
        {children}
    </wishlistcontext.Provider>
    
    </>
  )
}

export default WishlistProvider