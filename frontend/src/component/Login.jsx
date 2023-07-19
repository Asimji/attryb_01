import { Box, Button, Flex, Heading, Image, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { postLogin } from '../redux/authReducer/action'

const Login = () => {
    const[user,setUser]=useState({email:"",password:""})

    const dispatch=useDispatch()

    const handleClick=()=>{
   console.log(user)
dispatch(postLogin(user))
    }

  return (
    <Box>
        <Heading ml={'2vh'} color={'orange.300'}>Welcome Please Login !</Heading>
         
         <Box height="90vh" display="flex" justifyContent="center" alignItems="center">
         <Flex direction="column" alignItems="center" border={'1px solid gray'} p='3vh' w={'70vh'}>
           <Box mb={4} w={'100%'} h={'50vh'}>
             <Image
               src="https://images10.gaadi.com/usedcar_image/3507545/original/usedcar_6_729901689674762_1689674770.jpg?imwidth=640"
               alt="Image"
               w='100%'
               h={'100%'}
             />
           </Box>
           <Input placeholder="Enter Your Email"  mb={2} onChange={(e)=>setUser({...user,email:e.target.value})} />
           <Input placeholder="Enter Your Password" mb={2} onChange={(e)=>setUser({...user,password:e.target.value})} />
           <Button w='100%' onClick={handleClick} >Sign In</Button>
           <Flex gap={'20vh'} mt={'2vh'}>
           <Text>Not a User!! <Link color='red' to={'/register'}>SignUp</Link></Text>
           <Link to='/'>Home</Link>
           </Flex>
         </Flex>
       </Box>
         </Box>
  )
}

export default Login
