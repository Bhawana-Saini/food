import React, { useContext } from "react";
import { CartContext } from "./Cart";
import { products } from "./products";

const Items = ({ id, description, title, img, price, quantity }) => {
  const { removeItem, increment, decrement } = useContext(CartContext);

  return (
    <>
      <div className="items-info">
        <div className="product-img">
          <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + img} alt="iamge" />
        </div>

        <div className="title">
          <h5>{title}</h5>
          <p>{description}</p>
        </div>

        <div className="add-minus-quantity">
         <h6><i className="fa fa-star " ></i>{quantity}</h6>
        </div>

        <div className="price">
          <p>{price}</p>
        </div>

        <div className="remove-item">
        <i class="fa fa-remove"
            onClick={() => removeItem(id)}></i>
        </div>
      </div>

      <hr />
    </>
  );
};

export default Items;