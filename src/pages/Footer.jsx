import React from 'react'
import { BiLocationPlus } from 'react-icons/bi'
import { IoIosMail } from 'react-icons/io'
import { LuPhoneCall } from 'react-icons/lu'
import { MdLocationPin } from 'react-icons/md'
import { NavLink } from 'react-router-dom'


const Footer = () => {
    return (
        <>
            <div className=' h-20   '>


                <div className='flex justify-around py-1  border-t-2  border-gray-800'>
                    <div>
                        <h1 className='flex items-center  gap-3 ' > <MdLocationPin />   Find Us
                        </h1>
                        <p className='text-gray-400'> pune, Mharastra</p>

                    </div>
                    <div>
                        <h2 className='flex items-center gap-3'> <LuPhoneCall /> Call us
                        </h2>
                        <p className='text-gray-400'>+91 98430484333</p>
                    </div>

                    <div >
                        <h2 className='flex  items-center gap-3'> <IoIosMail /> Mail us
                        </h2>
                        <p className='text-gray-400  '>Sahil@12</p>
                    </div>
                </div>
                <div className='py-3 bg-black px-38 flex justify-between '>
                    <p>Copyright &copy; {new Date().getFullYear()}. All right reserved <span className='text-blue-600'>Sahil Technical</span> </p>
                    <NavLink to='/' >
                        <aside className='text-gray-300 font-medium'>
                            Home
                        </aside>
                    </NavLink>

                </div>
            </div>
        </>
    )
}

export default Footer