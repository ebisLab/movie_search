import React from 'react'

export default function Checkout({checkout}) {
    console.log("checkout var", checkout)
    const cartTotal=()=>{
        return checkout.reduce((acc,val)=>{
            return acc+val.price
        }, 0).toFixed(2)
    }

    return (
        <div>
            This is the checkout section
            {checkout.map(item=>
                <div>{item.name}</div>)}
            <p>Total ${cartTotal()}</p>
            
        </div>
    )
}
