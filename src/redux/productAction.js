import { PRODUCT_LIST } from "./constants"

export const productList = ()=>{
    const data = 'hello'
    console.log('removed form cart',data)
    return {
        type:PRODUCT_LIST
    }
}
