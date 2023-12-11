import React, { useContext } from "react";
import { BasketContext } from "../Context/BasketContext";

function Home() {
  const { basket,products,addBasket } = useContext(BasketContext);

  console.log(basket);

  const close =()=>{
    document.querySelector(".aside-basket").classList.remove("active")
  }
  return (
    <>
      <section id="cards">
        <div className="card">
          <img src="https://preview.colorlib.com/theme/cozastore/images/banner-01.jpg.webp" />
          <div className="txt">
            <h3>Women</h3>
            <p>Spring 2018</p>
          </div>
          <div className="hover">
            <p>
              Shop now <div className="line"></div>
            </p>
          </div>
        </div>
        <div className="card">
          <img src="https://preview.colorlib.com/theme/cozastore/images/banner-02.jpg.webp" />
          <div className="txt">
            <h3>Men</h3>
            <p>Spring 2018</p>
          </div>
          <div className="hover">
            <p>
              Shop now <div className="line"></div>
            </p>
          </div>
        </div>
        <div className="card">
          <img src="https://preview.colorlib.com/theme/cozastore/images/banner-03.jpg.webp" />
          <div className="txt">
            <h3>Accessories</h3>
            <p>Spring 2018</p>
          </div>
          <div className="hover">
            <p>
              Shop now <div className="line"></div>
            </p>
          </div>
        </div>
      </section>
      <section id="products">
        <div className="products_header">
          <div className="left">
            <h2>PRODUCT OVERVIEW</h2>
            <ul>
              <li>All products</li>
              <li>Women</li>
              <li>Men</li>
              <li>Bag</li>
              <li>Shoes</li>
              <li>Watches</li>
            </ul>
          </div>
          <div className="right">
            <button className="filter">
              <i class="fa-solid fa-arrow-down-wide-short"></i>
            </button>
            <button className="search">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>

        <div className="products">
          {products.map((x) => (
            <ul>
              <img src={x.thumbnail} />
              <li>{x.name}</li>
              <li>{x.price} $</li>
              <button>Quick View</button>
              <i class="fa-solid fa-heart"></i>
              <i onClick={()=> addBasket(x)} class="fa-solid fa-cart-shopping"></i>
            </ul>
          ))}

          <div className="aside-basket">
          <i onClick={close} class="fa-solid fa-circle-xmark"></i>

          <div className="basket-products">
            {basket.map(x=>(
                <ul>
                    <img src={x.thumbnail} />
                    <li>{x.name.slice(0,50)}</li>
                    <li className="price">{x.price} $</li>
                    <li>{x.count}</li>
                </ul>
            ))}
          </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
