import axios from "axios"
import { AUTH_FAILURE, AUTH_REQUEST, AUTH_SUCCESS } from "./actionType"


export const postLogin=(user)=>(dispatch)=>{
  dispatch({type:AUTH_REQUEST})

  axios.post(`${process.env.REACT_APP_URL}/signin`,user).then((res)=>{alert(res.data.msg);dispatch({type:AUTH_SUCCESS,payload:res.data.token});localStorage.setItem("authToken",JSON.stringify(res.data.token))}).catch(e=>dispatch({type:AUTH_FAILURE}))

}