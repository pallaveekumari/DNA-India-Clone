import { Box,Button,Flex,Spacer} from '@chakra-ui/react';
import React from 'react'
import { useNavigate } from 'react-router-dom';



const Sidebar = () => {
  const navigate=useNavigate()
  return (
    <>
      <Box width="23%"  p="10px">
        
        <Box height="35px" width="100%"   mt="5px" _hover={{bg:"#ffde2f",cursor:"pointer"}} onClick={()=>navigate("/Latestnews")}>
            <Flex gap="1rem" >
              <img src="https://english.cdn.zeenews.com/static/public/icons/icons-latestnews.svg" alt="" />Latest News
            </Flex>
           
        </Box>

        <Box height="35px" width="100%"  mt="5px"_hover={{bg:"#ffde2f",cursor:"pointer"}}>
            <Flex gap="1rem">
              <img src="https://english.cdn.zeenews.com/static/public/icons/icons-photos.svg" alt="" />Photos
            </Flex>
           
        </Box>
        <Box height="35px" width="100%"  mt="5px"_hover={{bg:"#ffde2f",cursor:"pointer"}}>
            <Flex gap="1rem">
              <img src="https://english.cdn.zeenews.com/static/public/icons/icons-videos.svg" alt="" />Videos
            </Flex>
           
        </Box>
        <Box height="35px" width="100%"  mt="5px"_hover={{bg:"#ffde2f",cursor:"pointer"}}>
            <Flex gap="1rem">
              <img src="https://english.cdn.zeenews.com/static/public/icons/icons-explainer.svg" alt="" />Explainers
            </Flex>
           
        </Box>
        <Box height="35px" width="100%" mt="5px"_hover={{bg:"#ffde2f",cursor:"pointer"}}>
            <Flex gap="1rem">
              <img src="https://english.cdn.zeenews.com/static/public/icons/icons-india.svg" alt="" />India
            </Flex>
           
        </Box>
        <Box height="35px" width="100%" mt="5px"_hover={{bg:"#ffde2f",cursor:"pointer"}}>
            <Flex gap="1rem">
              <img src="https://english.cdn.zeenews.com/static/public/icons/icons-entertainment.svg" alt="" />Entertainment
            </Flex>
           
        </Box>
           
       
        <Box height="35px" width="100%"  mt="5px"_hover={{bg:"#ffde2f",cursor:"pointer"}}>
            <Flex gap="1rem">
              <img src="https://english.cdn.zeenews.com/static/public/icons/icons-sports.svg" alt="" />Sports
            </Flex>
           
        </Box>
        <Box height="35px" width="100%" mt="5px"_hover={{bg:"#ffde2f",cursor:"pointer"}}>
            <Flex gap="1rem">
              <img src="https://english.cdn.zeenews.com/static/public/icons/icons-viralNews.svg" alt="" />Viral News
            </Flex>
           
        </Box>
        <Box height="35px" width="100%" mt="5px"_hover={{bg:"#ffde2f",cursor:"pointer"}}>
            <Flex gap="1rem">
              <img src="https://english.cdn.zeenews.com/static/public/icons/icons-lifestyle.svg" alt="" />Lifestyle
            </Flex>
           
        </Box>
       
        <Box height="35px" width="100%" mt="5px"_hover={{bg:"#ffde2f",cursor:"pointer"}}>
            <Flex gap="1rem">
              <img src="https://english.cdn.zeenews.com/static/public/icons/icons-business.svg" alt="" />Business
            </Flex>
           
        </Box>

        <Box height="35px" width="100%"  mt="5px"_hover={{bg:"#ffde2f",cursor:"pointer"}}>
            <Flex gap="1rem">
              <img src="https://english.cdn.zeenews.com/static/public/icons/icons-world.svg" alt="" />World
            </Flex>
           
        </Box>

        <Box height="35px" width="310px"  mt="5px"_hover={{bg:"#ffde2f",cursor:"pointer"}}>
            <Flex gap="1rem">
              <img src="https://english.cdn.zeenews.com/static/public/icons/ezmall-icon1.png" alt="" />Ezmall
            </Flex>
           
        </Box>
      </Box>
    </>
  )
}

export default Sidebar;
