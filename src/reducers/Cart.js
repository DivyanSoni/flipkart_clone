import React from 'react'

const initialstate = {
  items: [],
  quantity: 0,
  viewProduct:1
};
const Cart = (state = { ...initialstate }, action) => {
  switch (action.type) {
    case "ADD_ITEM":
          return { ...state, items: [...state?.items, action.payload],quantity: state.items.length};
    case "REMOVE_ITEM":
      let data = state.items;
      console.log("items datat",data)
      let res = data.filter((item) => {
        if (item !== action.payload) {
          return item;
          }
        })
      return { ...state, items: res };
    case "SET_VIEWPRODUCT":
      return { ...state, viewProduct: action.payload };
    default:
      return state;
  }
};
export default Cart;