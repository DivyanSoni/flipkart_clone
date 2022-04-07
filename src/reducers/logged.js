import React from 'react'
const initialstate = {
    lflag: false,
    loggedUser:{}
}
 const Log = (state=initialstate,action) => {
    switch (action.type) {
      case "SETFLAG":
        return { ...state, lflag: true };
      case "RESETFLAG":
            return { ...state, lflag: false };
        case "LOGGEDUSER":
           return {...state,loggedUser:action.payload} 
        default:
            return state;
    }
 }
export default Log;
