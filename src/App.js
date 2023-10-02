import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
};



export default App;
