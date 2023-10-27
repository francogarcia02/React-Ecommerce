import './CartWidget.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom'

const CartWidget = () =>{
    const {productosEnCarrito} = useContext(CartContext)

    return(
        <div>
            <Link to="/carrito">Carrito</Link>
            <span> {productosEnCarrito()}</span>
        </div>
    )
}

export default CartWidget