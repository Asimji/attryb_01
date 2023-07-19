import React, { createContext } from 'react'
import { useState } from 'react'

export const StoreContext=createContext()

const Context = ({children}) => {
 
    const [data,setData]=useState([])
 
    return <StoreContext.Provider value={{data,setData}}>
        {children}
    </StoreContext.Provider>

}

export default Context
