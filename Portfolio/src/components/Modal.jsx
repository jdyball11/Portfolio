import { motion } from "framer-motion"


const Modal = ({ selectedId, setSelectedId, imgURL, title, text, id, link }) => {
    if (!selectedId) {
        return <></>
    }
    return (
        <div
            onClick={() => setSelectedId(null)}
            className="fixed inset-0 bg-black/50 z-50 cursor-pointer overflow-y-scroll">
                <div
                onClick={(e) => e.stopPropagation()}
                className="w-[500px] max-w-[700px] mx-auto my-16 px-28 sm:px-8 cursor-default"
                >
                <motion.div layoutId={selectedId}>
                        <img className="rounded-t-xl" src={imgURL} />
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
                    className="bg-white py-6 rounded-b-xl"
                    >
                    <h2 className="flex pl-3 flex-end font-Source-code text-5xl font-bold mb-2 text-black">{title}</h2>
                    <p className="text-left font-Source-code text-2xl text-black px-3">{text}</p>
                    <div className="ml-3 mt-3">
                        <form action={link}>
                            <button type="submit" className="flex flex-end font-Source-code text-2xl bg-black p-3 rounded">Checkout {title}</button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Modal