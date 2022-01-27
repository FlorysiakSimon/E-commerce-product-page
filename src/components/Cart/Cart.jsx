import React from 'react';

export default function Cart({style,modalOpen,modalClose}) {
    const defaultStyles = {
        overlay:{
            width: '100vw',
            height: '100vh',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            position: 'fixed',
            background: 'transparent',
        }
    }
    if(!modalOpen){return null;}

    return( 
        <div className='flexCart-cart'>
            <div onClick={modalClose}
                style={style && style.overlay ? style.overlay : defaultStyles.overlay}
                className="modalOverlay">
            </div>
            <h2>Cart</h2>
            <p>your cart is empty</p>
        </div>);
}
