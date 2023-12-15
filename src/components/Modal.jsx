import React from "react";
import "../assets/modal.scss";
import { Carousel } from 'react-carousel-minimal';



function Modal({ product, closeModal }) {
  const data = [
    {
      image: product.images[0],
     
    
    },
    {
      image: product.images[1] ? product.images[1] : product.images[0],
     
    },
    {
      image: product.images[2]? product.images[2] :  product.images[1],
       
      },]

 

  return (
    <div className="all">
      <div onClick={closeModal} className="modal-overlay"></div>

      <div className="modal-content">

        <div className="images">

          <img src={product.images[0]}/>
          <img src={product.images[1] ? product.images[1]: "" } />
          <img src={product.images[2] ? product.images[2]:""} />
        </div>
        <div className="carusel">
        <Carousel
            data={data}
            width="100%"
            height="800px"
            automatic={false}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
           
           
            
          />
        </div>
        <div className="info">
          <p className="name">{product.name}</p>
          <p className="price">{product.price} $</p>
          <p className="info-txt">{product.description.text}</p>
      <div className="select">
      <div className="size">
            <p>size</p>
            <select  id="size">
              
              <option value="">36</option>
              <option value="">37</option>
              <option value="">38</option>
              <option value="">39</option>
              <option value="">40</option>
              <option value="">41</option>
              <option value="">42</option>
              <option value="">43</option>
             
            
            </select>
            
      </div>
      <div className="color">
              <p>color</p>
            <select   id="color" >
              
              <option value="">red</option>
                <option value="">blue</option>
                <option value="">grey</option>
                <option value="">white</option>
             
               
              </select>
            </div>
            
          </div>
          <div className="add-cart">
            <div className="inc-dec">
              <button>+</button>
              <div>0</div>
              <button>-</button>


            </div>
            <div className="add">
              
            </div>

          </div>


        </div>
      
      </div>
    </div>
  );
}

export default Modal;
