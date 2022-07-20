import React from 'react'
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import { Box,Flex} from '@chakra-ui/react';

const Homepage = () => {
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
   
    </div>
  )
}

export default Homepage;
