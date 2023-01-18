import { useRef } from "react"
import { useInView } from "framer-motion"
import { aboutImages } from "../../constants"
import AboutCardImage from "./AboutCardImage"


const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });


    return (
        <div className="section bg-tan" id="about">
            <div className="container mx-auto pb-16">
            <div className="mb-4 sm:mb-8 pt-1">
                    <h1 className="text-db-rgba text-8xl font-Source-code">About</h1>
            </div>
            <div 
            ref={ref} 
            className="flex flex-col lg:flex-row gap-16 sm:gap-20 "
            style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}
            >
                <AboutCardImage 
                    image={aboutImages} 
                    />
            
            <div className="flex mx-8 flex-col item-center text-center lg:items-start lg:text-left">
                <div className="flex flex-col">
                    <h2 className="text-5xl font-Source-code lg:mt-20 lg:text-5xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before::opacity-40 before:-top-[2rem before:hidden before:lg-block]">Jack Dyball</h2>
                </div>
                <p className="mb-4 text-2xl lg:text-3xl font-Source-code text-db-rgba">Web Developer</p>
                <hr className="mb-8"/>
                <p className="font-Source-code text-2xl mb-32">
                Software Engineering has opened my eyes to a new world of creativity, problem solving and mystery I found too good to ignore. Executing scripts that I’ve written and seeing the work display and function how I intended is an extremely rewarding feeling. The idea that failing and breaking code is seen as a positive to refine your work and learn, aligns with my inner science values. What I find quite wholesome is the community of fellow developers, whether online or in a team, everyone works to better the other and share their thoughts, ideas and code!
                </p>
            </div>
            </div>
        </div>
    </div>
)
}

export default About
