import { motion } from "framer-motion"
import { projectImages } from "../../constants"
import ProjectCardImage from "./ProjectCardImage"

const Projects = () => {

    return (
        // clean below classname
        <div className="">
            <div className="container mx-auto">
                <h1 className="text-6xl font-bold my-16">Projects</h1>
            </div>
            <div className="grid md:grid-cols-2 gap-y-2 md:gap-x-2 md:gap-y-2 lg:gap-y-2 lg:gap-x-2">
                {projectImages.map((image, index) => {
                    return <ProjectCardImage 
                        key={image.id}
                        {...image}
                        index={index}
                    />
                })}
            </div>
        </div>
    )
}

export default Projects