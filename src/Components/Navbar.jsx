import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='h-20 z-50  w-full border-b-2 border-gray-500 flex justify-between px-20 items-center' >

      <NavLink to='/'>
        <h1 className='text-2xl font-medium '>WorldAtlas</h1>
      </NavLink>
      <div className='flex  sm:flex-row  sm:gap-4 flex-col lg:flex-row  lg:gap-11  '>

        <Link to='/' className=' cursor-pointer hover:text-blue-600  transition-all duration-200 ease-out font-light'  >Home</Link>
        <Link to='/about' className=' cursor-pointer hover:text-blue-600 font-light'  >About</Link>
        <Link to='/country' className=' cursor-pointer hover:text-blue-600 font-light'  >Country</Link>
        <Link to='/contact' className=' cursor-pointer hover:text-blue-600 font-light'>Contact</Link>
      </div>
      

    </div>
  )
}

export default Navbar