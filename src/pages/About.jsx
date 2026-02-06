import React from 'react'
import Data from '../Json/data.json'


const About = () => {



  return (
    <div className='h-full px-4  mt-5'>
      <div className='text-center' >
        <h1 className='flex flex-col text-3xl'>Here are the Intersting facts <span> we're proud of</span></h1>
      </div>


      <div className='grid grid-cols-1  sm:grid-cols-1 sm:w-full lg:grid-cols-3 gap-5 mt-5 h-55 sm:h-full overflow-auto py-3 mb-5  '>
        {Data.map((country, index) => {
          return <div key={index} className='h-auto lg:w-80 bg-[linear-gradient(135deg,#000000,#001a4d)]    flex flex-col gap-4 cursor-pointer hover:shadow-xl shadow-blue-950 hover:scale-95 transition-all duration-300 px-4 py-4 rounded '>
            <h1 className='text-xl font-semibold '>{country.country}</h1>
            <div>

              <div>
                <p className='text-white/55'>Capital: <span className='text-white'>{country.capital}</span></p>
              </div>
              <div>
                <p className='text-white/55'>population:<span className='text-white' >{country.population}</span></p>
              </div>
              <div>
                <p className='text-white/55'>InterstingFacts:<span className='text-white' >{country.interestingFacts}</span></p>
              </div>

            </div>

          </div>

        })}



      </div>
    </div>
  )
}

export default About