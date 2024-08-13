import logo from './Component/Imgs/img/logo.png';
import './App.css';
import Nav from './Component/Nav';
import Section1 from './Component/Section1';
import About from './Component/About';
import Menu from './Component/Menu'
import Services from './Component/Services';
import Footer from './Component/Footer'
import { Routes , Route } from 'react-router-dom'
import Routing from './Component/Routing'

function  App() {
  return (
    <>
     
   <Routing/>

    <Routes>
      <Route path='/' element={<Section1/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/menu' element={<Menu/>}/>
      <Route path='/service' element={<Services/>}/>

    </Routes>
    
    
    </>
  );
}

export default App;
