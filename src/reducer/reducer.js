const initialState = {
  properties: [],
  lang: "en"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_STATE":
      return {
        ...state,
        properties: action.payload
      };
  }
  return state;
};

export default reducer;
