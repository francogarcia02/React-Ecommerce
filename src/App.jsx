import './App.css';
import Navbar from './components/Navbar/Navbar';
import Landing from './components/Landing/Landing';
import DataContent from './components/DataContent/DataContent';
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner';
import Cart from './components/Cart/Cart';
import Register from './components/Users/Register/Register';
import Login from './components/Users/Login/Login';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Landing/>}/>
                <Route path='/menu' element={<DataContent/>}/>
                <Route path='/menu/:categoria' element={<DataContent/>}/>
                <Route path="/item/:id" element={<ItemDetailConteiner/>}/>
                <Route path='/carrito' element={<Cart/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/login' element={<Login/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    </div>
  );
};



export default App;
