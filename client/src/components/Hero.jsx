import React, { useContext, useRef } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'

const Hero = () => {
    const { setSearchFilter , setIsSearched } = useContext(AppContext)

    const titleRef = useRef(null)
    const locationRef = useRef(null)

    const onSearch = () => {
        setSearchFilter({
            title : titleRef.current.value,
            location : locationRef.current.value
        })
        setIsSearched(true)
    }
    
    return (
        <div className='container 2xl:px-20 mx-auto my-10'>
            <div className='bg-gradient-to-r from-purple-800 to-purple-950  py-16 mx-2 text-white text-center rounded-xl '>
                <h2 className='text-2xl md:text-3xl lg:text-4xl font-medium mb-4'>Over 10,000+ jobs to apply</h2>
                <p className='text-center mb-8 font-light px-5 max-w-xl mx-auto'>Your Next Big Career Move Starts Right Here - Explore the Best Job Opportunities and Take the First Step Toward Your Future!</p>
                <div className='flex justify-center items-center bg-white text-gray-600 max-w-xl sm:mx-auto mx-4 pl-6 rounded'>  
                    <div className='flex items-center'>
                        <img className='h-4 sm:h-5'src={assets.search_icon} alt="" />
                        <input type="text"
                            placeholder='Search for jobs'
                            className='max-sm:text-xs rounded p-2 w-full outline-none'
                            ref={titleRef}
                             />
                    </div>
                    <div className='flex items-center'>
                        <img className='h-4 sm:h-5' src={assets.location_icon} alt="" />
                        <input type="text"
                            placeholder='Location'
                            className='max-sm:text-xs rounded p-2 w-full outline-none '
                            ref={locationRef} />
                    </div>
                    <button onClick={onSearch} className='bg-blue-600 text-white px-6 py-2 m-1 rounded' >Search</button>
                </div>
            </div>

            <div className='mt-10 mx-4 border border-gray-300 shadow-md p-6 rounded-md'>
                <div className='flex items-center flex-wrap gap-10 lg:gap-16 '>
                    <p className='font-medium'>Trusted by</p>
                    <img className='h-6 ' src={assets.microsoft_logo} alt="" />
                    <img className='h-6 ' src={assets.walmart_logo} alt="" />
                    <img className='h-6 ' src={assets.accenture_logo} alt="" />
                    <img className='h-6 ' src={assets.samsung_logo} alt="" />
                    <img className='h-6 ' src={assets.amazon_logo} alt="" />
                    <img className='h-6 ' src={assets.adobe_logo} alt="" />
                </div>
            </div>


        </div>
    )
}

export default Hero
