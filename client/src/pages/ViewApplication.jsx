import React from 'react'
import { Outlet } from 'react-router-dom'
import { assets, viewApplicationsPageData } from '../assets/assets'

const ViewApplication = () => {
  return (
    <div className='container mx-auto p-6 w-full max-w-4xl'>
      <table className='border border-gray-200 '>
        <thead>
          <tr className='border-b border-gray-200'>
            <th className='py-3 px-4 text-left'>#</th>
            <th className='py-3 px-4 text-left '>User Name</th>
            <th className='py-3 px-4 text-left max-sm:hidden'>Job Title</th>
            <th className='py-3 px-4 text-left max-sm:hidden'>Location</th>
            <th className='py-3 px-4 text-left'>Resume</th>
            <th className='py-3 px-4 text-left'>Action</th>
          </tr>
        </thead>
        <tbody>
          {viewApplicationsPageData.map((applicant , index) => (
            <tr key={index} className='text-gray-600'>
              <td className='py-2 px-4 text-left border-b border-gray-200'>{index + 1}</td>
              <td className='flex items-center py-3 px-4 text-left border-b border-gray-200'>
                <img className='w-10 h-10 rounded-full max-sm:hidden mr-3' src={applicant.imgSrc} alt="" />
                <span>{applicant.name}</span>
              </td>
              <td className='py-2 px-4 border-b border-gray-200 max-sm:hidden'>{applicant.jobTitle}</td>
              <td className='py-2 px-4 text-left border-b border-gray-200 max-sm:hidden'>{applicant.location}</td>
              <td className='py-2 px-4  border-b border-gray-200'>
                <a href="" target='blank'
                className='bg-blue-50 text-blue-400 inline-flex px-3 py-1 rounded gap-2 items-center '>
                  Resume <img src={assets.resume_download_icon} alt="" />
                </a>
              </td>
              <td className='py-2 px-4 border-b border-gray-200'>
                <div className='relative inline-block group text-left'>
                  <button className='text-gray-500 action-button'>...</button>
                  <div className='absolute hidden right-0 md:left-0 z-10 top-0 mt-2 w-32 group-hover:block bg-white border border-gray-200 rounded shadow'>
                   <button className='block w-full text-left text-blue-500 hover:bg-gray-100 px-4 py-2'>Accept</button>
                   <button className='block w-full text-left text-red-500 hover:bg-gray-100 px-4 py-2'>Reject</button>
                  </div>
                </div>
              </td>
             
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ViewApplication
