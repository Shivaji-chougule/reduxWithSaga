import {  SET_PRODUCT_LIST } from "./constants"


export const productStore = (data=[], action)=>{

    switch(action.type){
        case SET_PRODUCT_LIST:
            console.log('PRODUCT_LIST condition',action)
            return [...action.data]
            default:
                 return data
    }
    
  
}