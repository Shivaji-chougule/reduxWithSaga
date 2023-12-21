//reducer also noting but function 
// there is two patameters one is initial default here is [] and other is action
import { ADD_TO_CART,REMOVE_FROM_CART,EMPTY_CART } from "./constants"
export const cartData = (data=[], action)=>{

    switch(action.type){
        case ADD_TO_CART:
            console.log('ADD TO CART condition',action)
            return [action.data,...data];
            
        case REMOVE_FROM_CART:
            console.log('REMOVE FORM CART CONDITION', action)
           // data.length = data.length? data.length-1 :[]  //if data is there then do data minus one otherwise do empty array
           const remaingItem = data.filter((item)=>item.id !== action.data);
           console.log('remaing', remaingItem)
            return [...remaingItem] 

        case EMPTY_CART:
            console.log('EMPTY CART CONDITION', action)
            data=[]   
            return [...data] 
            default:
                 return data
    }
    
  
}