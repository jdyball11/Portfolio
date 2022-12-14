import { useState } from "react"
import { motion } from "framer-motion"
import { aboutImages } from "../../constants"
import AboutCardImage from "./AboutCardImage"

const About = () => {
    const [active, setActive] = useState('image-2')

    return (
        <div className="section bg-yb-rgba">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-24">
                    <h1 className="text-2xl">About</h1>
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
