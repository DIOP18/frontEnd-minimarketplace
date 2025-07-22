
import './App.css'
 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './composants/Layout'

import Home from './pages/Home'
 import About from './pages/About'
import Contact from './pages/Contact'


function App() {
 

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>} />
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
     </BrowserRouter>
    
    </>
  )
}

export default App
