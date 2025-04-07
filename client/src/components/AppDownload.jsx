import React from 'react'
import { assets } from '../assets/assets'

const AppDownload = () => {
  return (
    <div className='container px-4 2xl:px-20 mx-auto my-20'>
      <div className='relative p-12 sm:p-24 xl:p-32 bg-gradient-to-r from-violet-50 to-purple-50 rounded-lg '>
        <h1 className='text-2xl sm:text-4xl mb-8 font-bold max-w-md'>Download Mobile App For Better Experience</h1>
        <div  className='flex gap-4 '>
            <a className='inline-block' href="">
                <img className='h-12' src={assets.play_store} alt="" />
            </a>
            <a className='inline-block' href="">
                <img className='h-12' src={assets.app_store} alt="" />
            </a>
        </div>
        <img className='absolute right-0 bottom-0 w-80 mr-32 ' src={assets.app_main_img} alt="" />
      </div>
      
    </div>
  )
}

export default AppDownload
