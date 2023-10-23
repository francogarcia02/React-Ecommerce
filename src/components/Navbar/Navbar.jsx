import './Navbar.css';
import { Link } from 'react-router-dom'

const Navbar = () => {

    return(
        <div>
            <header>
                <nav className="Navbar">
                    <Link to="/" className="Navbar__landing" >Ecommerce</Link>
                    <Link to="/menu" className="Navbar__item" >Menu</Link>
                    <Link to="/carrito" className="Navbar__item" >Carrito</Link>
                    <Link to="/login" className="Navbar__obj Navbar__obj_login" >Iniciar sesion</Link>
                    <Link to="/register" className="Navbar__obj Navbar__obj_register">Registrarse</Link>
                </nav>
            </header>
        </div>
    );
};

export default Navbar