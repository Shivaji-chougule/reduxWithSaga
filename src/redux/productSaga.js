import { PRODUCT_LIST,SET_PRODUCT_LIST } from "./constants"
import {takeEvery,put} from "redux-saga/effects"

function* getProducts(){
    let data = yield fetch("http://localhost:5000/product")
    data = yield data.json()
    console.log('getProducts get called',data)
    yield put({type:SET_PRODUCT_LIST,data})
}

function* productSaga (){
yield takeEvery(PRODUCT_LIST,getProducts) // in this product_list is when to get executed and second getProducts is for what to execute
}

export default productSaga