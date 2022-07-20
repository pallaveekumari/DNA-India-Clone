import React from 'react'
import {Flex,Box,Button, Spacer} from "@chakra-ui/react"
// import navbarcss from "./Styles/Navbar.module.css"
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
   
    PopoverBody,
   
    PopoverArrow
   
  
  } from '@chakra-ui/react'
const Navbar = () => {
  return (
    <>
    <Box height="70px" width="100%" bg="#ffde2f">
   <Flex>
            <Box height="100px" width="100px" p="8px" margin="5px 15px ">
            <img src="https://english.cdn.zeenews.com/static/apprun/dna/icons/logodna.png" alt="icons" />
            </Box>
            <Box  border="1px solid black" height="30px" width="90px" borderRadius="38px" marginTop="16px" marginLeft="20px" _hover={{color:"white",cursor:"pointer",bg:"#383838"}}>
                <Box fontWeight="bold" p="2px" >हिंदी में पढ़े</Box>
            </Box>
            <Spacer/>
            
                <Popover>
  <PopoverTrigger>
  <Button marginTop="14px"  bg="#ffde2f" _hover={{bg:"#ffde2f"}}>
                <img  src="https://english.cdn.zeenews.com/static/public/menusearch.svg" alt="icon"/></Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
 
    
    <PopoverBody>
        <input type="text" placeholder="Search on DNA..."/>
        
        <Button>GO</Button>
    </PopoverBody>
   
  </PopoverContent>
 

</Popover>
          
   </Flex>
    </Box>

    <Box  height="55px" width="97%" bg="#383838"  margin="auto" marginTop="20px">
        <Flex>
            <Box height="53.7px" width="150px" bg="#AAAAAA" borderRadius="0px 5px 5px 0px">
                <Box  marginTop="15px">Top News</Box>
            </Box>
        </Flex>
    </Box>
    </>
  )
}

export default Navbar;
