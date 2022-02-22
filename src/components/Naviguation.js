import React from 'react';
import { NavLink } from 'react-router-dom';

const Naviguation = () => {
    return (
        <div className = "naviguation">
            <NavLink exact to="/" activeClassName = "nav-active">
                Accueil
            </NavLink>
            <NavLink exact to="about" activeClassName = "nav-active">
                A propos
            </NavLink>
        </div>
    );
};

export default Naviguation;