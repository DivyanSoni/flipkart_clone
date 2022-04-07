export const increment = (num) => {
  return {
    type: "INCREMENT",
    payload: num,
  };
};
export const setValue = (num) => {
  return {
    type: "SET_VALUE",
    payload: num,
  };
};
export const decrement = () => {
  return {
    type: "DECREMENT",
    // payload: num
  };
};
export const addToCart = (newItem) => {
  return {
    type: "ADD_TO_CART",
    payload: newItem,
  };
};

export const DetailViewer = (detail) => {
  return {
    type: "Detail_Viewer",
    payload: detail,
  };
};
export const AddUser = (user) => {
  console.log(user, "check datata acacacaca");
  return {
    type: "ADD_USER",
    payload: user,
  };
};
export const setFlag = () => {
  return {
    type: "SETFLAG",
    // payload: num
  };
};
export const resetFlag = () => {
  return {
    type: "RESETFLAG",
    // payload: num
  };
};
export const logUser = (userdata) => {
  return {
    type: "LOGGEDUSER",
    payload: userdata,
  };
};
