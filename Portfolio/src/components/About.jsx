import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { aboutImages } from "../../constants"
import AboutCardImage from "./AboutCardImage"


const About = () => {
    const [active, setActive] = useState('image-2')
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });


    return (
        <div className="section bg-yb-rgba">
            <div className="container mx-auto">
                <div 
                ref={ref} 
                className="flex flex-col xl:flex-row xl:justify-center gap-24"
                style={{
                    transform: isInView ? "none" : "translateX(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                  }}
                >
                    <h1 className="text-6xl font-bold my-16">About</h1>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt erat leo, eget iaculis magna elementum vitae. Duis id ante urna. Ut nec turpis vitae elit eleifend ornare quis nec ante. Aliquam pharetra iaculis libero nec pellentesque. Nam id ex risus. Quisque ac enim dignissim, dapibus dui in, consectetur ligula. Praesent semper ut dolor eu pharetra.</p>
                </div>
                <div className="mt-[50px] flex md:flex-row flex-col min-h-[50vh] gap-5">
                    {aboutImages.map((image, index) => {
                       
                       return <AboutCardImage 
                        key={image.id}
                        {...image}
                        index={index}
                        active={active}
                        handleClick={setActive}
                       />
                        
                    })}
                </div>
            </div>
        </div>
    )
}

export default About
