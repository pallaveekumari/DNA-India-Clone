import React from 'react'
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import { Box,Flex,Image,Text,Link} from '@chakra-ui/react';
import Footer from '../Components/Footer';
import {useState} from "react"
import { useEffect } from 'react';
import axios from "axios"
import { useContext } from 'react';
import { AppContext } from '../Components/AppContext';



const Homepage = () => {

  const [data,setData]= useState([])

  useEffect(()=>{
    axios.get("https://dnaindia.herokuapp.com/home-page")
    .then(res=>setData(res.data))
  })
  
  const {handleAddDescriptionData}=useContext(AppContext)
  return (
    <div>
      <Navbar/>
      <Box height="70px" width="80%" margin="auto" mt="20px" mr="75px">
        <img src="https://s0.2mdn.net/dfp/257985/4667917813/1658234033915/1000x60/1000x60-ZNAA-1.gif" alt="" />
      </Box>
      <Flex>
      <Sidebar/>

      <Box height="380px" width="50%">
        <img src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/20/2523866-yogi-adityanath-ani.jpg" alt=""/>
      
        <Box height="60px" width="100%" color="#4c4c4c" _hover={{color:"blue.700" , cursor:"pointer"}}>
            <Box  fontSize="20px" fontWeight="bold" boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset">Signs of trouble in UP? Dissent in rank grows in CM yogi Adityanath's second term</Box>
        </Box>
      </Box>
    
      </Flex>

      <Box width="50%" margin="auto" border="1px solid blue" mt="-75px">
            {
              data.map(el=>(
                <Link to="/Description" onClick={()=>handleAddDescriptionData(el)} >
                <Box width="100%" p="10px"  >
                  <Flex gap="1rem">
                    <Box height="87px" w="25%"  border="1px solid red">
                      <Image w="100%" h="100%"src={el.imgUrl}/>
                    </Box>
                    <Box  width="70%" border="1px solid blue">
                       <Text>
                        {el.title}
                       </Text>
                    </Box>
                  </Flex>
                </Box>
                </Link>
              ))
            }
      </Box>
   <Footer/>
    </div>
  )
}

export default Homepage;
