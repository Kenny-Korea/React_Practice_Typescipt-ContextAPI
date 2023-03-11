import React from "react";
import StoreItem from "../component/StoreItem";
import { useShoppingCart } from "../context/CartContext";
import storeItems from "../data/item.json";

const Store = () => {
  const { checkCartItems } = useShoppingCart();
  return (
    <>
      <h1 onClick={checkCartItems}>Store</h1>
      {storeItems.map((item) => (
        <StoreItem {...item} key={item.id} />
      ))}
    </>
  );
};

export default Store;
