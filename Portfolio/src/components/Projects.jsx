import { projectImages } from "../../constants"
import ProjectCardImage from "./ProjectCardImage"

const Projects = () => {

    return (
        <div className="bg-yellowish h-full" id="projects">
            <div className="container mx-auto">
                <h1 className="text-beige pt-12 font-Source-code text-8xl font-bold mb-32">Projects</h1>
            </div>
            <div className="grid mx-8 md:grid-cols-2 gap-y-2 md:gap-x-2 md:gap-y-2 lg:gap-y-2 lg:gap-x-2">
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