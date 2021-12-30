import React from 'react'
import { Button, Card, CardBody, CardFooter, CardHeader } from 'reactstrap'
import BuildControl from './BuildControls'

const controls =[
    {label:'Salad' ,type:'salad'},
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
]



export default function Controls(props) {
    return (
        <div  className='container ml-md-5'style={{ textAlign: "center" }}>
           <Card style={{
                marginTop: "30px",
                marginBottom: "30px",
                textAlign: "center"
            }}>
               <CardHeader style={{
                    backgroundColor: "#D70F64",
                    color: "white"
                }}>
                   <h4>Add ingredients</h4>
               </CardHeader>
               <CardBody>
                   {
                    controls.map(item=>{
                       return <BuildControl 
                       label={item.label}
                       type={item.type}
                       key={Math.random()} 
                       added={()=>props.addIngredientHandle(item.type)}
                       removed={()=>props.removeIngredientHandle(item.type)}
                       />
                    })
                }
               </CardBody>
               <CardFooter>
                   <h5>price:<strong>{props.price}</strong> BDT</h5>
               </CardFooter>
               <Button disabled={!props.purchageable} onClick={props.toggleModal}>Order Now</Button>
           </Card> 
        </div>
    )
}
