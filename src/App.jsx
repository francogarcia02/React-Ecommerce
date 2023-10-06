import './App.css';
import Navbar from './components/Navbar/Navbar'
import DataContent from './components/DataContent/DataContent'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="contMenu">
        <DataContent></DataContent>
      </div>
    </div>
  );
};



export default App;
