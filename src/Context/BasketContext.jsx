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
    const [totalPrice, setTotalPrice] = useLocalStorage("totalPrice",(0));
console.log(totalPrice);
    const addBasket =(item)=>{
        let index = basket.findIndex(x=> x.id === item.id)
        if (index === -1) {

            setBasket([...basket,{...item,count:1}]);
            setTotalPrice(Number((totalPrice + item.price).toFixed(2)));
            return

        }
        
        setBasket([...basket])
    

    }
    const removeBasket=(item)=>{
      const itemToRemove = basket.find((x) => x.id === item.id);
        if (!itemToRemove) {
            return 
        }
        const updatedBasket = basket.filter((x) => x.id !== item.id);
        const reductionAmount = itemToRemove.price * itemToRemove.count;
        setBasket(updatedBasket);
        setTotalPrice(Number((totalPrice - reductionAmount).toFixed(2)));
     
    }

    const increase=(item)=>{
      let index = basket.findIndex(x=> x.id === item.id)
      setTotalPrice(Number((totalPrice + item.price).toFixed(2)));

      basket[index].count++
      setBasket([...basket])
    }
    const decrease=(item)=>{
      let index = basket.findIndex(x=> x.id === item.id)
     
      

      if (basket[index].count>0) {
        basket[index].count--
        setTotalPrice(Number((totalPrice - item.price).toFixed(2)));
        
      }
    
      setBasket([...basket])
    }








    const data ={
        basket,products,addBasket,removeBasket,increase,decrease,totalPrice

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