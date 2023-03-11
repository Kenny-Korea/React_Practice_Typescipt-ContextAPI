import React from "react";
import Counter from "./Counter";
import ReduxCounter from "./ReduxCounter";

export type ShopItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const ShopItem = (props: ShopItemProps) => {
  let quantity = 0;

  return (
    <>
      <div className="w-[20rem] h-[15rem] m-2 bg-slate-50 flex flex-col gap-2">
        <img src={props.imgUrl} alt="" className="w-full h-40 object-cover" />
        <div className="flex justify-between">
          <h1>{props.name}</h1>
          <h1>{props.price}</h1>
        </div>
        <div className="centerItem">
          <ReduxCounter {...props} />
        </div>
      </div>
    </>
  );
};

export default ShopItem;
