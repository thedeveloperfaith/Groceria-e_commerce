import React, { Children } from 'react'
import { AppContext } from './AppContext'

const AppProvider = ({children}) => {
  const initialValue = [];
  const cartReducer = (state , action)  => {
    switch (action.type) {
      case "ADD_TO_CART":
      return [... state, action.payload] ;
      break;

      default:
        break;
    }
  };

  const [cart, dispatch] = useReducer (cartReducer , initialValue);
  console.log(cart)
  return (
    <AppContext.Provider value={{ cart, dispatch}}>
        {Children}
    </AppContext.Provider>
  )
}

export default AppProvider
