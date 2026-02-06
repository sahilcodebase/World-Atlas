
import Home from './pages/Home'
import { Routes, Route, Navigate } from "react-router-dom"
import About from './pages/About'
import Country from './pages/Country'
import Contact from './pages/Contact'

import Navbar from './Components/Navbar'
import Footer from './pages/Footer'
import Header from './Components/Header'
import CountryCard from './Components/Countrycard'
import NotFound from './Components/NotFound'

const App = () => {
  

  return (

    <>
      <div className=' bg-black min-h-screen  transition-all duration-300 ease-in text-white'>
        <Navbar />
        

        <div className='sm:px-24'>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/country" element={<Country />} />
            <Route path="/country/:id" element={<CountryCard />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          
          </Routes>
        </div>
        <Footer />
      </div>


    </>
  )
}

export default App