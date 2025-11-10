import './App.css';
import Navbar from './Navbar';
import { Routes, Route} from 'react-router-dom';
// import Test from './Test';
import Game from './Game'
import Footer from './Footer'
import Home from './Home'
import Contact from './Contact'
import About from './About';
import Galerry from './Galerry';


function App() {
  return (
    <div id='m'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/game" element={<Game />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/galerry" element={<Galerry />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
