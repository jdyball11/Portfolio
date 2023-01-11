import { motion } from "framer-motion"


const Home = () => {
    const sentence1 = "Jack Dyball".split("")
    const sentence2 = "I'm a Full Stack Web Developer".split("")
    const sentence3 = "I'm passionate about building applications".split("")
    const letters = Array.from(sentence3)

    const rubberBand = () => {

        return {
            transform: [
                "scale3d(1, 1, 1)",
                "scale3d(1.4, .55, 1)",
                "scale3d(.75, 1.25, 1)",
                "scale3d(1.25, .85, 1)",
                "scale3d(.9, 1.05, 1)",
                "scale3d(1, 1, 1)",
            ]
        }
    }

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.09, delayChildren: 0.04 * i },
        }),
    }

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            }
        }
    }
    

    return (
        <div name="home" className="w-full h-screen" id="home">
            {/* container */}
            <div 
            className="sm:h-[100vh] flex justify-center md:content-start bg-brown-rgba items-start md:ml-30 lg:bg-cover lg:ml-30 lg:bg-center lg:bg-no-repeat py-40 lg:py-0 overflow-hidden mx-auto">
                <div className="container mx-auto h-full">
                    <div 
                    className="flex items-center h-full pt-8 text-center">
                        <div className="flex-1 flex flex-col items-center lg:items-start ">
                            <p className='text-dark-brown flex flex-wrap flex-end font-Source-code text-lg md:text-2xl'>Howdy, my name's</p>
                            <div className="flex flex-wrap my-1">
                            {sentence1.map((letter, index) => {
                                return (
                                <motion.h1 
                                    key={index}
                                    className="font-Source-code text-6xl text-db-rgba mr-1 leading-[44px] md:text-8xl md:leading-tight lg:text-[150px] lg:leading-[1.2] font-bold md:tracking-[-2px]"
                                    whileHover={() => rubberBand()}>
                                        {letter === " " ? "\u00A0" : letter}
                                </motion.h1>
                                )
                            })}
                            </div>
                            <div className="flex flex-wrap justify-center sm:justify-start mx-10 sm:ml-0 my-1">
                            {sentence2.map((letter, index) => {
                                return (
                                <motion.h2 
                                key={index}
                                className="text-dark-brown font-Source-code text-2xl md:text-4xl mr-1 leading-[44px] md:text-3xl md:leading-tight lg:text-5xl lg:leading-[1.2] font-bold md:tracking-[-2px]"
                                whileHover={() => rubberBand()}>
                                    {letter === " " ? "\u00A0" : letter}
                                </motion.h2>
                                )
                            })}
                            </div>
                            <motion.div 
                            className="text-dark-brown font-Source-code text-lg md:text-2xl flex flex-wrap justify-center sm:justify-start break-normal mx-10 sm:ml-0 my-1" 
                            variants={container}
                            initial="hidden"
                            animate="visible">
                                {letters.map((letter, index) => {
                                    return (
                                    <motion.span 
                                    key={index}
                                    className="pt-2 mr-1 pb-2 md:pt-3 md:pb-0 max-w-[480px] text-md text-center lg:text-left"
                                    variants={child}>
                                        {letter === " " ? "\u00A0" : letter}
                                    </motion.span>
                                    )
                                })}
                            </motion.div>
                            {/* <button 
                            className="btn btn-md p-2 px-4 rounded-sm font-bold bg-db-rgba hover:bg-db-rgba md:btn-lg transition-all">
                                Contact Me
                            </button> */}
                         </div>
                         <div className="hidden lg:flex flex-1 justify-end items-end h-full">
                            <img src="" alt="" />
                         </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home