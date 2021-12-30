import React from 'react'
import BurgerBuilder from './BurgerBuilder/BurgerBuilder'

import { Route} from 'react-router-dom'
import Order from './Order/Order'
import ComponentcheckOut from './Order/checkout/ComponentcheckOut'
import Header from './Header/Header'



export default function Main() {
    return (
        
           <div>
                <Header />
         
                
                   <div className='container'>
                        <Route path='/' exact component={BurgerBuilder }/>
                        <Route path="/order" component={Order}/>
                        <Route path='/checkOut' component={ComponentcheckOut}/>
                       
                    </div> 
          </div>
            
        
    )
}
