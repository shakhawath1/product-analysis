import React from 'react';
// import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <nav className='flex justify-center text-lg font-semibold text-fuchsia-700 m-5'>
            <CustomLink className='m-5' to='/'>HOME</CustomLink>
            <CustomLink className='m-5' to='/reviews'>REVIEWS</CustomLink>
            <CustomLink className='m-5' to='/dashboard'>DASHBOARD</CustomLink>
            <CustomLink className='m-5' to='/blogs'>BLOGS</CustomLink>
            <CustomLink className='m-5' to='/about'>ABOUT</CustomLink>
        </nav>
    );
};

export default Header;