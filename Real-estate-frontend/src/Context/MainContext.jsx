import { createContext, useContext, useState } from "react";


const mainContext = createContext({
    user:{
        name: '',
        email: '',
        id: '',
    }
})

export const useMainContext =()=> useContext(mainContext);

export const MainContextProvider = ({children})=>{

    const [user, setUser] = useState({
        name: '',
        email: '',
        id: '',
    })

    return <mainContext.Provider value={{user}}>
            {children}
    </mainContext.Provider>
}