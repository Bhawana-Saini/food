// import { Link } from "react-router-dom";



// const Cart = ()=>{
//     return(
//         <><br />
//         <div className="cart">
//     <div className="cart-img"></div>
//     <div className="c1">Your Cart is Empty</div>
//     <p>You can go to home page to view more restaurants</p>
//     <button><Link to="/See Restraunts">See Restraunts</Link></button>
//     </div>
//     <br />
//     <div className="cart" id="cart">
//         <div className="title">Cart</div>
//         <div id="title"></div>
//     </div>
//         </>
//     )
// }
// export default Cart;
import React, { createContext, useReducer, useEffect } from "react";
import "./cart.css";
import { products } from "./products";
import ContextCart from "./ContextCart";
import { reducer } from "./reducer";

export const CartContext = createContext();

const initialState = {
  item: products,
  totalAmount: 0,
  totalItem: 0,
};

const Cart = () => {
  // const [item, setItem] = useState(products);
  const [state, dispatch] = useReducer(reducer, initialState);

  // to delete the indv. elements from an Item Cart
  const removeItem = (id) => {
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };

  // clear the cart
  const clearCart = () => {
    return dispatch({ type: "CLEAR_CART" });
  };

  // increment the item
  const increment = (id) => {
    return dispatch({
      type: "INCREMENT",
      payload: id,
    });
  };

  // decrement the item
  const decrement = (id) => {
    return dispatch({
      type: "DECREMENT",
      payload: id,
    });
  };

  // we will use the useEffect to update the data
  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
    // console.log("Awesome");
  }, [state.item]);

  return (
    <CartContext.Provider
      value={{ ...state, removeItem, clearCart, increment, decrement }}>
      <ContextCart />
    </CartContext.Provider>
  );
};

export default Cart;