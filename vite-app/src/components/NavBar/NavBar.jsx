import React from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className='NavBar'>
            <Link to='/'>
                <h3>Locker</h3>
            </Link>
            <div className='Categories'>
                <NavLink to={`/category/Muebles`} className={({ isActive }) => (isActive ? 'ActiveOption' : 'Option')}
                >Muebles</NavLink>
                <NavLink to={`/category/Deco`} className={({ isActive }) => (isActive ? 'ActiveOption' : 'Option')}
                >Deco</NavLink>
            </div>
            <CartWidget />
        </nav>
    );
};

export default NavBar;
