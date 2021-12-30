import axios from 'axios'
import * as actionTypes from './actionTypes'

export const addIngrident=(igType)=>{
    return{
        type:actionTypes.ADD_INGRIDENT,
        payload:igType
    }
}

export const removeIngrident=(igType)=>{
    return{
        type:actionTypes.REMOVE_INGRIDENT,
        payload:igType
    }
}

export const updatePurchageable=()=>{
    return{
        type:actionTypes.UPDATE_PURCHAGEABLE
    }
}

export const resetIngredient=()=>{
    return {
        type:actionTypes.RESET_INGREDIENT
    }
}

export const loadOrder=(orders)=>{
    return{
        type:actionTypes.LOAD_ORDERS,
        payload:orders
    }
}

export const orderLoadFailed=()=>{
    return{
        type:actionTypes.ORDER_LOAD_FAILED
    }
}

export const fetchOrder=()=>dispatch=>{
    axios.get("https://burger-builder-39003-default-rtdb.asia-southeast1.firebasedatabase.app/order.json")
    .then(response=>{
        dispatch (loadOrder(response.data))
    })
    .catch(err=>{
        dispatch(orderLoadFailed())
    })
}