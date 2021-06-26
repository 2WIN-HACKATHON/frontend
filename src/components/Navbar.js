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
                2WIN-HACKATHON
                </Link>
                
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/Services' className='nav-links' onClick={closeMobileMenu}>
                            Services
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/Login' className='nav-links' onClick={closeMobileMenu}>
                            Login
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/Login' 
                        className='nav-links-mobile' 
                        onClick={closeMobileMenu}>
                            Sign Up
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline' >SIGN UP</Button>}
            </div>
        </nav>     
        </>
    )
}

export default Navbar;