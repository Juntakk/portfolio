const themeReducer = (state, action) => {
  //For primary colors
  if (action.type === "color-1") {
    return { ...state, primary: "color-1" };
  }
  if (action.type === "color-2") {
    return { ...state, primary: "color-2" };
  }
};

export default themeReducer;
