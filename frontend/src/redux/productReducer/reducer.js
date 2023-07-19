import { DELETE_PRODUT_SUCCESS, GET_OEM_SUCCESS, GET_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "./actionType"

const initState={
    oem_product:[],
    dealer_product:[],
    isLoading:false,
    isError:false
}

export const reducer=(state=initState,{type,payload})=>{
    switch(type){
        case PRODUCT_REQUEST:return {...state,isLoading:true}
        case PRODUCT_FAILURE:return {...state,isLoading:false,isError:true}
        case GET_OEM_SUCCESS:return {...state,isLoading:false,oem_product:payload}
        case GET_PRODUCT_SUCCESS:return {...state,isLoading:false,dealer_product:payload}
        
        default:return {...state}
    }
}