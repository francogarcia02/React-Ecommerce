import './App.css';
import Navbar from './components/Navbar/Navbar';
import Landing from './components/Landing/Landing';
import DataContent from './components/DataContent/DataContent';
import Cart from './components/Cart/Cart';
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
                <Route path='/carrito' element={<Cart/>}/>
            </Routes>
            <Footer></Footer>
        </BrowserRouter>
    </div>
  );
};



export default App;
