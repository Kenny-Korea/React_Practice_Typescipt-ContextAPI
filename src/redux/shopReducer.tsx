// action = {
//   type: string,
//   payload: string | number
// }

type CartList = {
  id: number;
  quantity: number;
};

interface Action {
  type: string;
  payload: number | string;
}

// action type 정의

enum ActionType {
  GET_ITEM = "GET_ITEM",
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
}

// action 함수 생성
export const getItemQuantity = (id: number) => ({
  type: ActionType.GET_ITEM,
  payload: id,
});

export const increaseQuantity = (id: number) => ({
  type: ActionType.INCREMENT,
  payload: id,
});

export const decreaseQuantity = (id: number) => ({
  type: ActionType.DECREMENT,
  payload: id,
});

// reducer 생성

const initialState: CartList[] = [];

export const shopReducer = (
  state: CartList[] = initialState,
  action: Action
) => {
  const currQuantity =
    state.find((item) => item.id === action.payload)?.quantity || 0;

  switch (action.type) {
    case ActionType.GET_ITEM:
      return state;
    // return state.find((item) => action.payload === item.id)?.quantity;
    //  state.find((item) => action.payload === item.id)?.quantity;

    case ActionType.INCREMENT:
      // 장바구니에 담긴 이력이 없으면
      if (!currQuantity) {
        return [...state, { id: action.payload, quantity: 1 }];
      } else {
        // 장바구니에 담긴 이력이 있으면
        return state.map((item) => {
          if (item.id === action.payload) {
            return { id: action.payload, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }

    case ActionType.DECREMENT:
      if (!currQuantity) return;
      if (currQuantity === 1) {
        return state.filter((item) => item.id !== action.payload);
      }
      return state.map((item) => {
        if (item.id === action.payload) {
          return { id: action.payload, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });

    default:
      return state;
  }
};
