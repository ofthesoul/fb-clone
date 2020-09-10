export const initialState = {
  user: null,
}; //initial state of data layer

export const actionTypes = {
  SET_USER: "SET_USER",
}; //an action to use if the data is there

const reducer = (state, action) => {
  //if you receive in action, return the data layer but with the new user data
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};
export default reducer;
