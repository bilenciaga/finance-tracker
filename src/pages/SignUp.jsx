import { useState } from 'react'
import {FcMoneyTransfer} from "react-icons/fc";
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import {
  createUserWithEmailAndPassword,
  updateProfile
} from 'firebase/auth'
import { auth } from '../firebase/config'

function SignUp() {

  const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
  const [userName, setUserName] = useState('')

  const navigate = useNavigate()

	const handleSubmit = async(e) => {
		e.preventDefault()
    try {

      const userCredential  = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
  
      const user = userCredential.user

      console.log(user)

      updateProfile(auth.currentUser, {
        displayName: userName,
      })

      navigate('/')
      
    }
    catch(error) {
      console.log(error.message)
    }
  }
	
  return (
    <div className='min-h-screen flex justify-center items-center '>
			<form className='p-10 md:p-[50px] md:w-[545px] rounded-xl shadow-xl bg-gray-50'>

				<Link to='/'>
				<motion.div className='flex flex-row justify-left items-center mb-10'
						 whileHover={{y:-2, color:"#fde047"}}
						 whileTap={{scale:1.1}}>
					<FcMoneyTransfer className='text-3xl' />
					<span className="ml-2 text-base">Finance Tracker</span>
				</motion.div>
				</Link>

				<h2 className='text-left text-xl font-semibold'>Sign up.</h2>

        <div className='flex flex-rol justify-left items-center mt-2'>
					<p className='text-gray-400'>Already have an account?</p>
					
					<Link to ="/login">
						<p className='ml-2 text-yellow-300 font-bold'>Sign up</p>
					</Link>
        </div>
        
        <label className='flex flex-col mt-10'>
					<span className='mb-2'>Username</span>
					<input className='p-2 rounded-lg shadow-lg focus:outline-yellow-300' type='username' placeholder='name' onChange={(e) => setUserName(e.target.value)} value={userName}></input>
				</label>

				<label className='flex flex-col mt-10'>
					<span className='mb-2'>Your email</span>
					<input className='p-2 rounded-lg shadow-lg focus:outline-yellow-300' type='email' placeholder='name@domain.com' onChange={(e) => setEmail(e.target.value)} value={email}></input>
				</label>

				<label className='flex flex-col mt-10'>
					<span className='mb-2'>Password</span>
					<input className='p-2 rounded-lg shadow-lg focus:outline-yellow-300' type='password' placeholder='at least 6 characters' onChange={(e) => setPassword(e.target.value)} value={password}></input>
				</label>	

				<motion.button className='w-full py-2 mt-14 border rounded-lg bg-yellow-200 font-bold' type='submit'
											 onClick={handleSubmit}
											 whileHover={{scale:1.1, backgroundColor:"#fde047"}}>Register
				</motion.button>

			</form>


    </div>
  )
}

export default SignUp