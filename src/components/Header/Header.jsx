import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss'
import Cart from '../Cart/Cart.jsx'
export default function Header({items}) {

    const [cartOpen, setcartOpen] = React.useState(false);
    const [sideBar,setSideBar] = React.useState(false)
    const toggleCart = () => {
        setcartOpen(!cartOpen);
    };
    const toggleBar = () =>{
        setSideBar(!sideBar)
    }
  return(
    <>
    <nav>
        <div className="flexnav">
            <img className='flexnav-burger' src="./images/icon-menu.svg" alt="menu" onClick={toggleBar} />
            <img className='flexnav-logo' src="./images/logo.svg" alt="logo"/>
            <div className={`${sideBar === true ? "flexnav-sidebar" : ""}`}>
                <img className={`${sideBar === true ? "flexnav-sidebar-close" : "close"}`} src="./images/icon-close.svg" alt="close menu" onClick={toggleBar} />
                <Link to='/'>Collections</Link>
                <Link to='/'>Men</Link>
                <Link to='/'>Women</Link>
                <Link to='/'>About</Link>
                <Link to='/'>Contact</Link>
            </div>
        </div>
        <div className='flexCart'>
            
            <img src="./images/icon-cart.svg" onClick={toggleCart} alt="cart" />
            <img className='flexCartAvatar' src="./images/image-avatar.png" alt="user-avatar"/>
        </div>
    </nav>
    
    <Cart cartOpen={cartOpen} cartClose={toggleCart} items={items}/>
    </>
);
}
