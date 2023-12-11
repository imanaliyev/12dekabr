import React, { createContext, useEffect, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage';

export const BasketContext = createContext();


function BasketProvider({children}) {
    useEffect(() => {
      fetch("https://6573ac96f941bda3f2af125e.mockapi.io/juan-store/api/v1/products")
      .then(res=> res.json())
      .then(data=>
        setProducts(data))
    
   
    }, [])
    
    const [products, setProducts] = useState([])
    const [basket, setBasket] = useLocalStorage("basket",[])

    const addBasket =(item)=>{
        let index = basket.findIndex(x=> x.id === item.id)
        if (index === -1) {

            setBasket([...basket,{...item,count:1}]);
            
        }
        else{
            alert("product has already added to basket")
        
        }

    }








    const data ={
        basket,products,addBasket

    }
  return (
    <>
     <BasketContext.Provider value={data}>
      {children}
    </BasketContext.Provider>


    </>
  )
}

export default BasketProvider