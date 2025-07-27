import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: () => React.JSX.Element = () => {
    return (
        <nav className="navbar"> 
            <Link to ="/">
                <p className="text-2xl font-bold text-gradient"> CVision </p>
            </Link>
            <Link to ="/upload" className="primary-button w-fit">
                <p>Envoyer mon CV</p>
            </Link>
        </nav>
    )
}

export default Navbar;