import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { aboutImages } from "../../constants"
import AboutCardImage from "./AboutCardImage"


const About = () => {
    const [active, setActive] = useState('image-2')
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });


    return (
        <div className="section bg-yb-rgba" id="about">
            <div className="container mx-auto">
            <div className="mt-0">
                    <h1 className="text-5xl">About</h1>
                </div>
                
                <div 
                ref={ref} 
                className="flex flex-col lg:flex-row gap-16 "
                style={{
                    transform: isInView ? "none" : "translateX(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                  }}
                >
                    {/* <h1 className="text-6xl font-bold my-16">About</h1> */}
                        <AboutCardImage 
                            image={aboutImages} 
                            // className="mt-20 text-center lg:mb-24 object-cover w-[300px] md:mx-auto lg:mx-0 rounded-2xl"
                            />
                    
               
                <div className="flex mx-8 flex-col item-center text-center lg:items-start lg:text-left">
                    <div className="flex flex-col">
                        <h2 className="text-3xl lg:mt-20 lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before::opacity-40 before:-top-[2rem before:hidden before:lgblock]">Jack Dyball</h2>
                    </div>
                    <p className="mb-4">Web Developer</p>
                    <hr className="mb-8"/>
                    <p className="mb-32">
                    Software Engineering has opened my eyes to a new world of creativity, problem solving and mystery I found too good to ignore. Executing scripts that I’ve written and seeing the work display and function how I intended is an extremely rewarding feeling. The idea that failing and breaking code is seen as a positive to refine your work and learn, aligns with my inner science values. What I find quite wholesome is the community of fellow developers, whether online or in a team, everyone works to better the other and share their thoughts, ideas and code!
                    </p>
                </div>
                </div>
                
                
                
                
                {/* <div className="mx-8 lg:mx-28">
                    <p>Passionate and Determined. 2 words many people in my life have used to describe me.</p>
                    <br />
                    <p>Software Engineering has opened my eyes to a new world of creativity, problem solving and mystery I found too good to ignore. Executing scripts that I’ve written and seeing the work display and function how I intended is an extremely rewarding feeling. The idea that failing and breaking code is seen as a positive to refine your work and learn, aligns with my inner science values. What I find quite wholesome is the community of fellow developers, whether online or in a team, everyone works to better the other and share their thoughts, ideas and code!</p>
                </div>
                <div className="mt-[50px] mx-8 lg:mx-28 flex md:flex-row flex-col min-h-[50vh] gap-5">
                    {aboutImages.map((image, index) => {
                       
                       return <AboutCardImage 
                        key={image.id}
                        {...image}
                        index={index}
                        active={active}
                        handleClick={setActive}
                       /> 
                        
                    })}
                </div> */}
            </div>
        </div>
    )
}

export default About
