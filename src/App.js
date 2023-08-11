
import './App.css';
import Form from './Component/Form/Form';
import About from './Component/ForRouting/About';
import Contact from './Component/ForRouting/Contact';
import Badhon from './Component/ForRouting/Badhon';
import Raja from './Component/ForRouting/Raja';
import Nav from './Component/ForRouting/Nav';
import { Routes,Route } from 'react-router-dom';
import Footer from './Component/ForRouting/Footer';


function App() {
  return (
    <>
     <Nav></Nav>
    <Routes>
      
    <Route path='/' element={<Form/>}/>
    <Route path='/About' element={ <About/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='/Badhon/:id' element={ <Badhon/>}/>
    <Route path='/Raja' element={ <Raja/>}/>
    
    
   
   
    </Routes>
    <Footer/>
   </>
    
    
  );
}

export default App;
