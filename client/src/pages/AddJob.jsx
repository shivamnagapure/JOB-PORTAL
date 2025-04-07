import React, { useEffect, useState , useRef } from 'react'
import Quill from 'quill'
import { JobCategories, JobLocations } from '../assets/assets'

const AddJob = () => {

  const [ tiltle , setTitle ] = useState('')
  const [ category , setCategory ] = useState('Programming')
  const [ location , setLocation ] = useState('Banglore')
  const [ level , setLevel ] = useState('Beginner Level')
  const [ salary , setSalary ] = useState(0)

  const editorRef = useRef(null)
  const quillRef = useRef(null)

  useEffect(() => {
    //Initiate Quill only onece
    if( !quillRef.current && editorRef.current ){
        quillRef.current = new Quill(editorRef.current , {
          theme : 'snow',
        })
    }
  }, [])

  return (

    <form className='container flex flex-col p-4 w-full items-start'>
      <div className='w-full'>
        <p className='mb-2'>Job Title</p>
        <input type="text" placeholder='Type here' 
        onChange={ e => setTitle(e.target.value)} value={tiltle}
        required 
        className='px-3 py-2 border-2 border-gray-300 w-full max-w-lg rounded'/>
      </div>


      <div className='w-full max-w-lg'>
        <p className='my-3'>Job Description</p>
        <div ref={editorRef}>

        </div>
      </div>

      <div className='flex flex-col sm:flex-row gap-2 sm:gap-8 w-full mt-2' >
        <div >
        <p className='mb-2'>Job Category</p>
        <select className='w-full px-3 py-2 rounded border-2 border-gray-300' onChange={e => setCategory(e.target.value)} >
          {JobCategories.map((category , index) => (
            <option value={category} key={index}>{category}</option>
          ))}
        </select>
      </div>
      
      <div>
        <p className='mb-2'>Job Location</p>
        <select className='w-full px-3 py-2 rounded border-2 border-gray-300' onChange={e => setLocation(e.target.value)} >
          {JobLocations.map((location , index) => (
            <option value={location} key={index}>{location}</option>
          ))}
        </select>
      </div>
      
      <div>
        <p className='mb-2'>Job Level</p>
        <select className='w-full px-3 py-2 rounded border-2 border-gray-300' onChange={e => setLevel(e.target.value)} >
         <option value="Beginner Level">Beginner Level</option>
         <option value="Intermediate Level">Intermediate Level</option>
         <option value="Senior Level">Senior Level</option>
        </select>
      </div>
    </div>
      
    <div>
      <p className='my-2'>Job Salary</p>
      <input min={0} onChange={e => setSalary(e.target.value)} type="Number" placeholder='2500'
      className='w-full border-2 border-gray-300 px-3 py-2 sm:w-[120px] rounded'/>
    </div>

    <button className='bg-black text-white w-28 py-3 mt-4 rounded'>Add</button>
    </form>
    
  )
}

export default AddJob
