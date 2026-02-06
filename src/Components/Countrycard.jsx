import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Axios from 'axios'
import Loader from './Loader'
import { IoArrowRedoCircleSharp } from "react-icons/io5";



const CountryCard = () => {

    const { id } = useParams()
    
    const [country, setcountry] = useState(null)
    useEffect(() => {
        if (!id) return
        const Api = async function () {
            try {
                const dataApi = await Axios.get(`https://restcountries.com/v3.1/name/${id}`)

                setcountry(dataApi.data[0])


            } catch (error) {

                console.log(error)

            }
        }

        Api()
    }, [id])

    if (!country) return (<Loader />)

    return (
        <>
            <div className=' border-t-2 pt-10 border-b-2 border-t-gray-600 border-b-gray-800'>
       
     <NavLink to='/country'>
           <div className='text-4xl  flex justify-end'>
            <IoArrowRedoCircleSharp />
        </div>
       
     </NavLink>
                
                <div className='grid grid-cols-1 sm:grid-cols-2 items-center px-12  py-10 '>

                    <img src={country.flags.png} alt="image" className='h-50 max-w-70 object-cover' />

                    <ul className='flex flex-col gap-4 py-3'>
                        <li className='text-white text-2xl'  >{country.name.common}</li>
                        <li className='text-white/55 '  >Native Names: <span className='text-white  px-2 ' >   {Object.values(country.name.nativeName || {})
                            .map(n => n.common)
                            .join(", ")}</span> </li>
                        <li className='text-white/55' >Region:  <span className='text-white  px-2  '  >{country.
                            region
                        }</span> </li>
                        <li className='text-white/55' >Population:  <span className='text-white  px-2  '  >{country.population}</span> </li>
                        <li className='text-white/55' >SubRegion:  <span className='text-white   px-2  '  >{country.subregion}</span> </li>
                        <li className='text-white/55' >Capital:  <span className='text-white  px-2  '  >{country.capital}</span> </li>
                        <li className='text-white/55' >Top level Domain:  <span className='text-white  px-2  '  >{country.tld}</span> </li>
                        <li className='text-white/55' >Top level curriences:  <span className='text-white  px-2  '  >   {Object.values(country.currencies || {})
                            .map(c => c.name)
                            .join(", ")}</span> </li>
                        <li className='text-white/55' >Languages:  <span className='text-white  px-2  '  >    {Object.values(country.languages || {}).join(", ")}</span> </li>

                    </ul>


                </div>









            </div>
        </>
    )
}

export default CountryCard
