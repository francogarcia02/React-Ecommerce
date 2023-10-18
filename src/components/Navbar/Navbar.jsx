import './Navbar.css';
import { useState } from 'react';
import Cart from '../Cart/Cart'
import DataContent from '../DataContent/DataContent'
import Landing from '../Landing/Landing'


const Navbar = () => {

    const [landingOn, setlandingOn] = useState(true);
    const [menuOn, setmenuOn] = useState(false);
    const [cartOn, setcartOn] = useState(false);

    const [claseMenu, setclaseMenu] = useState("Navbar__item");

    const abrirMenu = () =>{
        setlandingOn(false)
        setcartOn(false)
        setmenuOn(true)
        setclaseMenu("Navbar__item-use")
    }

    const abrirCarrito = () =>{
        setlandingOn(false)
        setmenuOn(false)
        setcartOn(true)
        setclaseMenu("Navbar__item")
    }

    const abrirLanding = () =>{
        setmenuOn(false)
        setcartOn(false)
        setlandingOn(true)
        setclaseMenu("Navbar__item")
    }

    return(
        <div>
            <header className="stopper">
                <nav className="Navbar">
                    <button onClick={abrirLanding} className="Navbar__landing" >Ecommerce</button>
                    <button onClick={abrirMenu} className={claseMenu} >Menu</button>
                    <button onClick={abrirCarrito} className="Navbar__item" >Carrito</button>
                    <a className="Navbar__obj Navbar__obj_login" href="" >Iniciar sesion</a>
                    <a className="Navbar__obj Navbar__obj_register" href="" >Registrarse</a>
                </nav>
            </header>
            <main>
                {menuOn === true &&
                    <DataContent></DataContent>
                }
                {landingOn === true &&
                    <Landing></Landing>
                }
                {cartOn === true &&
                    <Cart></Cart>
                }
            </main>
        </div>
    );
};

export default Navbar