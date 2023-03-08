import './App.css';
import Footer from './shared/Footer/Footer.js';
import Header from './shared/Header/Header.js';
import { Routes, Route } from 'react-router-dom';
import Carspage from './pages/Carspage/Carspage.js';
import Contactpage from './pages/Contactpage/Contact.js';
import Homepage from './pages/Homepage/Homepage.js';

function App() {
  return (
    <body>
      <Header/>
        <Routes>
          <Route path='/' element={<Homepage/>}></Route>
          <Route path='/cars' element={<Carspage/>}></Route>
          <Route path='/contact' element={<Contactpage/>}></Route>
        </Routes>
      <Footer/>
    </body>
  );
}

export default App;
