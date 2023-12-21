// use conbineReducer for combine all reducers

import {combineReducers} from 'redux'
import { cartData } from './reducer'
import { productStore } from './productReducer'

export default combineReducers(
    {
        cartData, // here key and value are same its like  cartData:cartData  so we can write only cartData
        productStore
    }
)