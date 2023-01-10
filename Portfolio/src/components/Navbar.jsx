import { BsGithub, BsFacebook, BsLinkedin } from 'react-icons/bs'
import { motion } from 'framer-motion'
import MobileNav from './MobileNav'
import { Link } from 'react-scroll'
import { useState } from 'react'

const Navbar = () => {
    

    return (
    <>
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-black top-0 left-0 text-grey-300">

        <ul className='flex'>
            <motion.li 
            whileHover={{ scale: 1.3, color: '#f8e112' }}
            ><a href="https://github.com/jdyball11"><BsGithub className='text-2xl' /></a></motion.li>
            <motion.li
            whileHover={{ scale: 1.3, color: '#3b5998' }}
            ><a href="https://www.facebook.com/jack.dyball.35"><BsFacebook className='text-2xl' /></a></motion.li>
            <motion.li
            whileHover={{ scale: 1.3, color: '#0A66C2' }}
            ><a href="https://www.linkedin.com/in/jack-francis-dyball"><BsLinkedin className='text-2xl' /></a></motion.li>
        </ul>
        
    {/* menu  */}
    
        <ul className='hidden md:flex'>
            <li className='hover:pb:12 hover:border-b-6 hover:border-white'> 
                <Link to="home" spy={true} smooth={true} offset={-50} duration={700}>Home</Link>
            </li>
            <li>
                <Link to="about" spy={true} smooth={true} offset={-50} duration={700}>About</Link>
            </li>
            <li>
                <Link to="projects" spy={true} smooth={true} offset={-100} duration={700}>projects</Link>
            </li>
            <li>
                <Link to="skills" spy={true} smooth={true} offset={-50} duration={700}>skills</Link>
            </li>
            <li>
                <Link to="contact" spy={true} smooth={true} offset={-250} duration={700}>Contact</Link>
            </li>
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

