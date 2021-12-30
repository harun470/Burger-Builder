import React from 'react'

export default function Summary(props) {
   const ingredientSummary= props.ingredients.map(ingredient=>{
       return (
           <li key={ingredient.type}>
               <span style={{textTransform: "capitalize"}}>{ingredient.type}</span>:{ingredient.amount}
           </li>
       )
   })
    return (
        <div>
            <ul>
                {ingredientSummary}
            </ul>
        </div>
    )
}
