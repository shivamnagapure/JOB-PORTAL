import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { assets, JobCategories, JobLocations } from '../assets/assets'
import JobCard from './JobCard'

const JobListing = () => {
  const { searchFilter, isSearched, setSearchFilter, jobs } = useContext(AppContext)

  const [showFilter, setShowFilter] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedCategories , setSelectedCategories] = useState([])
  const [selectedLocations , setSelectedLocations] = useState([])
  const [ filteredJobs , setFilteredJobs] = useState(jobs)

  const handleCategoryChange = (category) => {
    setSelectedCategories(          // If the category is not selected, it adds it to the list.
      prev => prev.includes(category) ? prev.filter( c => c !== category ) : [ ...prev , category ] //If the category is already selected, it removes it from the list.
    )
  }

  const handleLocationChange = (location) => {
    setSelectedLocations(          // If the category is not selected, it adds it to the list.
      prev => prev.includes(location) ? prev.filter( c => c !== location ) : [ ...prev , location ] //If the category is already selected, it removes it from the list.
    )
  }

  useEffect( () => {
    const matchesCatogery = job => selectedCategories.length === 0 || selectedCategories.includes(job.category)

    const matchesLocation = job => selectedLocations.length === 0 || selectedLocations.includes(job.location)

    const matchesTitle = job => searchFilter.title === "" || job.title.toLowerCase().includes(searchFilter.title.toLowerCase())

    const matchesSearchLocation = job => searchFilter.location === "" || job.location.toLowerCase().includes(searchFilter.location.toLowerCase())

    const newFilteredJobs = jobs.slice().reverse().filter(
      job => matchesCatogery(job) && matchesLocation(job) && matchesTitle(job) && matchesSearchLocation(job)
    )

    setFilteredJobs(newFilteredJobs)
    setCurrentPage(1)
  } , [jobs , selectedCategories , selectedLocations , searchFilter])


  return (
    <div className='container 2xl:px-20 mx-auto flex flex-col lg:flex-row max-lg:space-y-8 py-8 '>
      {/* Sidebar */}
      <div className='w-full lg:w-1/4 bg-white px-4'>
        {/* Search Filter from Hero Component */}
        {

          isSearched && (searchFilter.title !== '' || searchFilter.location !== '') && (
            <>
              <h3 className='font-medium text-lg mb-4'>Current Search</h3>
              <div className='mb-4 text-gray-600'>
                {searchFilter.title && (
                  <span className='inline-flex items-center gap-2.5 bg-blue-50 border border-blue-200 px-4 py-1.5 rounded'>
                    {searchFilter.title}
                    <img onClick={e => setSearchFilter(prev => ({ ...prev, title: '' }))} src={assets.cross_icon} alt=""
                      className='cursor-pointer' />
                  </span>
                )}
                {searchFilter.location && (
                  <span className='ml-2 inline-flex items-center gap-2.5 bg-red-50 border border-red-200 px-4 py-1.5 rounded'>
                    {searchFilter.location}
                    <img onClick={e => setSearchFilter(prev => ({ ...prev, location: '' }))} src={assets.cross_icon} alt=""
                      className='cursor-pointer' />
                  </span>
                )}
              </div>
            </>
          )
        }

        <button onClick={e => setShowFilter(prev => !prev)} className='py-1.5 px-6 rounded border border-gray-400 lg:hidden'>
          {showFilter ? "Close" : "Filters"}
        </button>

        {/* Category Filter */}
        <div className={showFilter ? "" : 'max-lg:hidden'}>
          <h4 className='font-medium text-lg py-4'>Search by Categories</h4>
          <ul className='space-y-4 text-gray-600'>
            {
              JobCategories.map((category, index) => (
                <li className='gap-3 flex items-center' value={index}>
                  <input 
                  className='scale-125' 
                  type="checkbox" 
                  onChange={ () => handleCategoryChange(category)} 
                  checked={selectedCategories.includes(category)}
                  />
                  {category}
                </li>
              ))
            }
          </ul>
        </div>

        {/* Location Filter */}
        <div className={showFilter ? "" : 'max-lg:hidden'}>
          <h4 className='font-medium text-lg py-4'>Search by Locations</h4>
          <ul className='space-y-4 text-gray-600'>
            {
              JobLocations.map((Location, index) => (
                <li className='gap-3 flex items-center' value={index}>
                  <input
                  className='scale-125' 
                  type="checkbox"
                  key={index}
                  onChange={ () => handleLocationChange(Location)} 
                  checked={ selectedLocations.includes(Location)} 
                  />
                  {Location}
                </li>
              ))
            }
          </ul>
        </div>
      </div>

      {/* Job Listing */}


      <section className='w-full lg:w-3/4 text-gray-800 max-lg:px-4'>
        <h3 className='font-medium text-3xl py-2' id='job-list'>Latest Jobs</h3>
        <p className='mb-8'>Get your desired jobs from top company</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {/* Cards */}
          {filteredJobs.slice((currentPage-1)*6 , currentPage*6).map((job, index) => (
            <JobCard key={index} job={job} />
          ))}</div>

        {/* Pagenation */}
        {filteredJobs.length > 0 && (
          <div className='flex justify-center items-center mt-10 space-x-2  '>
            <a href="#job-list" >
              <img onClick={() => setCurrentPage(Math.max(currentPage-1 , 1))} className='cursor-pointer' src={assets.left_arrow_icon} alt="" />
            </a>
            {Array.from({ length: Math.ceil(filteredJobs.length / 6) }).map((_, index) => (
              <a key={index} href="#job-list">
                <button onClick={() => setCurrentPage(index + 1)} className={`cursor-pointer w-10 h-10 flex items-center justify-center border border-gray-300 rounded ${currentPage === index + 1 ? 'bg-blue-100 text-blue-500' : 'text-gray-500'}`}>{index + 1}</button>
              </a>
            ))}
            <a href="#job-list">
              <img onClick={() => setCurrentPage(Math.min(currentPage+1 , Math.ceil(filteredJobs.length/6)))} className='cursor-pointer' src={assets.right_arrow_icon} alt="" />
            </a>
          </div>
        )}
      </section>





    </div>

  )
}

export default JobListing
