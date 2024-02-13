const initialState = {
  quotes: [],
};

const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_QUOTES":
      return {
        ...state,
        quotes: action.payload,
      };
    default:
      return state;
  }
};

export default quoteReducer;
