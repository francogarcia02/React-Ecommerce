import './Cart.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartItem from './CartItem/CartItem';


const Cart = () =>{
    const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext)

    const handleVaciar = () =>{
        vaciarCarrito();
    }

    return(
        <div className="Justifier">
            <h1 className="Cart__title">Carrito</h1>
            {carrito.length > 0 ?
                <>
                    {carrito.map((prod) =>(
                        <CartItem key={prod.id} prod={prod}/>
                    ))}
                    <div className="Total">
                        <h3>precio total: {precioTotal()}</h3>
                        <button onClick={handleVaciar}>Vaciar</button>
                    </div>

                </>:
                <div className="Cart__empty">
                    <h1 className="Empty__title">Carrito vacio</h1>
                </div>
            }
        </div>
    )
}

export default Cart