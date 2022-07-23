import React from 'react'
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import { Box, Flex, Image, Text, Link } from '@chakra-ui/react';
import Footer from '../Components/Footer';

import { useContext } from 'react';
import { AppContext } from '../Components/AppContext';
import { useNavigate } from 'react-router-dom';
import Rightsidebar from '../Components/Rightsidebar';



const Homepage = () => {



  const { handleAddDescriptionData, homedata } = useContext(AppContext);

  const navigate = useNavigate();

  const handleDesc = (data) => {
    handleAddDescriptionData(data);
    navigate("/Description");
  }

  return (
    <div>
      <Navbar />
      <Box height="70px" width="80%" margin="auto" mt="20px" mr="75px">
        <img src="https://s0.2mdn.net/dfp/257985/4667917813/1658234033915/1000x60/1000x60-ZNAA-1.gif" alt="" />
      </Box>
      <Flex justifyContent="space-between" >
        <Sidebar />
        <Box  w="50%" _hover={{ cursor: "pointer" }}>
          <Box>
            <img src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/20/2523866-yogi-adityanath-ani.jpg" alt="" />

            <Box height="60px" width="100%" color="#4c4c4c" _hover={{ color: "blue.700", cursor: "pointer" }}>
              <Box fontSize="20px" fontWeight="bold" boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset">Signs of trouble in UP? Dissent in rank grows in CM yogi Adityanath's second term</Box>
            </Box>
          </Box>
          <Box marginTop="20px">
          <iframe width="100%"  height="315" src="https://www.youtube.com/embed/UTeA8GGfxj0"
           title="YouTube video player" frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>

          </iframe>
          </Box>
        </Box>
        <Rightsidebar />
      </Flex>

      <Box width="50%" margin="auto" >
        {
          homedata.map(el => (
            <Box width="100%" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;" mt="10px" _hover={{ color: "blue.700", cursor: "pointer" }}>
              <Box width="100%" p="10px" onClick={() => handleDesc(el)}>
                <Flex gap="1rem">
                  <Box height="87px" w="25%" >
                    <Image w="100%" h="100%" src={el.imgUrl} />
                  </Box>
                  <Box width="70%" >
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
      <Footer />
    </div>
  )
}

export default Homepage;
