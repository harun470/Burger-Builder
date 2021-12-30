import * as actionTypes from './actionTypes'

const priceList={
    salad:20,
    meat:80,
    cheese:50
}

const INITIAL_STATE={
    ingredient:[
            
        {type:'salad',amount:0},
        {type:'meat',amount:0},
        {type:'cheese',amount:0}
        
    ],
    totalPrice:50,
    purchageable:false,
    orders:[],
    orderLoading:true,
    orderErr:false
}

export const reducer=(state=INITIAL_STATE,action)=>{
    const ingredientz=[...state.ingredient]
    switch(action.type){
        case actionTypes.ADD_INGRIDENT:
            for(let item of ingredientz){
                if(item.type===action.payload){
                    item.amount++
                }
            }
            return{
                ...state,
                ingredient:ingredientz,
                totalPrice:state.totalPrice+priceList[action.payload]
            }

            case actionTypes.REMOVE_INGRIDENT:
                for(let item of ingredientz){
                    if(item.type===action.payload){
                        if(item.amount<=0){
                            return state;
                        }
                        item.amount--
                    }
                }
                return{
                    ...state,
                    ingredient:ingredientz,
                    totalPrice:state.totalPrice-priceList[action.payload]
                }

            case actionTypes.UPDATE_PURCHAGEABLE:
                const sum=state.ingredient.reduce((sum,element)=>{
                    return sum+element.amount
                },0)
                return{
                    ...state,
                    purchageable:sum>0
                }
            case actionTypes.RESET_INGREDIENT:
                return{
                    ...state,
                    ingredient:[
            
                        {type:'salad',amount:0},
                        {type:'meat',amount:0},
                        {type:'cheese',amount:0}
                        
                    ],
                    totalPrice:50,
                    purchageable:false
                }
            case actionTypes.LOAD_ORDERS:
                
                const orders=[]
                for(let key in action.payload){
                  
                    orders.push({
                        ...action.payload[key],
                        id:key
                    })
                }
                return{
                    ...state,
                    orders:orders,
                    orderLoading:false
                  
                }
            case actionTypes.ORDER_LOAD_FAILED:
                return{
                    ...state,
                    orderErr:true,
                    orderLoading:false
                }
        default:
            return state;
    }
}