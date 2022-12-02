import { useState } from 'react'
import { BsGithub, BsFacebook, BsLinkedin } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaTimes } from 'react-icons/fa'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleHamburgerClick = () => setNav(!nav)

    return (
    <>
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-black top-0 left-0 text-grey-300">

        <ul className='flex'>
            <li><BsGithub className='text-2xl' /></li>
            <li><BsFacebook className='text-2xl' /></li>
            <li><BsLinkedin className='text-2xl' /></li>
        </ul>
        
    {/* menu  */}
  
    
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
            </ul>
            
        {/* hamburger */}
    <div className='md:hidden z-10 text-2xl' onClick={handleHamburgerClick}>
        {!nav ? <GiHamburgerMenu /> : <FaTimes />}
    </div>

        {/* mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>Home</li>
            <li className='py-6 text-4xl'>About</li>
            <li className='py-6 text-4xl'>Skills</li>
            <li className='py-6 text-4xl'>Projects</li>
        </ul>

    </div>
        
    </>
    )
}

export default Navbar

 {/* <nav className="bg-black px-2 sm:px-9 py-2.5 fixed w-full z-20 top-0 left-0 border-b h-20">
    <div className="flex items-center justify-end w-auto">
        
        <div className="flex items-center pr-14 justify-end">
            
            <ul className="flex justify-between gap-14">
            <li>
                <a href="#" className="text-xl text-slate-200 hover:text-slate-50 font-black font-patrick-hand">Home</a>
            </li>
            <li>
                <a href="#" className="text-xl text-slate-400 hover:text-slate-100 font-bold font-patrick-hand">Skills</a>
            </li>
            <li>
                <a href="#" className="text-xl text-slate-400 hover:text-slate-100 font-bold font-patrick-hand">Projects</a>
            </li>
            </ul>
        </div>
        <div className="flex ">
            <button type="button" className="font-black font-patrick-hand text-xl text-white bg-black-700 hover:bg-black-800 focus:ring-4 focus:outline-none focus:ring-slate-300 rounded-sm text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-slate dark:hover:bg-slate dark:focus:ring-slate-50">Let's Connect</button>
        </div>
    </div>
    </nav> */}