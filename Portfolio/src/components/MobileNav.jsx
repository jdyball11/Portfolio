import { motion } from "framer-motion"
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaTimes } from 'react-icons/fa'
import { useState } from "react"
import { Link } from "react-router-dom"

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false)
    console.log(isOpen)

   const circleVariants = {
        hidden: {
            scale: 0
        },
        visible: {
            scale: 180,
            transition: {
                type: 'spring',
                stiffness: 160,
                damping: 60,
            },
        },
};


    const ulVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.1,
            },
        },
    };


return <nav className="relative">
    {/* menu icon */}
        <div onClick={() => setIsOpen(true)} className="'cursor-pointer text-white">
            <GiHamburgerMenu />
        </div>
    {/* circle animation */}
        <motion.div 
            variants={circleVariants}
            initial='hidden' 
            animate={isOpen ? 'visible' : 'hidden'}
            className='w-4 h-4 rounded-full bg-brown-rgba fixed top-0 right-0'>
        </motion.div>
        {/* menu */}
        <motion.ul 
            variants={ulVariants} 
            initial="hidden"
            animate={isOpen ? 'visible' : 'hidden'}
            className={`${isOpen ? 'right-0' : '-right-full'} fixed top-0 bottom-0 w-full flex flex-col justify-center items-center transition-all duration-300 overflow-hidden`} >
            {/* close icon */}
            <div onClick={() => setIsOpen(false)} className="cursor-pointer absolute top-8 right-8">
                <FaTimes />
            </div>
            <li className='py-6 text-4xl'>
                <Link 
                to=""
                // smooth={true}
                duration={500}
                offset={-70}
                className="text-3xl cursor-pointer"
                >Home</Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link 
                to=""
                // smooth={true}
                duration={500}
                offset={-70}
                className="text-3xl cursor-pointer"
                >About</Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link 
                to=""
                // smooth={true}
                duration={500}
                offset={-70}
                className="text-3xl cursor-pointer"
                >Skills</Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link 
                to=""
                // smooth={true}
                duration={500}
                offset={-70}
                className="text-3xl cursor-pointer"
                >Projects</Link>
            </li>
        </motion.ul>
    </nav>

}
export default MobileNav