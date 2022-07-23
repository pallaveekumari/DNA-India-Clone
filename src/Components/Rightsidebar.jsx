import React from 'react'
import {Box, Text, SimpleGrid} from "@chakra-ui/react"
import {useState} from "react"

let images = {
    0:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/23/2524624-untitled-design-2022-07-23t215424.420.png",
    1:"https://tpc.googlesyndication.com/simgad/14288201286081508658",
    2:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/22/2524276-ruturaj-gaikwad-twitter.jpg",
    3:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/22/2524280-ishan-kishan.jpg",
    4:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/23/2524578-2524469-arpita-mukherjee.jpg"
  }
const Rightsidebar = () => {

    let [i,setimage] = useState(0)

    setInterval(()=>{
      if(i==4){
        setimage(0)
      }
      else{
        setimage(i+1)
      }
    },4000)

  return (
    <>
      <Box   w="25%"  >
           
          <Box h="200px" w="100%"  >
            <img style={{width:"100%" ,height:"100%" ,transition:"4s linear"}} src={images[i]} alt="" />  
          </Box>
                 
           <Box h="50px" w="100%" fontSize="18px" fontWeight="bold" p="5px" borderBottom="1px solid yellow">Trending News Topics</Box>
           <Box h="50px" w="100%"  fontSize="20px" fontWeight="medium" p="5px" bg="#fd7e14" color="#000" borderRadius="10px" mt="10px"  _hover={{color:"blue.700" , cursor:"pointer"}}>Lalit Modi</Box>
           <Box h="50px" w="100%"  fontSize="20px" fontWeight="medium" p="5px" bg="#5564c9;" color="white" borderRadius="10px" mt="10px"  _hover={{color:"blue.700" , cursor:"pointer"}}>Sri Lanka Crisis</Box>
           <Box h="50px" w="100%"  fontSize="20px" fontWeight="medium" p="5px" bg="#6f42c1" color="#000" borderRadius="10px" mt="10px"  _hover={{color:"blue.700" , cursor:"pointer"}}>Rishi Sunak</Box>
         <Box mt="20px">
         
          <SimpleGrid columns="2" spacing="35px">
            <Box h="100px" w="150px" >
                <img style={{height:"100%", width:"100%"}}src="https://cdn.dnaindia.com/sites/default/files/styles/quarter/public/2022/07/08/2520707-shreya-fi-1.jpg" alt="" />
               <Text _hover={{color:"blue.700" , cursor:"pointer"}} fontSize="12px" fontWeight="bold">The Family man actress Shreya...</Text>
            </Box>
            <Box h="100px" w="150px" >
                <img style={{height:"100%", width:"100%"}}src="https://cdn.dnaindia.com/sites/default/files/styles/quarter/public/2022/05/23/1942850-team-india.jpg" alt="" />
                <Text _hover={{color:"blue.700" , cursor:"pointer"}} fontSize="12px" fontWeight="bold">Sanju Samson to Rahul Tripathi...</Text>
            
            </Box>
            <Box h="100px" w="150px" >
                <img style={{height:"100%", width:"100%"}}src="https://cdn.dnaindia.com/sites/default/files/styles/quarter/public/2022/05/27/2007952-fotojet-2022-05-27t122144.022.jpg" alt="" />
            
                <Text _hover={{color:"blue.700" , cursor:"pointer"}} fontSize="12px" fontWeight="bold">6 times Janhvi Kapoor handled...</Text>
            </Box>
            <Box h="100px" w="150px" >
                <img style={{height:"100%", width:"100%"}}src="https://cdn.dnaindia.com/sites/default/files/styles/quarter/public/2022/06/17/2359221-sara-ali-khan.jpg" alt="" />
           
                <Text _hover={{color:"blue.700" , cursor:"pointer"}} fontSize="12px" fontWeight="bold">Sara Ali Khan Looking sizziling..</Text>
            </Box>
            <Box h="100px" w="150px">
                <img style={{height:"100%", width:"100%"}} src="https://cdn.dnaindia.com/sites/default/files/styles/quarter/public/2022/05/23/1942596-gyanvapi-mosque9.jpg" alt="" />
                <Text _hover={{color:"blue.700" , cursor:"pointer"}}  fontSize="12px" fontWeight="bold">Rare Photo of Gyanvapi complex...</Text>
            
            </Box>
          </SimpleGrid>
          </Box>
      </Box>
    </>
  )
}

export default Rightsidebar
