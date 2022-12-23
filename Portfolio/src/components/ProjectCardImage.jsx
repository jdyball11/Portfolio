import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const ProjectCardImage = ({ id, imgURL, title }) => {
    // const [selectedId, setSelectedId] = useState(null)

    const container = {
        show: {
            transition: {
                staggerChildren: 0.35,
            },
        },
    };

    const item = {
        hidden: {
            opacity: 0,
            y: 200,
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                ease: [.6, .01, -0.05, 0.95],
                duration: 1.6,
            },
        },
        exit: {
            opacity: 0,
            y: -200,
            transition: {
                ease: 'easeInOut',
                duration: 0.8,
            },
        },
    };
    

    return (
        <div key={id} className="flex flex-col items-center text-center justify-evenly">
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
                    src={imgURL} 
                    alt="image" 
                    className="aboslute object-coverlg:w-[400px] md:w-[350px] rounded-2xl sm:w-[300px] shadow-xl"
                   
                    variants={item}
                    />
                 <div className="absolute top-0 left-0 p-8 z-20 font-bold text-2xl">
                    <p>{title}</p>
                </div>
                {/* <AnimatePresence>
                    {selectedId && (
                        <motion.div layoutId={selectedId}>
                            <motion.h5>Title</motion.h5>
                            <motion.h3>Description</motion.h3>
                            <motion.button onClick={() => setSelectedId(null)}></motion.button>
                        </motion.div>
                    )}
                </AnimatePresence> */}
            </motion.div>
        </div>
    )
}

export default ProjectCardImage