const initialState = {
  unknown: "undefined",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "undefined":
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default rootReducer;
