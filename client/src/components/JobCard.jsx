import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const JobCard = ({ job }) => {

  const navigate = useNavigate()
  
  return (
    <div className='shadow rounded p-6 border-0'>
      <div className='flex justify-between items-center'>
        <img className='h-8' src={assets.company_icon} alt="" />
      </div>
      <h4 className='mt-2 font-medium text-xl'>{job.title}</h4>  
      <div className='flex items-center mt-2 gap-2 text-xs'>
        <span className='rounded bg-blue-50 px-4 py-1.5  border border-blue-200'>{job.location}</span>
        <span className='rounded bg-red-50 px-4 py-1.5  border border-red-200'>{job.level}</span>
      </div>
      <p className='mt-4 text-gray-500 text-sm' dangerouslySetInnerHTML={{__html:job.description.slice(0,150)}}></p>
      <div className='mt-4 flex text-sm gap-4'>
        <button onClick={ () => { navigate(`/apply-job/${job._id}`) ; scrollTo(0,0) }} className='px-4 py-2 bg-blue-600 rounded text-white cursor-pointer' >Apply Now</button>
        <button onClick={ () => { navigate(`/apply-job/${job._id}`) ; scrollTo(0,0) }} className='px-4 py-2  text-gray-500 border border-gray-500 rounded cursor-pointer' >Learn More</button>
      </div>
    </div>
  )
}

export default JobCard
