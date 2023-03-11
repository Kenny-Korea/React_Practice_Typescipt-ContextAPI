import { useShoppingCart } from "../context/CartContext";
import { StoreItemProps } from "./StoreItem";

const Counter = (props: StoreItemProps) => {
  const {
    getItemQuantity,
    increaseItemQuantity,
    decreaseItemQuantity,
    removeFromCart,
  } = useShoppingCart();

  return (
    <>
      <div className="flex">
        <div
          className="counterButton"
          onClick={() => {
            decreaseItemQuantity(props.id);
          }}
        >
          -
        </div>
        <div className="w-40 centerItem">{getItemQuantity(props.id)}</div>
        <div
          className="counterButton"
          onClick={() => {
            increaseItemQuantity(props.id);
          }}
        >
          +
        </div>
        <div
          onClick={() => {
            removeFromCart(props.id);
          }}
        >
          remove
        </div>
      </div>
    </>
  );
};

export default Counter;
