import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchOrder } from '../../redux/actionCreators'
import OrderSolo from './OrderSolo/OrderSolo'
import OrderSpinner from '../spinner/Comspinner'



const mapStateToProps=(state)=>{
    return{
    orders:state.orders,
    orderLoading:state.orderLoading,
    orderErr:state.orderErr
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        fetchOrder:()=>dispatch(fetchOrder())
    }
   
}

 class Order extends Component {
     componentDidMount(){
         this.props.fetchOrder()
     }
     
     
    render() {
        let ordersDetail=null
        if(this.props.orderErr){
           ordersDetail= <p style={{
            border: "1px solid grey",
            boxShadow: "1px 1px #888888",
            borderRadius: "5px",
            padding: "20px",
            marginTop:'25px'
            }}>failed</p>
        }else{
            if(this.props.orders.length===0){
                ordersDetail= <p style={{
                    border: "1px solid grey",
                    boxShadow: "1px 1px #888888",
                    borderRadius: "5px",
                    padding: "20px",
                    marginTop:'25px'
                    }}>you have no order</p>
            }else{
                ordersDetail=this.props.orders.map(order=>{
                    return <OrderSolo order={order} key={order.id} />
                })
            }
            
        }
         
        if(this.props.orderLoading){
            return (
                <OrderSpinner />
            )
        }else{
            return (
                <div>
                    {ordersDetail}
                </div>
            )
        }
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Order)

