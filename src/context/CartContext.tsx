import { createContext, ReactNode, useContext, useState } from "react";

type ItemContextProviderProp = {
  children: ReactNode;
};

type CartItem = {
  id: number;
  quantity: number;
};

type ItemContext = {
  checkCartItems: () => void;
  getItemQuantity: (id: number) => number;
  increaseItemQuantity: (id: number) => void;
  decreaseItemQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
};

const ItemContext = createContext({} as ItemContext);

export const useShoppingCart = () => {
  return useContext(ItemContext);
};

export const ItemContextProvider = ({ children }: ItemContextProviderProp) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function checkCartItems() {
    console.log(cartItems);
  }

  function getItemQuantity(id: number) {
    return cartItems.find((item) => id === item.id)?.quantity || 0;
  }

  function increaseItemQuantity(id: number) {
    const prevQuantity = cartItems.find((item) => item.id === id)?.quantity;
    // 장바구니에 담긴 이력이 없으면
    if (!prevQuantity) {
      setCartItems((items) => [...items, { id: id, quantity: 1 }]);
    } else {
      // 장바구니에 담긴 이력이 있으면
      setCartItems(
        cartItems.map((item) => {
          if (item.id === id) {
            return { id: id, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        })
      );
    }
  }

  function decreaseItemQuantity(id: number) {
    const prevQuantity = cartItems.find((item) => item.id === id)?.quantity;
    if (!prevQuantity) return;
    if (prevQuantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== id));
      return;
    }
    setCartItems(
      cartItems.map((item) => {
        if (item.id === id) {
          return { id: id, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      })
    );
  }

  function removeFromCart(id: number) {
    setCartItems(cartItems.filter((item) => item.id !== id));
  }

  return (
    <ItemContext.Provider
      value={{
        checkCartItems,
        getItemQuantity,
        increaseItemQuantity,
        decreaseItemQuantity,
        removeFromCart,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};
