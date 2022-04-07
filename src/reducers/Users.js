import React from "react";

const initialstate = {
  loginData: [],
};
const Users = (state = { ...initialstate }, action) => {
  switch (action.type) {
    case "ADD_USER":
      //     let users = state.Users;
      console.log("state in users", state);
      // users.push(action.payload);
      let data = action.payload;
      console.log("action.payload", action.payload, data);
      return {
        ...state,
        loginData: [...state.loginData, action.payload],
      };
    default:
      return { ...state };
  }
  console.log("state in users after switch", state);
};

export default Users;
