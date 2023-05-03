import React, { useContext, useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import ActiveLink from '../../../activeLink/ActiveLink';

import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';

const Header = () => {
    const {user} = useContext(AuthContext);
    const [open, setOpen] =useState(false);

    return (
        <div className='my-container'>
            <div className='flex justify-between p-6 md:hidden'>
                <h1 className='mb-4 text-2xl font-extrabold md:text-3xl text-regalBlack md:mb-0'>Cooking With Cares</h1>
                <div onClick={() => setOpen(!open)}>
                    <span>
                        {
                            open === true ? 
                            <XMarkIcon className="w-6 h-6 text-purple-500" /> 
                            : <Bars3Icon className="w-6 h-6 text-purple-500" />
                        }
                    </span>
                </div>
            </div>
            <div className={`flex flex-col md:flex-row absolute md:static md:items-center justify-between bg-gray-200 p-4 duration-500 ${open ? 'top-12' : '-top-96'}`}>
                    <h1 className='hidden mb-4 text-2xl font-extrabold md:block md:text-3xl text-regalBlack md:mb-0'>Cooking With Care</h1>
                    <nav className='flex flex-col gap-2 text-base font-bold md:gap-10 md:flex-row'>
                        <ActiveLink to="/">Home</ActiveLink>
                        <ActiveLink to="/blog">Blog</ActiveLink>
                        <p>
                            {user ? <span>{user.displayName}</span> : <Link to="/login">Login</Link>}
                        </p>
                    </nav>
            </div>
        </div>
    );
};

export default Header;