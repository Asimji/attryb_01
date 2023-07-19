import { AUTH_FAILURE, AUTH_REQUEST, AUTH_SUCCESS } from "./actionType"


const initState={
    token:"",
    isAuth:false,
    isLoading:false,
    isError:false
}

export const reducer=(state=initState,{type,payload})=>{
    switch(type){
       case AUTH_REQUEST:return {...state,isLoading:true}
       case AUTH_FAILURE:return {...state,isLoading:false,isError:true}
       case AUTH_SUCCESS:return {...state,isLoading:false,isAuth:true,token:payload}
        default:return {...state}
    }
}
