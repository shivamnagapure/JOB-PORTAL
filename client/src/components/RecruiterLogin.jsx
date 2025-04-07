import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'

const RecruiterLogin = () => {

  const [image , setImage ] = useState(false)
  const [state , setState] = useState('Login')
  const [name , setName] = useState('')
  const [password , setPassword] = useState('')
  const [email , setEmail] = useState('')
  const [isTextDataSubmitted , setIsTextDataSubmitted] = useState(false)

  const { setShowRecruiterLogin } = useContext(AppContext)

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    if( state === 'Sign Up' && !isTextDataSubmitted){
      setIsTextDataSubmitted(true)
    }
  }

  useEffect( () => {
    document.body.style.overflow = 'hidden'
    //Clean up function , when component unmount it returns 
    return () => {
       document.body.style.overflow = 'unset'
    }
  }, []) //when component mount then useEffect triggerd

  return (
    <div className='absolute top-0 bottom-0 right-0 left-0 z-10 backdrop:blur-sm bg-black/30 flex justify-center items-center'>
      <form onSubmit={onSubmitHandler} className='relative bg-white p-10 rounded-xl text-slate-500'>
        <h1 className='text-neutral-700 font-medium text-2xl text-center'>Recruiter {state}</h1>
        <p className='text-sm'>Welcome back! Please sign in to continue</p>

        { state === 'Sign Up' && isTextDataSubmitted 
        ? <>
        <div className='flex gap-4 my-10 items-center'>
          <label  htmlFor="image">
          <img className='w-16 rounded-full' src={ image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
          <input onChange={e => setImage(e.target.files[0]) } type="file" id='image' hidden />
        </label>
        <p>Upload Company <br /> logo</p>
        </div>
        
        </>
        : <>
        { state !== 'Login' &&  (
          <div className='flex gap-2 border border-gray-200 px-4 py-2 rounded-full mt-4 items-center'>
            <img src={assets.person_icon} alt="" />
            <input className='outline-none text-sm' onChange={ e =>  setName(e.target.value)} value={name} type="text" placeholder='Company Name'  required />
          </div>
        )}
         
          <div className='flex gap-2 border border-gray-200 px-4 py-2 rounded-full mt-4 items-center'>
            <img src={assets.email_icon} alt="" />
            <input className='outline-none text-sm' onChange={ e =>  setEmail(e.target.value)} value={email} type="email" placeholder='Email Id'  required />
          </div>
          <div className='flex gap-2 border border-gray-200 px-4 py-2 rounded-full mt-4 items-center'>
            <img src={assets.lock_icon} alt="" />
            <input className='outline-none text-sm' onChange={ e =>  setPassword(e.target.value)} value={password} type="password" placeholder='Password'  required />
          </div>
        </>
        }
        
        { state === 'Login' && <p className='cursor-pointer text-sm text-blue-600 mt-4'>Forgot password?</p>}

        <button type='submit' className='bg-blue-600 text-white w-full py-2 rounded-full my-4'>
          {state === 'Login' ? 'login' : isTextDataSubmitted ?'create account'  :'next' }
        </button>
        
        { state === 'Login'
         ? <p className='text-center'>Don't have an account? <span onClick={ () => setState("Sign Up")} className='cursor-pointer underline text-blue-600' >Sign up</span></p> 
         : <p className='text-center'>Already have an account? <span onClick={ () => setState("Login")} className='cursor-pointer underline  text-blue-600'>Login</span></p>
        }

          <img onClick={e => setShowRecruiterLogin(false)} className='absolute top-5 right-5 cursor-pointer' src={assets.cross_icon} alt="" />
        
      </form>
    </div>
  )
}

export default RecruiterLogin
