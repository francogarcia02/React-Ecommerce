import './CheckOut.css';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { UserContext } from '../../context/UserContext';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { Link } from 'react-router-dom'


const CheckOut = () =>{
    const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext)
    const { user } = useContext(UserContext)
    const pedidos = collection(db, 'pedidos');
    const [confirm, setConfirm] = useState(false)

    const pedido = {
        cliente: user,
        pedido: carrito,
        precioTotal: precioTotal()
    }

    const comprar = () =>{
        addDoc(pedidos, pedido)
            .then((resp) =>{
                setConfirm(resp.id)
                vaciarCarrito()
            })
    }

    if(confirm){
        return(
            <div className="CheckEnd">
                <h3 className="CheckEnd__title">Pedido encargado</h3>
                <p className="CheckEnd__text">Identificador de pedido: {confirm}</p>
            </div>
        )
    }

    return(
        <div className='CheckOut'>
            <h1 className="CheckOut__title">¿Desea confirmar la compra?</h1>
            <div className="CheckOut__data">
                <h4>Precio a pagar: ${precioTotal()}</h4>
                <h4>A nombre de: {user.nombre} {user.apellido}</h4>
            </div>
            <div className="CheckOut__ends">
                <Link className="ends__button-cancel" to="/carrito">Cancelar</Link>
                <button className="ends__button-confirm" onClick={comprar}>Confirmar</button>
            </div>
        </div>
    )
}

export default CheckOut;