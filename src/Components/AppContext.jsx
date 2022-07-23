import axios from "axios";
import { createContext,useState,useEffect } from "react";

export const AppContext=createContext()



export default function AppContextProvider({children})
{

    const [descData,setDescData] = useState({});


    const  [homedata,sethomeData] =useState([])
    const[latestdata,setlatestData] =useState([])

    useEffect(()=>{
            axios.get("https://dnaindia.herokuapp.com/home-page")
            .then(res=>sethomeData(res.data))
          },[])

    
    useEffect(()=>{
            axios.get("https://dnaindia.herokuapp.com/latest-news")
            .then(res=>setlatestData(res.data))
          },[])


    const handlesearch=(query)=>{
       axios({
        url:"https://dnaindia.herokuapp.com/home-page",
        params:{
            q:query
        }
       }).then(res=>sethomeData(res.data))
    }
const handleAddDescriptionData=(data)=>{
   setDescData({data})
}

console.log(descData)

    return (
        <AppContext.Provider value={{descData,handleAddDescriptionData,homedata,latestdata,handlesearch}}>
            {children}
        </AppContext.Provider>
    )
}