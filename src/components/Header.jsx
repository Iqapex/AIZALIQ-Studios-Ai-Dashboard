import React, { useEffect } from 'react';
import './styles/header.css';

function Header() {
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                document.body.classList.add('scrolled');
            } else {
                document.body.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="header">
            <h1 className="logo">Welcome AizalIQ</h1>
            <button className="logout-button">Logout</button>
        </header>
    );
}

export default Header;
