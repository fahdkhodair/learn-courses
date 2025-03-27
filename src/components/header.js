import React,{ useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './header.css'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
    const [Isscrolled, setIsScrolled] = useState(false)
    const handleScroll = () => {
        if (window.scrollY > 50) { 
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(
        <>
        <header className={`header ${Isscrolled ? 'scrolled' : ''}`}>
        <div className="nav-logo">
             <div className="icon">
        <FontAwesomeIcon icon={faLaptopCode} />    
        <a href="/">learns-courses</a>
        </div>
        </div>
        <nav className={`navbar ${Isscrolled ?'scrolled':''}`}>
        <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#About">About-us</a></li>
                <li><a href="#courses">courses</a></li>
                <li><a href="#contact">contact-us</a></li>
            
        </ul>
    </nav>
    </header>
    </>
    )
}
export default Header;