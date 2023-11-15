import './CheckOut.css';
import {useContext} from 'react';
import { CartContext } from '../../context/CartContext';


const CheckOut = () =>{
    const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext)
    return(
        <div className='Justifier'>CheckOut</div>
    )
}

export default CheckOut;