import React from "react";
import "../assets/modal.scss";

function Modal({ product, closeModal }) {
  return (
    <div className="all">
      <div onClick={closeModal} className="modal-overlay"></div>

      <div className="modal-content">
        <h2>Product Details</h2>
        <img src={product.thumbnail} alt="" />
        <p>Name: {product.name}</p>
        <p>Price: ${product.price}</p>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
}

export default Modal;
