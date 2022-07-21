import React from 'react'
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import {Flex,Box} from "@chakra-ui/react"
import { useContext } from 'react';
import { AppContext } from '../Components/AppContext';
const Description = () => {

  const {descData}=useContext(AppContext)
  return (
    <>
    <Navbar/>
    <Flex>
    <Sidebar/>
    <Box height="750px" width="55%" border="1px solid red" mt="20px">
    <Box  height="40px" width="20%" border="1px solid red" mt="20px">Home Bollywood</Box>
      <Box height="100px" width="100%" border="1px solid red" fontSize="30px" fontWeight="bold" mt="20px">{descData.title}</Box>
       <Box height="55px" width="100%" border="1px solid red" fontSize="15px" fontWeight="medium" mt="20px">{descData.subTitle}</Box>
      <Box height="20px" width="100%" border="1px solid red" fontSize="12px" fontWeight="medium" mt="20px">Reported By:DNA Web Team| Edited By: DNA Web Team |Source: DNA webdesk |Updated: Jul 21, 2022, 09:59 AM IST</Box>
       <Box height="420px" width="100%" border="1px solid blue" mt="30px">
       <img src={descData.imgUrl} alt="" />     
      </Box>
      </Box>
      </Flex>
    <Box height="1050px" width="55%" border="1px solid red" margin="auto" mr="258px"  mt="20px">
       <Box fontSize="20px" fontWeight="medium" color="#4c4c4c">
      {descData.description}
       </Box>
    </Box>
    </>
  )
}

export default Description;
