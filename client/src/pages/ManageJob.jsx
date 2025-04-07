import React from 'react'
import { manageJobsData } from '../assets/assets'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'

const ManageJob = () => {

  const navigate = useNavigate()
  return (
    <div className='container mx-auto p-6 w-full max-w-5xl'>
      <div className='overflow-x-auto'>
        <table className='border border-gray-200 min-w-full max-sm:text-sm'>
          <thead >
            <tr className='border-b border-gray-200'>
              <th className='px-4 py-2 text-left max-sm:hidden'>#</th>
              <th className='px-4 py-2 text-left'>Job Title</th>
              <th className='px-4 py-2 text-left  max-sm:hidden'>Date</th>
              <th className='px-4 py-2 text-left  max-sm:hidden'>Location</th>
              <th className='px-4 py-2 text-center'>Applicant</th>
              <th className='px-4 py-2 text-left'>Visible</th>
            </tr>
          </thead>
          <tbody>
            {manageJobsData.map((job , index) => (
              <tr key={index} className='text-gray-700'>
                <td className='py-2 px-4 text-left border-b border-gray-200 max-sm:hidden'>{index + 1}</td>
                <td className='py-2 px-4 text-left border-b border-gray-200'>{job.title}</td>
                <td className='py-2 px-4 text-left border-b border-gray-200 max-sm:hidden'>{moment(job.date).format('ll')}</td>
                <td className='py-2 px-4 text-left border-b border-gray-200 max-sm:hidden'>{job.location}</td>
                <td className='py-2 px-4 text-center border-b border-gray-200'>{job.applicants}</td>
                <td className='py-2 px-4 text-left border-b border-gray-200'>
                  <input className='scale-125 ml-4' type="checkbox" />
                </td>
              </tr>  
             ))}
          </tbody>
        </table>
      </div>
      <div className='flex justify-end mt-4'>
        <button onClick={e => navigate('/dashboard/add-job')} className='bg-black rounded text-white px-4 py-2'>Add new job</button>
      </div>
    </div>
  )
}

export default ManageJob
