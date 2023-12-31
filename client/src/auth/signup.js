import React from 'react'
import { FormControl, FormLabel,Button, Input, InputGroup, InputRightElement, VStack,useToast } from '@chakra-ui/react'
import { useState } from 'react' 
import { account } from './appwrite'

const Signup = () => {
    const [show,setshow]=useState(false)
    const [name,setname]=useState('')
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const [cnfpassword,setcnfpassword]=useState('')
    const [pic,setpic]=useState('')
    const [loading, setloading] = useState(false)
    const toast=useToast()
    const invert=()=>{
        setshow(!show)
    }
    const invert1=()=>{
        setshow(!show)
    }

    const setpics = (pics) => {
      setloading(true);
  
      if (pics === undefined) {
        toast({
          title: "Please Select an Image!",
          status: "warning",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        return;
      }
  
      if (pics.type !== "image/jpeg" && pics.type !== "image/png") {
        toast({
          title: "Please Select a JPEG or PNG Image!",
          status: "warning",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        setloading(false);
        return;
      }
  
      if (pics.type === "image/jpeg" || pics.type === "image/png") {
  
        const data = new FormData()
        data.append("file", pics)
        data.append("upload_preset","ml_default")
        data.append("cloud_name","mailchat")
        // axios.post("https://api.cloudinary.com/v1_1/mailchat/image/upload", data)
        //   .then((response) => {
        //     console.log("Cloudinary response:", response);
        //     setpic(response.data.url.toString());
        //     setloading(false);
        //     toast({
        //       title: "Image uploaded successfully!",
        //       status: "success",
        //       duration: 5000,
        //       isClosable: true,
        //       position: "bottom",
        //     });
        //   })
        //   .catch((error) => {
        //     console.log("Cloudinary error:", error);
        //     setloading(false);
        //   });
      }
    }
    const submit=async()=>{
      setloading(true)
      if(!name || !email || !password || !cnfpassword ){
        toast({ 
          title: "Empty field",
          status: "warning",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
        // alert("failed")
        setloading(false)
        return
      }
      else{
        if(password!=cnfpassword){
          toast({
            title: "Password do not matched",
            status: "warning",
            duration: 5000,
            isClosable: true,
            position: "top",
          });
          setloading(false)
          return
        }
        const body={
            userid:"1234",
            name:name,
            email:email,
            password:password,

        }
        console.log(body);
        setloading(false)
        const newuser=await account.create(body.userid,body.email,body.password,body.name)
      }
    }
  return (
    <VStack spacing='5px'>
        <FormControl>
            <FormLabel> Name </FormLabel>
                <Input
                 placeholder='Enter Name'
                 onChange={(e)=>setname(e.target.value)}
                 marginBottom='15px'
                 isRequired
                ></Input>
          </FormControl>
          <FormControl>
            <FormLabel> Email </FormLabel>
                <Input
                 placeholder='Enter Email'
                 onChange={(e)=>setemail(e.target.value)}
                 marginBottom='15px'
                 isRequired
                 type={'email'}
                ></Input>
          </FormControl>
          
          <FormControl>
            <FormLabel> Password </FormLabel>
            <InputGroup>

                <Input
                 placeholder='Enter Password'
                 onChange={(e)=>setpassword(e.target.value)}
                 marginBottom='15px'
                 isRequired
                 type={show?'text':'password'}

                ></Input>
                <InputRightElement width='4.5rem'> 
                  <Button h='1.75rem' size='sm' onClick={invert1} >
                  {show?"Hide":"Show"}
                  </Button>
                </InputRightElement>
                </InputGroup>
          </FormControl>
          <FormControl>
            <FormLabel> Confirm </FormLabel>
            <InputGroup>
                <Input
                 placeholder='Confirm Password'
                 onChange={(e)=>setcnfpassword(e.target.value)}
                 marginBottom='15px'
                 isRequired
                 type={show?'text':'password'}
                ></Input>
                 <InputRightElement width='4.5rem'> 
                  <Button h='1.75rem' size='sm' onClick={invert} >
                     {show?"Hide":"Show"}
                  </Button>
                </InputRightElement>
                </InputGroup>
          </FormControl>
          <FormControl>
            <FormLabel> Add your pic </FormLabel>
                <Input
                 placeholder='Add pic'
                 onChange={(e)=>setpics(e.target.files[0])}
                 marginBottom='15px'
                 p={'1.5'}
                 type={'file'}
                 accept='image/*'
                ></Input>
          </FormControl>
          <Button colorScheme='blue' w={'100%'} variant='outline' isLoading={loading} onClick={submit} >
    Button
  </Button>
           
           
        
    </VStack >
  )
}

export default Signup