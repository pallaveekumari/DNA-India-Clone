import React from 'react'
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import {Flex,Box} from "@chakra-ui/react"
import { useContext } from 'react';
import { AppContext } from '../Components/AppContext';
import Footer from "../Components/Footer"
import { useNavigate } from 'react-router-dom';
const Description = () => {

  const {descData}=useContext(AppContext);
  const navigate = useNavigate();
  // console.log(`Data is ${JSON.parse(descData)}`)
  return (
    <>
    <Navbar/>
    <Flex>
    <Sidebar/>
    <Box height="750px" width="55%"  mt="20px">
    <Box  height="30px" width="20%"  _hover={{ color: "blue.700", cursor: "pointer" }} onClick={()=>navigate("/")} textDecoration="underline" fontSize="20px">Home </Box>
      <Box  width="100%"  fontSize="30px" fontWeight="bold" mt="20px">{descData.data.title}</Box>
       <Box  width="100%"  fontSize="15px" fontWeight="medium" mt="20px">{descData.data.subTitle}</Box>
      <Box height="20px" width="100%"  fontSize="12px" fontWeight="medium" mt="20px">Reported By:DNA Web Team| Edited By: DNA Web Team |Source: DNA webdesk |Updated: Jul 21, 2022, 09:59 AM IST</Box>
       <Box height="420px" width="100%"  mt="30px">
       <img src={descData.data.imgUrl} alt="" />     
      </Box>
      </Box>
      </Flex>
    <Box  width="55%"  margin="auto">
       <Box fontSize="20px" fontWeight="medium" color="#4c4c4c" textAlign="justify">
      {descData.data.description}
       </Box>
    </Box>

    <Footer/>
    </>
  )
}

export default Description;
