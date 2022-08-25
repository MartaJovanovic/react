import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Proizvodi from './components/Proizvodi'

function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <Proizvodi/>
    </div>
  );
}

export default App;
