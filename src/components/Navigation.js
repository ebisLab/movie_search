import React from 'react';
import {Link} from 'react-router-dom'

export default function Navigation({checkout}) {

    return (
        <div>
            
            <Link to="/">Home</Link>
            <Link to="/checkout">Checkout</Link>

        </div>
    )
}
