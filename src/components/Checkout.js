import React, { useState } from 'react';
import CheckoutModal from './CheckoutModal';

export default function Checkout({checkout, removeItem}) {
    const [isOpen, setIsOpen]=useState(false)

    const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)'
        }
      };

    return (
        <div>
            This is the checkout section
            {checkout.map(item=>
                <div key={item.imdbID}
                style={{
                    backgroundImage:`url(${item.Poster})`,
                backgroundSize:"cover",
                    margin:"10px", border:"1px solid black", height:"195px", width:"140px", textAlign:"-webkit-center"}}
                >
                    <div
                style={{height:"100%", position:"relative"}}
                >{item.Title}
                <div
                 style={{border:"1px solid black", height:"20px",width:"80px", position:"absolute", bottom:0, left:"50%", transform: "translateX(-50%)", cursor:"pointer", marginBottom:"15px"}}
                 onClick={()=>removeItem(item)}

                >Remove</div>
                </div></div>)}
            <div style={checkout.length===0?{background:"grey",color:"darkgray", border:"1px solid black", height:"20px", width:"200px", position:"absolute", right:0, margin:"20px"}:{border:"1px solid black", height:"20px", width:"200px", position:"absolute", right:0, margin:"20px", cursor:"pointer"}}
            onClick={()=>checkout.length>0&&setIsOpen(true)}
            >Checkout</div>
            <CheckoutModal customStyles={customStyles} isOpen={isOpen} setIsOpen={setIsOpen}/>


        </div>
    )
}
