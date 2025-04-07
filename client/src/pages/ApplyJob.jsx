import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import Lodaing from '../components/Lodaing'
import { assets } from '../assets/assets'
import kconvert from 'k-convert'
import moment from 'moment'
import JobCard from '../components/JobCard'
import Footer from '../components/Footer'

const ApplyJob = () => {

  const { id } = useParams()
  const { jobs } = useContext(AppContext)

  const [JobData, setJobData] = useState(null)

  const fetchJobs = async () => {
    const data = jobs.filter(job => job._id === id)

    if (data.length !== 0) {
      setJobData(data[0])
      console.log(data[0]);
    }
  }

  useEffect(() => {
    if (jobs.length > 0) {
      fetchJobs()
    }// why fetchJobs inside if and why jobs inside dependencies
  }, [id, jobs])

  return JobData ? (
    <>
      <Navbar />

      <div className='container flex flex-col py-10 px-10 2xl:px-20 mx-auto min-h-screen'>
        <div className='text-black bg-white rounded-lg w-full '>
          <div className='flex justify-center md:justify-between gap-8 px-14 py-20 bg-sky-50 border border-sky-400 rounded-xl flex-wrap'>
            <div className='flex flex-col md:flex-row'>
              {/* Replace company_icon by companyId.image */}
              <img className='bg-white p-4  rounded-lg h-24 mr-4 max:mb-4 items-center border-0' src={assets.company_icon} alt="" />
              <div>
                <h1 className='font-medium md:text-4xl text-2xl'>{JobData.title}</h1>
                <div className='flex flex-row flex-wrap gap-6 text-gray-600 max-md:justify-center gap-y-2 items-center mt-2'>
                  <span className='flex items-center gap-1'>
                    <img src={assets.suitcase_icon} alt="" />
                    {JobData.companyId.name}
                  </span>
                  <span className='flex items-center gap-1'>
                    <img src={assets.location_icon} alt="" />
                    {JobData.location}
                  </span>
                  <span className='flex items-center gap-1'>
                    <img src={assets.person_icon} alt="" />
                    {JobData.level}
                  </span>
                  <span className='flex items-center gap-1'>
                    <img src={assets.money_icon} alt="" />
                    CTC : {kconvert.convertTo(JobData.salary)}
                  </span>
                </div>
              </div>
            </div>

            <div className='flex flex-col justify-center text-end text-sm max-md:m-auto max-md:text-center'>
              <button className='bg-blue-500 px-10 py-2.5 text-white rounded cursor-pointer mb-4'>Apply Now</button>
              <p className='text-gray-600'>Posted {moment(JobData.date).fromNow()}</p>
              {/* Give total time passed after the spceified date */}
            </div>
          </div>

          <div className='mt-4 flex flex-col lg:flex-row justify-between items-start'>
            <div className='w-full lg:w-3/4'>
              <h2 className='font-bold text-2xl mb-4'>Job Description</h2>
              <div className='' dangerouslySetInnerHTML={{ __html: JobData.description }}></div>
              <button className='bg-blue-500 px-10 py-2.5 text-white rounded cursor-pointer mb-4 mt-10'>Apply Now</button>
            </div>

            {/* Right Section for More Jobs */}
            <div className='w-full lg:w-1/4 mt-8 lg:mt-0 lg:ml-8 space-y-5'>
              <h2 className='text-lg'>More jobs from {JobData.companyId.name}</h2>
              {jobs.slice(0,4).map((job , index) => (
                <JobCard key={index} job={job}/>
              ))}
            </div>
          </div>


        </div>
      </div>

      <Footer />
    </>
  ) : (
    <Lodaing />
  )
}

export default ApplyJob
