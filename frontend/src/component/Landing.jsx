import React from 'react'
import { Box,Text , Image } from '@chakra-ui/react';
const Landing = () => {
  return (
    <div>
      <Box textAlign="center" >
    
      <Image
        src="https://i.pinimg.com/originals/d2/8d/16/d28d165c6ad5f93bc8951074f7db5118.png"
        alt="Homepage Image"
        w="100%"
      />
      <Text
        position="absolute"
        top="15%"
        left="50%"
        transform="translate(-50%, -50%)"
        color="Black" 
        fontSize="3xl" 
        fontWeight="bold" 
      >
        ⭐Let's Begin with Beautiful Mindset💛
      </Text>
    </Box>
    </div>
  )
}

export default Landing
