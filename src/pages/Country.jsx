import React, { useState } from 'react'
import Countrydata from '../Components/Countrydata'


const Country = () => {
  const [search, setsearch] = useState('')
  const [filter, setfilter] = useState('all')
  const [order, setorder] = useState('')

   const inputHandler =(e)=>{
    setsearch(e.target.value)


  }

  const filterHandler = (e)=>{
   const value = e.target.value
   setfilter(value)
    console.log(value)
  }


  return (
    <>
      <div className='flex mt-3 pt-10  border-gray-500  justify-between w-full items-center'>
       
        <input
        value={search}
        onChange={inputHandler}
         type="text" placeholder='search' className='rounded-2xl border-2 border-gray-500 px-2 py-1 outline-none ' />

         <div className='flex gap-5'>
          <button className='border-2 border-gray-600 hover:text-blue-500  outline-none rounded-full px-5 py-1'  onClick={() => setorder("asc")}>Asc</button>
          <button  className='border-2 border-gray-600 hover:text-blue-500  outline-none rounded-full px-5 py-1' onClick={() => setorder("desc")}>Dec</button>
         </div>


        <select
        onChange={filterHandler}
        value={filter}
         className='border-2 py-1 border-gray-500 rounded-full outline-none'>
          <option value= 'all' className='text-black bg-white'>All</option>
          <option value="Asia" className='text-black bg-white'>Asia</option>
          <option value="Americas" className='text-black bg-white'>Americas</option>
          <option value="Europe" className='text-black bg-white'>Europe</option>
          <option value="Oceania" className='text-black bg-white'>Oceania</option>
         
        </select>



      </div>
      <Countrydata search={search} setsearch ={setsearch} filter ={filter} setfilter = {setfilter} order={order}  />


    </>
  )
}

export default Country