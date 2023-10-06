import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import dataContent from './components/dataContent/dataContent'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <dataContent/>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
};



export default App;
