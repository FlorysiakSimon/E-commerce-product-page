import React from 'react';
import './Cart.scss';

export default function Cart({style,cartOpen,cartClose,items}) {
    
    if(!cartOpen){return null;}

    return( 
        <div className='flexCart-cart'>
            <h2>Cart</h2>
            <div className='flexCart-cart-container'>
                <img src={items.src} alt="img product" />
                <div className='flexCart-cart-container-txt'>
                    <p>{items.name}</p>
                    <p>{items.price} x 3 <span>375.00</span></p>
                </div>
                <img className='flexCart-cart-container-delete' src="./images/icon-delete.svg" alt="remove item" />
            </div>
            <button type='button'>Checkout</button>
            <p>your cart is empty</p>
        </div>);
}
