import './index.css';
import './styles/fonts.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
       <h1>Moon</h1>
       <Footer/>
    </div>
  );
}

export default App;
