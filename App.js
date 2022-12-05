
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';

  
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
            <Route   exact path ='/' element={<Home/>}/>
            <Route    path ='/About' element={<About/>}/>
            <Route    path ='/Contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
   


     </>
  );
}


export default App;
