import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import { Button } from './Button';
import './resources/Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick=()=> setClick(!click);
    const closeMobileMenu=()=> setClick(false);

    const  showButton = () =>{
        if(window.innerWidth <= 960)
            setButton(false);
        else
            setButton(true);
    };

    useEffect(() =>{
        showButton()
    },[]);

    window.addEventListener('resize', showButton);

    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link className="navbar-logo">
                2WIN-HACK
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i class={click ? "fas fa-times": "fas fa-bars"} />
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/Mail' className='nav-links' onClick={closeMobileMenu}>
                            Compose
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/Inbox' className='nav-links' onClick={closeMobileMenu}>
                            Inbox
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/Login' className='nav-links' onClick={closeMobileMenu}>
                            Login
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/SignUp' className='nav-links' onClick={closeMobileMenu}>
                            SignUp
                        </Link>
                    </li>
                    
                </ul>
            </div>
        </nav>     
        </>
    )
}

export default Navbar;