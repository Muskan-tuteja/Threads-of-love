import { createContext } from "react";
import { rakhi_list } from "../assets/assests";
export const StoreContext = createContext(null)


const StoreContextProvider = (props) =>{


  const contextValue = {
rakhi_list

  }
  
  return(
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
    
  )

}
export default StoreContextProvider;