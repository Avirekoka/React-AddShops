const initialState = [];

export const Shop = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_SHOP":
      return [...state, action.payload];
    case "DELETE_SHOP":
      return state.filter((shop) => shop.id !== action.payload);
    default:
      return state;
  }
};
