import {FcMoneyTransfer} from "react-icons/fc";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <nav className='py-5 px-10 md:px-24 flex items-center justify-between cursor-pointer bg-white drop-shadow-lg'>
      <Link to='/'>
        <motion.div className="flex items-center"
                    whileHover={{y:-3, scale:1.2, color:"rgb(255, 207, 65, 0.86)"}}
                    whileTap={{scale:1.1}}>
          <FcMoneyTransfer className="text-5xl"/>
          <span className="ml-2 text-2xl">Finance Tracker</span>
        </motion.div>
      </Link>

      <div className="flex items-center">
        <Link to='signup'>
          <motion.p className="text-2xl cursor-pointer"
                    whileHover={{y:-3, color:"rgb(255, 207, 65, 0.86)"}}
                    whileTap={{scale:0.9}}>
                    Sign Up
          </motion.p>
        </Link>
        
        <div className="mx-3 h-7 border border-black bg-black"></div>
        <Link to='login'>
          <motion.p className="text-2xl cursor-pointer"
                    whileHover={{y:-3, color:"rgb(255, 207, 65, 0.86)"}}
                    whileTap={{scale:0.9}}>
                    Log In
          </motion.p>
        </Link>
      </div>

    </nav>
  )
}

export default Navbar