import './Navbar.css';
import { Link } from 'react-router-dom'

const Navbar = () => {

    return(
        <div>
            <header className="stopper">
                <nav className="Navbar">
                    <Link to="/" className="Navbar__landing" >Ecommerce</Link>
                    <Link to="/menu" className="Navbar__item" >Menu</Link>
                    <Link to="/carrito" className="Navbar__item" >Carrito</Link>
                    <Link className="Navbar__obj Navbar__obj_login" href="" >Iniciar sesion</Link>
                    <Link className="Navbar__obj Navbar__obj_register" href="" >Registrarse</Link>
                </nav>
            </header>
        </div>
    );
};

export default Navbar