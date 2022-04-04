import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className='text-lg font-semibold text-fuchsia-700 m-5'>
                <Link className='m-5' to='/'>HOME</Link>
                <Link className='m-5' to='/reviews'>REVIEWS</a>
                <Link className='m-5' to='/dashboard'>DASHBOARD</Link>
                <Link className='m-5' to='/blogs'>BLOGS</Link>
                <Link className='m-5' to='/about'>ABOUT</Link>
            </nav>
        </div>
    );
};

export default Header;