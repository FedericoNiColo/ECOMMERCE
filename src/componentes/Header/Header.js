import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <Link to="/">
                <img className="header__logo" src="/Img/logo.png" alt="logo"/>
            </Link>
        </header>
    )
}

export default Header;