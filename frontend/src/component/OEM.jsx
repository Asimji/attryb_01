import { Box, Button, Heading, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOEM } from '../redux/productReducer/action'
import { Link } from 'react-router-dom'
import { StoreContext } from './Context'

const OEM = () => {

    const store=useSelector(store=>store.productReducer.oem_product)
    const dispatch=useDispatch()

    const {data,setData}=useContext(StoreContext)
    

    useEffect(()=>{
 dispatch(getOEM())
    },[])

    const handleClick=(id)=>{
        console.log(id)
        const singleData=store.filter((item,i)=>{
            return item._id===id
        })
        setData(singleData)
    }

  return (
    <Box>
   <Heading>OEM Collection List</Heading>
      <Table>
        <Thead>
            <Tr>
                <Th>S.No</Th>
                <Th>Model</Th>
                <Th>Year</Th>
                <Th>Price</Th>
                <Th>Color</Th>
                <Th>Mileage</Th>
                <Th>Power</Th>
                <Th>Max Speed</Th>
            </Tr>
        </Thead>
        <Tbody>
            {store?.map((item,i)=>{
              return  <Tr key={item._id}>
                <Td>{i+1}</Td>
                <Td>{item.model}</Td>
                <Td>{item.year_of_model}</Td>
                <Td>{item.new_model_price}</Td>
                <Td>{item.color}</Td>
                <Td>{item.mileage} km/liter</Td>
                <Td>{item.power} BHP</Td>
                <Td>{item.max_speed} km/h</Td>
                <Td>
                    <Button onClick={()=>handleClick(item._id)}>
                        <Link to='/dealer/add'>
                              Edit
                        </Link>
                        </Button>
                </Td>
            </Tr>
            })}
        </Tbody>
      </Table>
    </Box>
  )
}

export default OEM
