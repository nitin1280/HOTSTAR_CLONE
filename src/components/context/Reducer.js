export const DataReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_LIST":
        return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
  
      case "REMOVE_TO_LIST":
        return {
          ...state,
          cart: state.cart.filter((item) => item._id !== action.payload._id),
        };
      default:
        return state;
    }
  };