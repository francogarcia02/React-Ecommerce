import './App.css';
import Navbar from './components/Navbar/Navbar'
import DataContent from './components/DataContent/DataContent'
import Landing from './components/Landing/Landing'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Landing></Landing>
      <hr></hr>
      <DataContent></DataContent>
      <Footer></Footer>
    </div>
  );
};



export default App;
