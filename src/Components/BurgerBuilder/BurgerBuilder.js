import React, { Component } from 'react'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import Burger from './Burger/Burger'
import Controls from './Controls/Controls'
import Summary from './Summary/Summary'
import { connect } from 'react-redux'
import { addIngrident, removeIngrident,updatePurchageable } from '../../redux/actionCreators'

const mapStateToProps=(state)=>{
    return{
        ingredient:state.ingredient,
        totalPrice:state.totalPrice,
        purchageable:state.purchageable
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        addIngrident:(igType)=>dispatch(addIngrident(igType)),
        removeIngrident:(igType)=>dispatch(removeIngrident(igType)),
        updatePurchageable:()=>dispatch(updatePurchageable())
    }
}


class BurgerBuilder extends Component {
    state={
        modalOpen:false
    }



    addIngredientHandle=(type)=>{
    this.props.addIngrident(type)
    this.props.updatePurchageable();
    }
        
    
    removeIngredientHandle=(type)=>{
     this.props.removeIngrident(type)
    this.props.updatePurchageable();
    }

    toggleModal=()=>{
        this.setState({
            modalOpen:!this.state.modalOpen
        })
    }
    handleCheckout=()=>{
        this.props.history.push("/checkOut")
    }
    
    render() {
        return (
            <div>
                <div className="d-flex flex-md-row flex-column">
                    <Burger ingredients={this.props.ingredient} />
                    <Controls 
                    addIngredientHandle={this.addIngredientHandle}
                    removeIngredientHandle={this.removeIngredientHandle}
                    price={this.props.totalPrice}
                    toggleModal={this.toggleModal}
                    purchageable={this.props.purchageable}/>
                </div>
                <Modal isOpen={this.state.modalOpen}>
                    <ModalHeader>
                        Your Order Summary
                    </ModalHeader>
                    <ModalBody>
                        <h5>Total Price:{this.props.totalPrice} BDT</h5>
                            <Summary ingredients={this.props.ingredient} />
                    </ModalBody>
                    <ModalFooter>
                        <Button color='success' onClick={this.handleCheckout}>Continue to checkout</Button>
                        <Button color='secondary' onClick={this.toggleModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>
                </div>   
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (BurgerBuilder)