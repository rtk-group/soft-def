import React from 'react';
import Home from './pages/Home.jsx'
import Navbar from './component/Navbar.jsx';
import Products from './pages/Products.jsx'
import Hero from './component/Hero.jsx';
import { images } from './assets/images.js';
import Heading from './component/Heading.jsx';
import Trending from './component/Trending.jsx';
import TopSelling from './pages/TopSelling.jsx';
import CusReview from './pages/CusReview.jsx';
import OurBest from './pages/OurBest.jsx';

// import Footer from './component/Footer.jsx';

function App() {

  return (
    <div className=''>
    <Navbar />
                    <div className=" relative  w-full min-h-screen lg:h-[2592px]">
                      
                        <img src={images.home_bg} alt="background image" className="absolute inset-0 w-full h-full object-cover -z-10" />
                        {/* Hero Section */}
                        <Hero />
                        {/* Top Trending Section */}
                        <Trending />
                    </div>
                        {/* Top Selling Section */}
                        <TopSelling />
                        {/* Customer Review Section */}
                        <CusReview />
                        {/* Our Best Section */}
                        <OurBest />

                
    </div>
  )
}

export default App
