import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../redux/productReducer/action'
import { Box, Button, Heading, Image, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const HomePage = () => {
    const store=useSelector(store=>store.productReducer.dealer_product)
const dispatch=useDispatch()
const token=JSON.parse(localStorage.getItem("authToken"))||""
useEffect(()=>{
  dispatch(getProduct())
},[])

const handleDelete=(id)=>{
    console.log(id)
    axios.delete(`${process.env.REACT_APP_URL}/dealer/delete/${id}`,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    }).then((res)=>{alert(res.data.msg)}).catch(e=>console.log(e))
}

  return (
    <Box>
      <Heading>Welcome To Attryb</Heading>
      <Table>
            <Thead>
                <Tr>
                <Th>S.No</Th>
                <Th>Images</Th>
                <Th>Odometer Reading</Th>
                <Th>Scratches</Th>
                <Th>Original Paint</Th>
                <Th>Accident Reported</Th>
                <Th>Total Prev Buyers</Th>
                <Th>Registration Place</Th>
                </Tr>
            </Thead>
            <Tbody>
                {store?.map((item,i)=>{
                    return <Tr key={item._id}>
                        <Td>{i+1}</Td>
                        <Td>
                            <Image src={item.image}/>
                        </Td>
                        <Td>{item.kms_on_odometer} kms</Td>
                        <Td>{item.major_scratches}</Td>
                        <Td>{item.original_paint}</Td>
                        <Td>{item.no_of_accident_reported}</Td>
                        <Td>{item.no_of_previous_buyers}</Td>
                        <Td>{item.registration_place}</Td>
                        <Td>
                            <Link to='/original'>Edit</Link>
                        </Td>
                        <Td>
                            <Button onClick={()=>handleDelete(item._id)}>Delete</Button>
                        </Td>
                    </Tr>
                })}
            </Tbody>
        </Table>
    </Box>
  )
}

export default HomePage
