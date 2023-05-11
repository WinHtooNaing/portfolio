
import {Routes, Route } from 'react-router-dom';
import './App.scss';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Tip from './components/Tip';


function App() {
  return (
    <>
    <Routes>
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='tip' element={<Tip />} />

    </Route>
    </Routes>
    </>
  );
}

export default App;
