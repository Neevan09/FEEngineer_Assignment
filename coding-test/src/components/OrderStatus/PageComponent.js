import React from 'react'
import { useSelector } from 'react-redux'

function PageComponent(props) {
    // const order = useSelector();
    console.log(' Order Status props:', props);
    return (
        <div>
            <h2>Order Status!!</h2>
            <h4>Order Id: </h4>           
            <h4>Order Quantity</h4>            
            <h4>Shipped date</h4>
            <h4>Order Status</h4>
        </div>
    )
}

export default PageComponent
