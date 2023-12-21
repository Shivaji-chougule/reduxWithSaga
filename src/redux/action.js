
import { ADD_TO_CART } from "./constants"
import {REMOVE_FROM_CART,EMPTY_CART} from './constants'
export const addToCart = (data)=>{

    console.log('action get dispached',data)
    return {
        type:ADD_TO_CART,
        data:data
    }
}

export const removeFromCart = (data)=>{
    console.log('removed form cart',data)
    return {
        type:REMOVE_FROM_CART,
        data:data
    }
}
export const emptyCart = ()=>{
    console.log('empty cart')
    return {
        type:EMPTY_CART,
        
    }
}