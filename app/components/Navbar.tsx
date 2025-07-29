import React from 'react';
import { Link } from 'react-router';
import { usePuterStore } from '../lib/puter';

const Navbar: () => React.JSX.Element = () => {
    const { auth } = usePuterStore();

    return (
        <nav className="navbar"> 
            <Link to="/">
                <p className="text-2xl font-bold text-gradient"> CVision </p>
            </Link>
            <div className="flex items-center gap-4">
                <Link to="/upload" className="primary-button w-fit">
                    <p>Envoyer mon CV</p>
                </Link>
                {auth.isAuthenticated && (
                    <button 
                        onClick={auth.signOut}
                        className="text-dark-200 hover:text-black transition-colors px-3 py-2 text-sm font-medium"
                    >
                        Se déconnecter
                    </button>
                )}
            </div>
        </nav>
    )
}

export default Navbar;