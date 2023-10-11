import './Navbar.css';
import { useState } from 'react';
import DataContent from '../DataContent/DataContent'
import Landing from '../Landing/Landing'

const Navbar = () => {

    const [menuOn, setmenuOn] = useState(false);

    const abrirMenu = () =>{
        setmenuOn(true)
    }

    const abrirLanding = () =>{
        setmenuOn(false)
    }

    return(
        <header className="stopper">
            <nav className="Navbar">
                <button onClick={abrirLanding} className="Navbar__landing" >Ecommerce</button>
                <button onClick={abrirMenu} className="Navbar__menu" >Menu</button>
                <a className="Navbar__obj Navbar__obj_login" href="" >Iniciar sesion</a>
                <a className="Navbar__obj Navbar__obj_register" href="" >Registrarse</a>
            </nav>
            {menuOn == true &&
                <DataContent></DataContent>
            }
            {menuOn == false &&
                <Landing></Landing>
            }
        </header>
    );
};

export default Navbar