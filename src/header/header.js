import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <nav id="header">
            <div className='container'>
                <div className='header-container'>
                    <div className='col col-header-logo'>
                        <Link to="/"><img src="/logo-color.svg" height="64px"></img></Link>
                    </div>
                    <div className='col col-header-menu'>
                        <ul className="main-menu">
                            <li className="menu-item hide-mobile"><Link to="/" className='hoverbutton'>Home</Link></li>
                            <li className="menu-item"><Link to="/comerciales" className='hoverbutton'>Comerciales</Link></li>
                            <li className="menu-item"><Link to="/industriales" className='hoverbutton'>Industriales</Link></li>
                            <li className="menu-item hide-mobile"><a href="/#section-mission" className='hoverbutton'>Misión</a></li>
                            <li className="menu-item hide-mobile"><a href="/#section-history" className='hoverbutton'>Historia</a></li>
                            <li className="menu-item hide-mobile"><a href="/#section-contact" className='hoverbutton'>Contacto</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;
