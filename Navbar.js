import { click } from '@testing-library/user-event/dist/click';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton);

  return (
<>
    <nav className="navbar">
        <div className="navbar-container">
            <Link to='/' className="navbar-logo">
                True Faith <i className='fab fa-typo3' />
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fa-solid fa-bars'} />
            </div>
            <ul className={click ? 'nav.menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/previousentries' className='nav-links' onClick={closeMobileMenu}>
                        Previous Entries
                    </Link>
                    </li>
                    <li className='nav-item'>
                    <Link to='/newentry' className='nav-links' onClick={closeMobileMenu}>
                        New Journal Entry
                    </Link>
                    </li>
                    <li className='nav-item'>
                    <Link to='/signuplogin' className='nav-links-mobile' onClick={closeMobileMenu}>
                        Sign-Up/Login
                    </Link>
                    </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>Sign-Up</Button>}
        </div>
    </nav>
</> 
 )
}

export default Navbar
