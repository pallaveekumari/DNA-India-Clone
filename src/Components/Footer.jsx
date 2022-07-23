import React from 'react'
import { Box, Flex ,Link} from "@chakra-ui/react"
import { useNavigate } from 'react-router-dom';
const Footer = () => {

  const navigate=useNavigate()
  return (
    <>
      <Box height="280px" width="100%"  bg="#383838">
        <Box height="70px" width="100%" >
          <Box height="70px" width="90px" margin="18px 20px"  _hover={{ cursor:"pointer"}} p="10px" onClick={()=>navigate("/")}>
            <img src="https://english.cdn.zeenews.com/static/apprun/dna/icons/logodna.png" alt="" />
         
   
            <Flex gap="2rem" ml="250px" mt="-30px" color="#AAAAAA" _hover={{ cursor:"pointer"}}>
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


          <Box height="30px" width="145px" mt="5px" bg="#AAAAAA" color="#383838" fontWeight="medium" fontSize="20px" >FOLLOW US ON</Box>


          <Flex gap="1rem" _hover={{ cursor:"pointer"}} >
            <Link  href="https://www.facebook.com/dnaindia">
            <Box mt="8px">
              <img height="20px" width="25px"src="https://english.cdn.zeenews.com/static/apprun/dna/icons/icon-facebook.svg" alt="" />
            </Box>
            </Link>
            <Link href="https://twitter.com/dna">
            <Box>
              <Box mt="8px">
                <img height="20px" width="25px" src="https://english.cdn.zeenews.com/static/apprun/dna/icons/icon-twitter.svg" alt="" />

            </Box>
            
           </Box>
           </Link>
           <Link href="https://www.youtube.com/channel/UCIRAYFbJmrP--jyrC9MAIWQ/videos">
            <Box>
              <Box mt="8px">
                <img height="20px" width="25px" src="https://english.cdn.zeenews.com/static/apprun/dna/icons/youtube-white.svg" alt="" />
              </Box>
            </Box>
            </Link>
            <Flex gap="2rem" ml="150px" mt="-10px" color="#AAAAAA" _hover={{ cursor:"pointer"}}>
            <Box>ABOUT DNA</Box>
            <Box>CONTACT US</Box>
            <Box>INVESTORS</Box>
            <Box>ADVERTISE</Box>
            <Box>PRIVACY-POLICY</Box>
            </Flex>
          </Flex>
        </Box>

        <Box height="70px" width="100%" >
          <Box height="30px" width="155px" fontSize="20px" color="#AAAAAA" mt="18px" _hover={{ cursor:"pointer"}}>PARTNER SITE</Box>
          <Flex gap="2rem" ml="250px" mt="-20px" color="#AAAAAA" _hover={{ cursor:"pointer"}}>
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
