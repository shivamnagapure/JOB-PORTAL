import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { assets, jobsApplied } from '../assets/assets'
import moment from 'moment'
import Footer from '../components/Footer'

const Application = () => {

  const [isEdit, setISEdit] = useState(false)
  const [resume , setResume] = useState(null)

  return (
    <>
      <Navbar />
      <div className='container px-4 2xl:px-20 my-10 min-h-[65hv] mx-auto'>
        <div>
          <h2 className='text-xl font-semibold'>Your Resume</h2>
          <div className='flex gap-3 mt-3 mb-6'>
            {isEdit
              ? <>
              <label className='flex items-center' htmlFor="resumeUpload">
                <p className='bg-blue-100 text-blue-600 px-4 py-2 rounded-lg mr-2'>Select Resume</p>
                <input id='resumeUpload' onClick={ e => setResume(e.target.files[0]) } accept='application/pdf' type="file" hidden/>
                <img src={assets.profile_upload_icon} alt="" />
              </label>
              <button  onClick={ e => setISEdit(false)} className='bg-green-100 border border-green-300 px-4 py-2 rounded-lg cursor-pointer'>Save</button>
              </> :
              <div className='flex gap-2' >
                <a className='bg-blue-100 text-blue-600 px-4 py-2 rounded-lg' href="">
                  Resume
                </a>
                <button onClick={ e => setISEdit(true)} className='text-gray-500 border border-gray-300 px-4 py-2 rounded-lg cursor-pointer'>Edit</button>
                
              </div>
            }
          </div>

          <div>
            <h2 className='text-xl font-semibold mb-4'>Jobs Applied</h2>
              <table className='bg-white border border-gray-200 rounded-lg min-w-full'>
                <thead>
                  <tr>
                    <th className='py-3 px-4 text-left border-b  border-gray-200'>Company</th>
                    <th className='py-3 px-4 text-left border-b  border-gray-200'>Job Title</th>
                    <th className='py-3 px-4 text-left border-b  border-gray-200 max-sm:hidden'>Location</th>
                    <th className='py-3 px-4 text-left border-b  border-gray-200 max-sm:hidden'>Date</th>
                    <th className='py-3 px-4 text-left border-b  border-gray-200'>Status</th>
                  </tr>
                </thead>
                <tbody>
                {jobsApplied.map((job , index) => true ? (
                  <tr>
                    <td className='py-3 px-4 flex items-center gap-2 border-b border-gray-200'>
                      <img className='w-8 h-8' src={job.logo} alt="" />
                      {job.company}
                    </td>
                    <td className='py-3 px-4 text-left border-b  border-gray-200'>{job.title}</td>
                    <td className='py-3 px-4 text-left border-b  border-gray-200 max-sm:hidden'>{job.location}</td>
                    <td className='py-3 px-4 text-left border-b  border-gray-200 max-sm:hidden'>{moment(job.date).format('ll')}</td>
                    <td className='py-3 px-4 text-left border-b  border-gray-200'>
                      <span className={`${job.status === 'Accepted' ? 'bg-green-100' : job.status === 'Rejected' ? 'bg-red-100' : 'bg-blue-100'} px-4 py-1.5 rounded`}>
                         {job.status}
                      </span>
                    </td>
                  </tr>
                ) : (
                  (null)
                ))}
              </tbody>
              </table>
              
            </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Application
