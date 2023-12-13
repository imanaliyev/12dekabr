import React, { useContext, useState } from "react";
import { BasketContext } from "../Context/BasketContext";
import WishlistProvider, { wishlistcontext } from "../Context/WishlistContext";
import Modal from "../components/Modal";

function Home() {
  const {
    basket,
    products,
    addBasket,
    removeBasket,
    increase,
    decrease,
    totalPrice,
  } = useContext(BasketContext);
  const { wishlist, addWishlist } = useContext(wishlistcontext);
  const [category, setCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCategory = (category) => {
    setCategory(category);
  };

  const filteredProducts =
    category === "all"
      ? products
      : products.filter((item) => item.category === category);
  const close = () => {
    document.querySelector(".aside-basket").classList.remove("active");
  };
  const closeWishlist = () => {
    document.querySelector(".aside-wishlist").classList.remove("active");
  };

  const handleQuickView = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  
  return (
    <>
      {isModalOpen && (
        <Modal product={selectedProduct} closeModal={closeModal} />
      )}
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
              <li onClick={() => handleCategory("all")}>All products</li>
              <li onClick={() => handleCategory("Womens")}>Women</li>
              <li onClick={() => handleCategory("Mens")}>Men</li>
              <li onClick={() => handleCategory("Kids")}>Kids</li>
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
          {filteredProducts.map((x) => (
            <ul>
              <img src={x.thumbnail} />
              <li>{x.name}</li>
              <li>{x.price} $</li>
              <button onClick={() => handleQuickView(x)} className="button">
                Quick View
              </button>
              <i
                onClick={() => addWishlist(x)}
                id={`a${x.id}`}
                className="fa-solid fa-heart "
              ></i>
              <i
                onClick={() => addBasket(x)}
                class="fa-solid fa-cart-shopping"
              ></i>
            </ul>
          ))}

          <div className="aside-basket">
            <i onClick={close} className="fa-solid fa-circle-xmark"></i>

            <div className="basket-products">
              {basket.map((x) => (
                <ul>
                  <div>
                    <img src={x.thumbnail} />
                    <li>{x.name.slice(0, 50)}</li>
                    <li className="price">{x.price} $</li>
                    <li className="price">count: {x.count}</li>
                  </div>
                  <div>
                    <button onClick={() => removeBasket(x)}>remove</button>
                    <button onClick={() => increase(x)}>+</button>
                    <button onClick={() => decrease(x)}>-</button>
                  </div>
                </ul>
              ))}
              <div className="totalPrice">{totalPrice}$</div>
            </div>
          </div>

          <div className="aside-wishlist">
            <i onClick={closeWishlist} className="fa-solid fa-circle-xmark"></i>

            <div className="wishlist-products">
              {wishlist.map((x) => (
                <ul>
                  <div>
                    <img src={x.thumbnail} />
                    <li>{x.name.slice(0, 50)}</li>
                    <li className="price">{x.price} $</li>
                  </div>
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
