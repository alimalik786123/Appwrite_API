import React from 'react'
import { Container,Box,Text,Tabs,Tab,TabPanel,TabList,TabPanels,TabIndicator } from '@chakra-ui/react'
import Login from './auth/login'
import Signup from './auth/signup'
export default function Home() {
  return (
    <Container maxW='xl' centerContent>
       <Box
       display='flex'
       justifyContent='center'
       
       p={3}
       bg={'white'}
       w="100%"
       m="24px 0 15px 0"
       borderRadius="lg"
       borderWidth="1px"
       >
          <Text fontSize='4xl' fontFamily='work sans' alignItems='center' alignContent='center'>Mailchat</Text>
       </Box>
       <Box
       p={4}
       bg={'white'}
       w="100%"
       m="40px 10 15px 0"
       borderRadius="lg"
       borderWidth="1px"
       >
       <Tabs position="relative" isFitted variant="unstyled">
    <TabList>
      <Tab  _selected={{ color: 'Black', bg: 'blue.100' }}>Login</Tab>
      <Tab  _selected={{ color: 'Black', bg: 'blue.100' }}>Signu</Tab>
    </TabList>
    <TabIndicator
      mt="-1.5px"
      height="2px"
      bg="blue.500"
      borderRadius="1px"
    />
    <TabPanels>
      <TabPanel>
        <p><Login/></p>
      </TabPanel>
      <TabPanel>
        <p><Signup/></p>
      </TabPanel>
    
    </TabPanels>
  </Tabs>
       </Box>
    </Container>
  )
}
