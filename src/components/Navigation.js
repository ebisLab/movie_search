import React from 'react';
import {Link} from 'react-router-dom'

export default function Navigation({checkout}) {

    return (
        <div>
            
            <Link to="/" style={{padding:"5px"}}>Home</Link>
            <Link to="/checkout" style={{padding:"5px"}}>Checkout</Link>
            <span style={{width:"20px", height:"20px", border:"1px solid black", borderRadius:"50%", background:"indianred", position:"absolute"}} >{checkout.length}</span>

        </div>
    )
}
