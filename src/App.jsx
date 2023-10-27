import './App.css';
import Navbar from './components/Navbar/Navbar';
import Landing from './components/Landing/Landing';
import DataContent from './components/DataContent/DataContent';
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner';
import CartWidget from './components/CartWidget/CartWidget';
import Register from './components/Users/Register/Register';
import Login from './components/Users/Login/Login';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartContext } from './context/CartContext';
import { useState } from 'react';



function App() {
    const [carrito, setCarrito] = useState([])

    const agregarAlCarrito = (prod, cantidad) =>{
        const prodAgregado = {...prod, cantidad};

        const nuevoCarrito = [...carrito];
        const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === prodAgregado.id)

        if(estaEnElCarrito){
            estaEnElCarrito.cantidad += cantidad;
        }
        else{
            nuevoCarrito.push(prodAgregado)
        }
        setCarrito(nuevoCarrito);

    }

    const productosEnCarrito = (acc, prod) =>{
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
    }

    return (
        <CartContext.Provider value={{ carrito, agregarAlCarrito, productosEnCarrito }}>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Landing/>}/>
                    <Route path='/menu' element={<DataContent/>}/>
                    <Route path='/menu/:categoria' element={<DataContent/>}/>
                    <Route path="/item/:id" element={<ItemDetailConteiner/>}/>
                    <Route path='/carrito' element={<CartWidget/>}/>
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/login' element={<Login/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </CartContext.Provider>
  );
};



export default App;
