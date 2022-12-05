import { motion } from "framer-motion"


const Home = () => {
    const sentence1 = "Jack Dyball".split("")
    const sentence2 = "I'm a Full Stack Web Developer".split("")

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
    


    return (
        <div name="home" className="w-full h-screen">
            {/* container */}
            <div 
            className="max-w-[1000px] mx-auto px-8 flex justify-center items-start flex-col h-full">
                <p>Howdy, my name's</p>
                <div className="flex flex-wrap space-x-1.5">
                {sentence1.map((letter, index) => {
                    return (
                    <motion.h1 
                        key={index}
                        className="text-4xl"
                        whileHover={() => rubberBand()}>
                            {letter}
                    </motion.h1>
                    )
                })}
                </div>
                <div className="flex flex-wrap space-x-1.5">
                {sentence2.map((letter, index) => {
                    return <motion.h2 
                    key={index}
                    className="text-2xl"
                    whileHover={() => rubberBand()}>
                        {letter}
                    </motion.h2>
                })}
                </div>
            </div>
        </div>
    )
}

export default Home