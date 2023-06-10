import { Button, ButtonGroup } from '@chakra-ui/react'
import {Route,Routes,BrowserRouter as Router} from 'react-router-dom'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'

import Login from './auth/login';
import Signup from './auth/signup';
import ChatApp from './ChatApp';
import Home from './Home'
function App() {
  return (
    <ChakraProvider>
   <div className='App'>
    <Router>
   <Routes>
     
     <Route exact path='/' element={<Home/>}/>
     <Route path='/login' element={Login}/>
     <Route path='/signup' element={Signup}/>
     <Route path='/chat' element={<ChatApp/>}/>
     
   </Routes>
   </Router>
    </div>
    </ChakraProvider>
  );
}

export default App;
