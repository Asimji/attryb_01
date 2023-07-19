import axios from "axios"
import { GET_OEM_SUCCESS, GET_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "./actionType"

const token=JSON.parse(localStorage.getItem("authToken"))||""


export const getOEM=()=>(dispatch)=>{
        dispatch({type:PRODUCT_REQUEST})
        axios.get(`${process.env.REACT_APP_URL}/original`,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        }).then((res)=>{console.log(res);dispatch({type:GET_OEM_SUCCESS,payload:res.data.OEM})}).catch(e=>dispatch({type:PRODUCT_FAILURE}))
}

export const getProduct=()=>(dispatch)=>{
    dispatch({type:PRODUCT_REQUEST})
    axios.get(`${process.env.REACT_APP_URL}/product`,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    }).then((res)=>{dispatch({type:GET_PRODUCT_SUCCESS,payload:res.data.products})}).catch(e=>dispatch({type:PRODUCT_FAILURE}))
}

