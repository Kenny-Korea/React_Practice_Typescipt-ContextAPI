import React, { SyntheticEvent } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { routerItem } from "../utils/pageItems";

type Navigate = {
  handleNavigate: (e: React.MouseEvent<HTMLSpanElement>) => void;
};

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigate = (e: React.MouseEvent<HTMLSpanElement>) => {
    const target = e.target as HTMLSpanElement;
    // EventTarget에는 id 속성이 없으므로, 별도로 정의
    const dir = target.id;
    navigate(`${dir}`);
  };

  return (
    <>
      <div className="w-full h-16 bg-slate-100 flex justify-between items-center">
        <div className="w-80 flex justify-between text-red-600">
          {routerItem.map((item) => {
            return (
              <span
                id={item.path}
                onClick={handleNavigate}
                className="navbarElement"
                key={item.path}
              >
                {item.title}
              </span>
            );
          })}
        </div>
        <div className="w-12 h-12 flex justify-center items-center rounded-full bg-pink-300 text-white relative">
          cart
          <div className="w-5 h-5 absolute bottom-0 right-0 bg-red-500 text-white rounded-full text-xs flex justify-center items-center">
            0
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
