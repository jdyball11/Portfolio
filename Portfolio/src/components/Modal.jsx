import { motion } from "framer-motion"


const Modal = ({ selectedId, setSelectedId, imgURL, title, text, id }) => {
    if (!selectedId) {
        return <></>
    }
    return (
        <div
            onClick={() => setSelectedId(null)}
            className="fixed inset-0 bg-black/50 z-50 cursor-pointer overflow-y-scroll">
                <div
                onClick={(e) => e.stopPropagation()}
                className="w-[500px] max-w-[700px] mx-auto my-16 px-8 cursor-default"
                >
                <motion.div layoutId={selectedId}>
                        <img src={imgURL} />
                </motion.div>    
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 100
                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        duration: 0.8
                    }}
                    className="bg-white py-6"
                    >
                    <h2 className="flex pl-3 flex-end  text-2xl font-bold mb-2 text-black">{title}</h2>
                    <p className="text-left text-black pl-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt erat leo, eget iaculis magna elementum vitae.</p>
                    <div className="ml-3 mt-3">
                        <button className="flex flex-end bg-black p-3 rounded">Checkout {title} hosted on.....</button>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Modal