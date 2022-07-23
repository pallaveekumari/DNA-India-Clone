import React from 'react'
import Footer  from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import { Box,Flex,Image,Text} from '@chakra-ui/react';

import {useContext} from "react"

import { AppContext } from '../Components/AppContext';

import { useNavigate } from 'react-router-dom';
import Rightsidebar from '../Components/Rightsidebar';
 
const Latestnews = () => {

//  const [data,setData]= useState([])

//   useEffect(()=>{
//     axios.get("https://dnaindia.herokuapp.com/latest-news")
//     .then(res=>setData(res.data))
//   })

const navigate=useNavigate()
const {handleAddDescriptionData,latestdata}=useContext(AppContext);
const handleDesc=(data)=>{
  handleAddDescriptionData(data);
  navigate("/Description");
}

  return (
    <>
<Navbar/>
<Box width="90%" height="50px"boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;" margin="auto" mt="20px">
  <Box h="20px" w="50px"  fontSize="15px" fontWeight="medium"  _hover={{color:"blue.700" , cursor:"pointer"}}>Home</Box>
  <Box h="40px" w="200px" fontSize="25px" fontWeight="bold"  ml="-30px">Latest News</Box>
  </Box>
<Flex gap="10px" >
  <Sidebar/>
  
 <Box width="50%">
            {
              latestdata.map(el=>(
             
              <Box width="100%"   boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;" mt="10px" _hover={{color:"blue.700" , cursor:"pointer"}}>
                <Box width="100%" p="10px" onClick={()=>handleDesc(el)}>
                  <Flex gap="1rem">
                    <Box height="87px" w="25%" >
                      <Image w="100%" h="100%"src={el.imgUrl}/>
                    </Box>
                    <Box  width="70%" >
                       <Text>
                        {el.title}
                       </Text>
                    </Box>
                  </Flex>
                </Box>
                </Box>
                
              ))
            }
      </Box>
      <Rightsidebar/>
      </Flex>
      <Footer/>
    </>
  )
   
}

export default Latestnews;
