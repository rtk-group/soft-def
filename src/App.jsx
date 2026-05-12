import React from 'react';
import Home from './pages/Home.jsx'
import Navbar from './component/Navbar.jsx';
import Products from './pages/Products.jsx'
import Footer from './component/Footer.jsx';

function App() {

  return (
    <>
    <Navbar/>
      <Home />
      <Footer />
      {/* < Products/> */}
    </>
  )
}

export default App
