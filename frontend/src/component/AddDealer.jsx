import { Box, Button, Flex, Heading, Image, Input, Select, Text } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { StoreContext } from './Context'
import axios from 'axios'

const AddDealer = () => {

    const {data}=useContext(StoreContext)

    const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY0Yjc3YzExMzYzODZhYTNmOWEwMmI0NiIsImVtYWlsIjoic2hhaGJhekBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQwNCR3aWVMTzBST1V2eFZvcE9iTlFyWnFPVUg3dVVGZHgueVk0aG1RREV2RS45NXp0WXNkSThnTyIsInJvbGUiOiJDYXJfRGVhbGVyIiwibmFtZSI6InNoYWhiYXoifSwiaWF0IjoxNjg5Nzc0MjMzfQ.BfQVU9ay0d9komF7tlRRjxfYfwMUFF8nblD738CLyW0'
  
const obj={
    model:data[0].model,
    year_of_model:data[0].year_of_model,
    new_model_price:data[0].new_model_price,
    color:data[0].color.map(item=>item),
    mileage:data[0].mileage,
    power:data[0].power,
    max_speed:data[0].max_speed,
    kms_on_odometer:0,
    major_scratches:0,
    original_paint:"",
    no_of_accident_reported:0,
    no_of_previous_buyers:0,
    registration_place:"",
    image:"",
    title:"",
    description:""
     }

     const [add,setAdd]=useState(obj)

     const handleChange=(e)=>{
  const {value,name}=e.target
  setAdd(prev=>{
    return {...prev,[name]:value}
  })
     }
     const handleSubmit=()=>{
      
       fetch(`${process.env.REACT_APP_URL}/dealer/post`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            Authorization:`Bearer ${token}`
        },
        body:JSON.stringify(add)
       }).then(res=>res.json()).then((res)=>{alert(res.msg)}).catch(e=>console.log(e))
     }

  return (
    <Box>
    <Heading ml={'2vh'} color={'blue.300'}>Welcome Dealer Add Your List !</Heading>
     
     <Box  display="flex" justifyContent="center" alignItems="center">
     <Flex direction="column" alignItems="center" border={'1px solid gray'} p='3vh' w={'120vh'} gap={'2vh'}>
   <Flex align={'center'} gap={'5vh'} w={'100%'}>
    <Text w={'40%'}  fontWeight={'bold'}>Model</Text>
       <Input name='model' value={add.model} onChange={handleChange}/>
   </Flex>
   <Flex align={'center'}  w={'100%'}>
<Text w={'40%'}  fontWeight={'bold'}>Model Year</Text>
       <Input name='year_of_model'  value={add.year_of_model} onChange={handleChange} />
   </Flex>
<Flex align={'center'}  w={'100%'}>
<Text w={'40%'}  fontWeight={'bold'}>Original Price</Text>
       <Input name='new_model_price' value={add.new_model_price} onChange={handleChange} />
</Flex>
<Flex align={'center'}  w={'100%'}>
<Text w={'40%'}  fontWeight={'bold'}>Mileage</Text>
       <Input name='mileage' value={add.mileage} onChange={handleChange} />
</Flex>
<Flex align={'center'}  w={'100%'}>
<Text w={'40%'}  fontWeight={'bold'}>Power</Text>
       <Input name='power' value={add.power} onChange={handleChange} />
</Flex>
<Flex align={'center'}  w={'100%'}>
<Text w={'40%'}  fontWeight={'bold'}>Maximum Speed</Text>
       <Input name='max_speed'  value={add.max_speed} onChange={handleChange}/>
</Flex>
<Flex align={'center'}  w={'100%'}>
<Text w={'40%'}  fontWeight={'bold'}>Odometer Reading</Text>
       <Input name='kms_on_odometer'  value={add.kms_on_odometer} onChange={handleChange} />
</Flex>
<Flex align={'center'}  w={'100%'}>
<Text w={'40%'}  fontWeight={'bold'}>Major Scratches</Text>
       <Input name='major_scratches' value={add.major_scratches} onChange={handleChange} />
</Flex>
<Flex align={'center'}  w={'100%'}>
<Text w={'40%'}  fontWeight={'bold'}>Original Paint</Text>
       <Input  name='original_paint' value={add.original_paint} onChange={handleChange}/>
</Flex>
<Flex align={'center'}  w={'100%'}>
<Text w={'40%'}   fontWeight={'bold'}>Total Accident</Text>
       <Input name='no_of_accident_reported' value={add.no_of_accident_reported} onChange={handleChange}/>
</Flex>
<Flex align={'center'}  w={'100%'}>
<Text w={'40%'}  fontWeight={'bold'}>Previous Buyers</Text>
       <Input name='no_of_previous_buyers' value={add.no_of_previous_buyers} onChange={handleChange} />
</Flex>
<Flex align={'center'}  w={'100%'}>
<Text w={'40%'}  fontWeight={'bold'}>Registration Place</Text>
       <Input name='registration_place' value={add.registration_place} onChange={handleChange} />
</Flex>
<Flex align={'center'}  w={'100%'}>
<Text w={'40%'}  fontWeight={'bold'}>Image URL</Text>
       <Input name='image' value={add.image} onChange={handleChange}/>
</Flex>
<Flex align={'center'}  w={'100%'}>
<Text w={'40%'}  fontWeight={'bold'}>Title Add</Text>
       <Input  name='title'  value={add.title} onChange={handleChange}/>
</Flex>
<Flex align={'center'}  w={'100%'}>
<Text w={'40%'} fontWeight={'bold'}>Description Add</Text>
       <Input  name='description'  value={add.description} onChange={handleChange}/>
</Flex>

   
       <Button w='100%' onClick={handleSubmit} >Submit</Button>
    
     </Flex>
   </Box>
     </Box>
  )
}

export default AddDealer
