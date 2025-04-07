import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navbar = () => {
    const { setShowRecruiterLogin } = useContext(AppContext)
    const { openSignIn } = useClerk()
    const { user } = useUser()
    const navigate = useNavigate()
    return (
        <div className='shadow py-4'>
            <div className='container px-4 2xl:px-20 mx-auto flex justify-between '>
                <img onClick={ () => {navigate('/')}} src={assets.logo} className='cursor-pointer' alt="" />
                {user ?
                    <div className='flex items-center gap-3'>
                        <Link to={'/application'}>Applied Jobs</Link>
                        <p>|</p>
                        <p className='max-sm:hidden'>Hi, {user.firstName + " " + user.lastName}</p>
                        < UserButton />
                    </div> :
                    <div className='flex gap-4 max-sm:text-xs'>
                        <button onClick={ e => setShowRecruiterLogin(true) } className='text-gray-600'>Recruiter Login</button>
                        <button onClick={e => openSignIn()} className='bg-blue-600 rounded-full text-white  px-2 sm:px-9 py-2' >Login</button>
                    </div>
                }

            </div>
        </div>
    )
}

export default Navbar
