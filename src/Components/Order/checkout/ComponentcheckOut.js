import React, { Component } from 'react'
import { Button,Modal,ModalBody } from 'reactstrap';
import {connect} from 'react-redux'
import axios from 'axios'
import Comspinner from '../../spinner/Comspinner';
import { resetIngredient } from '../../../redux/actionCreators';


const mapStateToProps=(state)=>{
    return{
        ingredient:state.ingredient,
        totalPrice:state.totalPrice,
        purchageable:state.purchageable
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        resetIngredient:()=>dispatch(resetIngredient())
    }
}

 class ComponentcheckOut extends Component {
     state={
         values:{
             deliveryAddress:'',
             phone:'',
             paymentType:'Cash On Delivery'
         },
         isLoading:false,
         isModalOpen:false,
         ModalMess:''
     }

    goBack=()=>{
        this.props.history.goBack("/");
    }

    handleSubmit=()=>{
        this.setState({isLoading:true})
        const order={
            ingridents:this.props.ingredient,
            customer:this.state.values,
            price:this.props.totalPrice,
            orderTime: new Date()
        }
       axios.post
       ("https://burger-builder-39003-default-rtdb.asia-southeast1.firebasedatabase.app/order.json",order)
       .then(response=>{
           if(response.status===200){
               this.setState({
                   isLoading:false,
                   isModalOpen:true,
                   ModalMess:"Order placed successfully"
                })
                this.props.resetIngredient()

           }else{
            this.setState({
                isLoading:false,
                isModalOpen:true,
                ModalMess:"Something went wrong!"
            })
           }
       })
       .catch(err=>{
        this.setState({
            isLoading:false,
            isModalOpen:true,
            ModalMess:"Something went wrong!"
        })
       })
    }

    handleInputChange=(e)=>{
        this.setState({
            values:{
                ...this.state.values,
                [e.target.name]:e.target.value
            }
        })
    }

    render() {
        if(this.state.isLoading){
                return(
                    <Comspinner />
                )
                }else{
                    return (
            
                        <div>
                            <h4 style={{
                            border: "1px solid grey",
                            boxShadow: "1px 1px #888888",
                            borderRadius: "5px",
                            padding: "20px",
                            marginTop:'25px'
                            }}>
                                Total Price:{this.props.totalPrice} BDT
            
                            </h4>
                            <form style={{
                            border: "1px solid grey",
                            boxShadow: "1px 1px #888888",
                            borderRadius: "5px",
                            padding: "20px",
                            marginTop:'25px'
                        }}>
            
                                <textarea   name="deliveryAddress"
                                            value={this.state.deliveryAddress}
                                            className="form-control"
                                            placeholder="Your Address"
                                           
                                            onChange={(e)=>this.handleInputChange(e)} />
                                            
                                
                                <br/>
            
                                <input name="phone" className="form-control" value={this.state.phone}
                                 placeholder="Your Phone Number"  onChange={(e)=>this.handleInputChange(e)} />
                                
            
                                <br/>
                                <select  name="paymentType"  className="form-control" value={this.state.paymentType} 
                                         onChange={(e)=>this.handleInputChange(e)}>
            
                                        <option value="Cash On Delivery">Cash On Delivery</option>
                                        <option value="Bkash">Bkash</option>
            
                                </select>
                                <br/>
            
                                <Button style={{ backgroundColor: "#D70F64" }} className="me-auto"
                                 onClick={this.handleSubmit} disabled={!this.props.purchageable} >Place Order</Button>
            
                                <Button color="secondary" className="ms-2" onClick={this.goBack}>Cancel</Button>
                            </form>
                            
                            <Modal isOpen={this.state.isModalOpen} onClick={this.goBack}>
                                <ModalBody>
                                    {this.state.ModalMess}
                                </ModalBody>
                            </Modal>
                            
                        </div>
                        
                    )
                }
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (ComponentcheckOut);