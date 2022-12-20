import { motion } from "framer-motion"
import { projectImages } from "../../constants"
import ProjectCardImage from "./ProjectCardImage"

const Projects = () => {

    return (
        <div className="h-screen">
            <div className="container mx-auto">
                Projects
            </div>
            <div className="mt-[50px] flex md:flex-row flex-col min-h-[50vh] gap-5">
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