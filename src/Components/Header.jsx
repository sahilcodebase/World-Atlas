
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Header = () => {

  return (
    <>
    <main className='flex flex-1  items-center justify-between  mb-20'>
    
    <div className='flex  flex-col gap-3'>
        <p className='text-3xl'>Explore the world ,<br />country at a time</p>
        <p className='text-gray-400' >Discover the history, culture and beauty of every nation Start. search and <br /> filter through countries to find the details you need</p>
      <NavLink to='/country'>
          <button className='px-4 lg:w-45 py-2 rounded-full bg-white flex items-center gap-3 hover:bg-pink-500 hover:text-white text-black transition-all duration-300 font-medium'>Start Exploring <FaArrowRightLong /></button>

      </NavLink>
    </div>
    <img  src="world.png" alt="img" className='sm:h-110 h-20 hidden sm:inline ' />
  </main>
    </>
  )
}

export default Header