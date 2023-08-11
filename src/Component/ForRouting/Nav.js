import React from 'react';
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div>
        <nav className='badhon'>
            <Link to="./">HOME</Link>
            <Link to="about">ABOUT</Link>
            <Link to="contact">CONTACT</Link>
            <Link to="/Badhon/sdfggddfgdfgdfg">BADHON</Link>
            <Link to="raja">RAJA</Link>
        </nav>

        </div>
    );
};

export default Nav;