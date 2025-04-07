import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'

const Dashboard = () => {

  const navigate = useNavigate();

  return (
    <div className='min-h-screen'>

      {/* Navbar for Recruiter Panel */}
      <div className='shadow py-4'>
        <div className='flex items-center justify-between px-10 '>
          <img onClick={() => navigate('/')} className='max-sm:w-32 cursor-pointer' src={assets.logo} alt="" />
          <div className='flex items-center gap-3 '>
            <p className='max-sm:hidden'>Welcome, GreatStack</p>
            <div className='relative group'>
              <img className='w-8 border border-gray-200 rounded-full' src={assets.company_icon} alt="" />
              <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12'>
                <ul className='list-none border border-gray-200 m-0 p-2 bg-white text-sm  '>
                  <li className='py-1 px-2 pr-10 cursor-pointer'>Logout</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex items-start'>
        {/* Left sidebar with option  to add job, manage jobs , view application */}
        <div className='inline-block min-h-screen border-r-2 border-gray-200'>
          <ul className='flex flex-col pt-5 text-gray-800 items-start' >
            <NavLink to={'/dashboard/add-job'}
              className={({ isActive }) => `flex items-center gap-2 p-3 sm:px-6 w-full hover:bg-gray-100 ${isActive && 'bg-blue-100 border-r-4 border-blue-500'}`}>
              <img className='min-w-4' src={assets.add_icon} alt="" />
              <p className='max-sm:hidden'>Add Job</p>
            </NavLink>
          </ul>
          <ul>
            <NavLink to={'/dashboard/manage-jobs'}
              className={({ isActive }) => `flex items-center gap-2 p-3 sm:px-6 w-full hover:bg-gray-100 ${isActive && 'bg-blue-100 border-r-4 border-blue-500'}`}>
              <img className='min-w-4' src={assets.home_icon} alt="" />
              <p className='max-sm:hidden'>Manage Jobs</p>
            </NavLink>
          </ul>
          <ul>
            <NavLink to={'/dashboard/view-applications'}
              className={({ isActive }) => `flex items-center gap-2 p-3 sm:px-6 w-full hover:bg-gray-100 ${isActive && 'bg-blue-100 border-r-4 border-blue-500'}`}>
              <img className='min-w-4' src={assets.person_tick_icon} alt="" />
              <p className='max-sm:hidden'>View Applications</p>
            </NavLink>
          </ul>
        </div>
        <div>
          <Outlet />
        </div>
      </div>


    </div>
  )
}

export default Dashboard
