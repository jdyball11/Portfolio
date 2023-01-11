import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";
import Modal from "./Modal";

const ProjectCardImage = ({ id, imgURL, title, text, link }) => {
    const [selectedId, setSelectedId] = useState(null)
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const container = {
        show: {
            transition: {
                staggerChildren: 0.35,
            },
        },
    };
    

    return (
        <motion.div key={id} className="flex flex-col items-center text-center justify-evenly">
            <motion.div 
                className="mb-8 relative cursor-pointer"
                layoutId={id}
                whileHover={{
                    scale: 1.1,
                    transition: {
                        duration: 0.2
                    }

                }}
                whileTap={{
                    scale: 1.05
                }}
                onClick={() => setSelectedId(id)}
                variants={container}
                initial="hidden"
                animate="show"
                exit="exit"
                >
                <motion.img 
                    layoutId={selectedId}
                    ref={ref}
                    src={imgURL} 
                    alt="image" 
                    className="aboslute object-cover lg:w-[450px] md:w-[350px] rounded-2xl sm:w-[300px] shadow-xl drop-shadow-[0_5px_5px_rgba(209,211,224)]"
                    style={{
                        transform: isInView ? "none" : "translateY(200px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                      }}
                    />
            </motion.div>
            <Modal 
                selectedId={selectedId} 
                setSelectedId={setSelectedId} 
                imgURL={imgURL} 
                title={title}
                text={text}
                link={link}
                />
        </motion.div>
    )
}

export default ProjectCardImage