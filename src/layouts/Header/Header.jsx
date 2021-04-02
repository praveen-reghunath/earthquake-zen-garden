import { Link } from 'react-router-dom'
import { useAppState } from 'state/appState';

import './Header.scss';

function Header() {
    const { userName, siteInfo: { logoImage, title } = {} } = useAppState();
    return (
        <header className="header">
            <Link to="/">
                <img src={logoImage} alt="logo image" className="logo-image" />
            </Link>
            <h1>{title}</h1>
            <Link to="/profile">
                <span>Welcome </span>
                <span>{userName}</span>
            </Link>
        </header>
    );
}

export default Header;