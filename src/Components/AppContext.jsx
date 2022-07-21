import { createContext,useState } from "react";

export const AppContext=createContext()



export default function AppContextProvider({children})
{

    const [descData,setDescData] = useState({});

const handleAddDescriptionData=(data)=>{
   setDescData({data})
}

console.log(descData)

    return (
        <AppContext.Provider value={{descData,handleAddDescriptionData}}>
            {children}
        </AppContext.Provider>
    )
}