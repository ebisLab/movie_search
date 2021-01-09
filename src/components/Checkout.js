import React from 'react'

export default function Checkout({checkout, removeItem}) {
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
                <div key={item.id}
                style={{margin:"10px", border:"1px solid black", height:"100px", width:"100px", textAlign:"-webkit-center"}}
                >
                    <div
                style={{height:"100%", position:"relative"}}
                >{item.name}
                <div
                 style={{border:"1px solid black", height:"20px",width:"80px", position:"absolute", bottom:0, left:"50%", transform: "translateX(-50%)", cursor:"pointer", marginBottom:"15px"}}
                 onClick={()=>removeItem(item)}

                >Remove</div>
                </div></div>)}
            <p>Total ${cartTotal()}</p>
            
        </div>
    )
}
