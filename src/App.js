import './App.css';
import Topbar from './components/Topbar/Topbar.jsx';
import Navbaract from './components/Navbaract/Navbaract.jsx'
import Front from './components/Front/Front';
import About from './components/About/About';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Topbar></Topbar>
      <Navbaract></Navbaract>
      <Front></Front>
      <About></About>
    </div>
  );
}

export default App;
