import { BsGithub, BsFacebook, BsLinkedin } from 'react-icons/bs'
import { motion } from 'framer-motion'
import MobileNav from './MobileNav'

const Navbar = () => {

    return (
    <>
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-black top-0 left-0 text-grey-300">

        <ul className='flex'>
            <motion.li 
            whileHover={{ scale: 1.3, color: '#f8e112' }}
            ><BsGithub className='text-2xl' /></motion.li>
            <motion.li
            whileHover={{ scale: 1.3, color: '#3b5998' }}
            ><BsFacebook className='text-2xl' /></motion.li>
            <motion.li
            whileHover={{ scale: 1.3, color: '#0A66C2' }}
            ><BsLinkedin className='text-2xl' /></motion.li>
        </ul>
        
    {/* menu  */}
    
        <ul className='hidden md:flex'>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
        </ul>
            
        {/* hamburger */}
        <div className='md:hidden text-2xl'>
            <MobileNav className="z-auto"/>
        </div>

    </div>
        
    </>
    )
}

export default Navbar

