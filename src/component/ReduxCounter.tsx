import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getItemQuantity, increaseQuantity } from "../redux/shopReducer";
import { RootState } from "../redux/store";
import { ShopItemProps } from "./ShopItem";

const ReduxCounter = (props: ShopItemProps) => {
  const dispatch = useDispatch();
  // useSelector는 reducer의 state 값을 가져오기 위해 사용
  const state = useSelector((state: RootState) => state.shop);

  const handleCurrentItem = (id: number) => {
    const amount = state.find((item) => item.id === id)?.quantity || 0;
    return amount;
  };

  const onClickIncrement = (id: number) => {
    dispatch(increaseQuantity(id));
  };
  handleCurrentItem(props.id);
  return (
    <>
      <div className="flex">
        {/* {test(props.id) ? test(props.id) : 0} */}
        <div className="counterButton">-</div>
        <div className="w-40 centerItem">{handleCurrentItem(props.id)}</div>
        <div
          className="counterButton"
          onClick={() => {
            onClickIncrement(props.id);
          }}
        >
          +
        </div>
        <div>remove</div>
      </div>
    </>
  );
};

export default ReduxCounter;
