import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss'
import Cart from '../Cart/Cart.jsx'
export default function Header() {

    const [cartOpen, setcartOpen] = React.useState(false);

    const toggleCart = () => {
        setcartOpen(!cartOpen);
    };

  return(
    <nav>
        <div className="flexnav">
            <img src="./images/logo.svg" alt="logo"/>
            <Link to='/'>Collections</Link>
            <Link to='/'>Men</Link>
            <Link to='/'>Women</Link>
            <Link to='/'>About</Link>
            <Link to='/'>Contact</Link>
        </div>
        <div className='flexCart'>
            <Cart modalOpen={cartOpen} modalClose={toggleCart}/>
            <img src="./images/icon-cart.svg" onClick={toggleCart} alt="cart" />
            <img className='flexCartAvatar' src="./images/image-avatar.png" alt="user-avatar"/>
        </div>
    </nav>
);
}
