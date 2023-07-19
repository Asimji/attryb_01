import { Box, Button, Flex, Heading, Image, Input, Select } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
    const [user,setUser]=useState({name:"",role:"",email:"",password:""})

    const handleSubmit=()=>{
        console.log(user)
        axios.post(`${process.env.REACT_APP_URL}/signup`,user).then((res)=>{alert(res.data.msg)}).catch(e=>console.log(e))
    }
   
  return (
    <Box>
        <Heading ml={'2vh'} color={'orange.300'}>Buy Your Best Car do Register YourSelf!</Heading>
         
         <Box height="90vh" display="flex" justifyContent="center" alignItems="center">
         <Flex direction="row" alignItems="center" border={'1px solid gray'} p='3vh' w={'100vh'} gap={'5vh'}>
           <Box mb={4} w={'60%'} h={'50vh'}>
             <Image
               src="https://images10.gaadi.com/usedcar_image/3507545/original/usedcar_6_729901689674762_1689674770.jpg?imwidth=640"
               alt="Image"
               w='100%'
               h={'100%'}
             />
           </Box>
           <Flex direction="column" gap={'2vh'} w={'40%'}>

           <Input placeholder="Enter Your Name"  onChange={(e)=>setUser({...user,name:e.target.value})} />
          <Select onChange={(e)=>setUser({...user,role:e.target.value})} >
            <option value="OEM">OEM</option>
            <option value="Car_Dealer">Car Dealer</option>
            <option value="Buyer">Buyer</option>
          </Select>
           <Input placeholder="Enter Your Email"  onChange={(e)=>setUser({...user,email:e.target.value})}  />
           <Input placeholder="Enter Your Password" type='password'  onChange={(e)=>setUser({...user,password:e.target.value})} />
           <Button w='100%' onClick={handleSubmit} >Sign Up</Button>
           <Flex justify={'space-between'} >
           <span> Already a User <Link to={'/login'}>  SignIn !!</Link> </span>
           <Link>Home</Link>
           </Flex>
           </Flex>
         </Flex>
       </Box>
         </Box>
  )
}

export default Register
