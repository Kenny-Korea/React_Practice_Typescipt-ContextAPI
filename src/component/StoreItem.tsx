import React from "react";
import Counter from "./Counter";

export type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const StoreItem = (props: StoreItemProps) => {
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
          <Counter {...props} />
        </div>
      </div>
    </>
  );
};

export default StoreItem;
