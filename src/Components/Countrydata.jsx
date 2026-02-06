import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { BiArrowToRight } from 'react-icons/bi'
import { NavLink } from 'react-router-dom'
import Loader from './Loader'


const Countrydata = ({ search, filter, order }) => {

    const [user, setUser] = useState([])


    useEffect(() => {
        const Api = async function () {
            try {
                const dataApi = await Axios.get('https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags')

                setUser(dataApi.data)

                localStorage.setItem("userData", JSON.stringify(dataApi.data))


            } catch (error) {

                const getData = JSON.parse(localStorage.getItem('userData'))

                setUser(getData)
            }
        }

        Api()
    }, [])

    if (user.length === 0) return (<Loader />)

    const setcountry = (country) => {

        if (search) {
            return country.name.common.toLowerCase().includes(search.toLowerCase())
        }


        return country

    }

    const filtercountries = (country) => {
        if (filter === "all") return country;

        return country.region === filter;



    }


    const countries = user.filter((country) => setcountry(country) && filtercountries(country))
    const sortedCountries = [...countries].sort((a, b) =>
        order === "asc"
            ? a.name.common.localeCompare(b.name.common)
            : b.name.common.localeCompare(a.name.common)
    )

    return (
        <>

            <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 mt-9 mb-10'>
                {sortedCountries.map((country, idex) => {
                    return <div key={idex} className='h-auto lg:w-65 border-2 border-gray-500 transition-all duration-500 ease-out hover:scale-95 hover:shadow-xl  flex flex-col gap-2  px-4 py-2 rounded-xl bg-blue-950 '>
                        <img src={country.flags.png} alt="" className='h-40 object-fill
                          hover:scale-95  transition-all duration-100 ease-out ' />
                        <div className='flex flex-col  gap-3'>

                            <div>
                                <p className='text-white text-2xl truncate  w-full block  '>{country.name.common}</p>
                            </div>
                            <div>
                                <p className='text-white/55'>population:  <span className='text-white' >{country.population}</span></p>
                            </div>
                            <div>
                                <p className='text-white/55'>Region:  <span className='text-white' >{country.region}</span></p>

                            </div>
                            <div>
                                <p className='text-white/55  w-full truncate'>Capital:  <span className='text-white' >{country.capital?.[0]}</span></p>

                                <NavLink to={`/country/${country.name.common}`}>
                                    <button className='bg-red-700 rounded-2xl outline-none px-4 py-1 mt-3 flex items-center gap-3 '>

                                        Read more  <BiArrowToRight /></button>
                                </NavLink>

                            </div>




                        </div>
                    </div>
                })}



            </div>


        </>

    )
}

export default Countrydata