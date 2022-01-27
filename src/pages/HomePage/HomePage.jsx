import React from 'react'
import './HomePage.scss'


export default function HomePage() {

 
    
    return (
        <div className='wrapper'>
            <div className='wrapper-img'>
                <img src="./images/image-product-1.jpg" alt="product" />
                <div className='wrapper-img-bottom'>
                    <img className='active' src="./images/image-product-1-thumbnail.jpg" alt="product1"/>
                    <img src="./images/image-product-2-thumbnail.jpg" alt="product2"/>
                    <img src="./images/image-product-3-thumbnail.jpg" alt="product3"/>
                    <img src="./images/image-product-4-thumbnail.jpg" alt="product4"/>
                </div>
            </div>
            <div className='wrapper-txt'>
                <h2>Sneaker company</h2>
                <h3>Fall Limited Edition Sneakers</h3>
                <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
                <div className='wrapper-txt-price'>
                    <p>$125.00<span>50%</span></p>
                </div>
                <p className='wrapper-txt-oldprice'>$250.00</p>
                <div className='wrapper-txt-buttons'>
                    <div className="wrapper-txt-buttons-cart">
                            <span className="wrapper-txt-buttons-cart-minus">-</span>
                            <span className="wrapper-txt-buttons-cart-total">0</span>
                            <span className="wrapper-txt-buttons-cart-plus">+</span>
                    </div>
                    <button type='button'><img src="./images/icon-cart-button.svg" alt="add-to-cart"/>Add to cart</button>
                </div>
            </div>
        </div>
    )
}
