import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Modal from "./Modal";

const ProjectCardImage = ({ id, imgURL, title, text, link }) => {
    const [selectedId, setSelectedId] = useState(null)

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

    const headings = {
        hidden: {
            opacity: 0,
            // y: 200
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                ease: [0.7, .01, -0.05, 0.95],
                duration: 4.2
            }
        }
    }
    

    return (
        <motion.div variants={item} key={id} className="flex flex-col items-center text-center justify-evenly">
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
                    src={imgURL} 
                    alt="image" 
                    className="aboslute object-cover lg:w-[450px] md:w-[350px] rounded-2xl sm:w-[300px] shadow-xl drop-shadow-[0_8px_8px_rgba(209,211,224)]"
                    variants={item}
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