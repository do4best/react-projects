import React from 'react';
import {Link} from 'react-router-dom'
import './styles.css'
function Nav(props) {
    return (
        <>
            <ul className={"Nav-wrapper"}>
                <li >
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/cart'}>Cart</Link>
                </li>
            </ul>
        </>
    );
}

export default Nav;