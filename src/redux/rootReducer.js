import { ADD_PRODUCT } from "./actionTypes";

const initialState = {
  list: [],
  allWeight: 0,
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_PRODUCT: {
      return {
        ...state,
        list: [...state.list, ...payload],
        allWeight: payload.reduce((total, currentValue) => {
            return total + Number(currentValue.weight);
          }, state.allWeight)
      };
    }
    default:
      return state;
  }
}
