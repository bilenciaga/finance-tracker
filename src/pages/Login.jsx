import { useState } from 'react'
import {FcMoneyTransfer} from "react-icons/fc";
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function Login() {

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()
		setEmail()
		setPassword()
	}
	
  return (
    <div className='min-h-screen flex justify-center items-center '>
			<form className='px-[50px] py-[50px] w-[545px] rounded-xl shadow-xl bg-gray-50'>

				<Link to='/'>
				<motion.div className='flex flex-row justify-left items-center mb-10'
						 whileHover={{y:-2, color:"#fde047"}}
						 whileTap={{scale:1.1}}>
					<FcMoneyTransfer className='text-3xl' />
					<span className="ml-2 text-base">Finance Tracker</span>
				</motion.div>
				</Link>

				<h2 className='text-left text-xl font-semibold'>Login.</h2>
				<p className='mt-2 text-gray-400'>Log in with your data that you entered during your registration</p>

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
											 whileHover={{scale:1.1, backgroundColor:"#fde047"}}>Login
				</motion.button>

				<div className='mt-5 flex flex-col justify-center items-center'>
					<p>Don't you have an account?</p>
					
					<Link to ="/signup">
						<p className='mt-2 text-yellow-300 font-bold text-xl'>Sign Up</p>
					</Link>
				</div>
			</form>


    </div>
  )
}

export default Login