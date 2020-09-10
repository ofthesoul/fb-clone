import React, { createContext, useContext, useReducer } from "react";
//context api
export const StateContext = createContext();
//prepare data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
); //higher order componenent to wrap the app inside of this. data layer functionality

export const useStateValue = () => useContext(StateContext);
//used to pull from data layer
