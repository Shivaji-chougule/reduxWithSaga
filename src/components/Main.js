import { useDispatch } from "react-redux";
import { addToCart, removeFromCart, emptyCart } from "../redux/action";
import { productList } from "../redux/productAction";
import { useSelector } from "react-redux/es/hooks/useSelector";
import "./Main.css";
import React, { useEffect } from "react";

function Main() {
  const ans = useSelector((state) => state.productStore);
  console.log("data in main component from saga", ans);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productList());
  }, [dispatch]);
  return (
    <div>
      <div className="product">Product</div>
      <div>
        <button
          onClick={() => {
            dispatch(emptyCart());
          }}
        >
        empty cart
        </button>
      </div>
      <div className="products">
        {ans.map((item) => (
          <div key={item.id} className="single-product">
            <img src={item.image} alt=""></img>
            <div className="details">
              <div>Name: {item.name}</div>
              <div>Color: {item.price}</div>
              <div>Price: {item.color}</div>
              <div>Category: {item.category}</div>

              <div className="buttons">
              <button
                onClick={() => {
                  dispatch(addToCart(item));
                }}
              >
                Add to cart
              </button>
              <button
                onClick={() => {
                  dispatch(removeFromCart(item.id));
                }}
              >
                Remove from cart
              </button>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
