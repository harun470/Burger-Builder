import React from 'react'
import Ingredient from '../Ingredients/Ingredient';
import './Burger.css'

 const Burger=(props)=> {
     let ingridentArr = props.ingredients.map(item=>{
            let amountArr=[...Array(item.amount).keys()]
            return amountArr.map(_ =>{
                    return <Ingredient type={item.type} key={Math.random()} />
            })
     })
     .reduce((arr,element)=>{
         return arr.concat(element)
     },[])

     if(ingridentArr.length===0){
         ingridentArr=<p>please add some ingridents!</p>;
     }
    return (
        <div className='Burger'>
            <Ingredient type='bread-top'/>
            {ingridentArr}
            <Ingredient type='bread-bottom'/>
           
        </div>
    )
}

export default Burger;