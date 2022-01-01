import React from 'react'

 const orderSolo=(props)=> {
    
   const ingridentSum=props.order.ingridents.map(item=>{
       return(
           <span style={{
            border: "1px solid grey",
           
            borderRadius: "5px",
            padding: "10px",
            marginRight:'15px'
            }} key={item.type}>{item.amount}X{item.type}</span>
       )
   })

    return (
        <div style={{
            border: "1px solid grey",
            boxShadow: "1px 1px #888888",
            borderRadius: "5px",
            padding: "20px",
            marginTop:'25px'
            }}>
            <p>order number :{props.order.id}</p>
            <p>Delivary Add :{props.order.customer.deliveryAddress}</p>
            <hr />
            {ingridentSum}
            <hr />
            <p>Total :{props.order.price}</p>
        </div>
    )
}
export default orderSolo;