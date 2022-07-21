import React from 'react'
import { Box, Flex } from "@chakra-ui/react"
const Footer = () => {
  return (
    <>
      <Box height="280px" width="100%"  bg="#383838">
        <Box height="70px" width="100%" >
          <Box height="70px" width="90px" margin="18px 20px" >
            <img src="https://english.cdn.zeenews.com/static/apprun/dna/icons/logodna.png" alt="" />
         
   
            <Flex gap="2rem" ml="250px" mt="-30px" color="#AAAAAA">
              <Box>INDIA</Box>
              <Box>WORLD</Box>
              <Box>BUSINESS</Box>
              <Box>TECHNOLOGY</Box>
              <Box>SPORTS</Box>
              <Box>CRICKET</Box>
              <Box>ENTERTAINMENTS</Box>
            </Flex>
            </Box>
        </Box>

        <Box height="70px" width="100%"  >


          <Box height="30px" width="155px" mt="5px" bg="#AAAAAA" color="#383838" fontWeight="medium" fontSize="20px">FOLLOW US ON</Box>


          <Flex gap="1rem">
            <Box mt="8px" >
              <img height="20px" width="25px" src="https://english.cdn.zeenews.com/static/apprun/dna/icons/icon-facebook.svg" alt="" />
            </Box>
            <Box>
              <Box mt="8px">
                <img height="20px" width="25px" src="https://english.cdn.zeenews.com/static/apprun/dna/icons/icon-twitter.svg" alt="" />
              </Box>
            </Box>
            <hr />
            <Box>
              <Box mt="8px">
                <img height="20px" width="25px" src="https://english.cdn.zeenews.com/static/apprun/dna/icons/youtube-white.svg" alt="" />
              </Box>
            </Box>
            <Flex gap="2rem" ml="150px" mt="-10px" color="#AAAAAA">
            <Box>ABOUT DNA</Box>
            <Box>CONTACT US</Box>
            <Box>INVESTORS</Box>
            <Box>ADVERTISE</Box>
            <Box>PRIVACY-POLICY</Box>
            </Flex>
          </Flex>
        </Box>

        <Box height="70px" width="100%" >
          <Box height="30px" width="155px" fontSize="20px" color="#AAAAAA" mt="18px">PARTNER SITE</Box>
          <Flex gap="2rem" ml="250px" mt="-20px" color="#AAAAAA">
            <Box>ZEE NEWS</Box>
            <Box>HINDI NEWS</Box>
            <Box>MARATHI NEWS</Box>
            <Box>BENGALI NEWS</Box>
            <Box>TAMIL NEWS</Box>
            <Box>MALAYALAM</Box>
            <Box>ZEE BUSINESS</Box>
            <Box>WION</Box>
            
          </Flex>
        </Box>
        <Box height="70px" width="100%" >
          <Box mt="15px"color="#AAAAAA">©1998-2022 INDIA DOT COM PRIVATE LIMITED, ALL RIGHTS RESERVED</Box>
        </Box>
      </Box>
    </>
  )
}

export default Footer;
