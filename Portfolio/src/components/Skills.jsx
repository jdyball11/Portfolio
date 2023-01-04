import { motion } from "framer-motion"

const Skills = () => {

    const floatTransition = {
        y: {
            duration: 2.1,
            yoyo: Infinity,
        },
    };

    return (
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div>
                <h1 className="text-6xl font-bold my-16">Skills</h1>
            </div>
            <div 
                className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 inline-block">
                <motion.div 
                    className="font-bold"
                    transition={floatTransition}
                        animate={{
                            y: ["-1.1em", "1.4em"],
                }}
                >
                    <img 
                        src="./HTML.png" 
                        alt="" 
                        className="w-20 mx-auto my-4 pt-1 "
                        />
                    <p>HTML</p>
                </motion.div>
                <motion.div 
                    className="font-bold"
                    transition={floatTransition}
                        animate={{
                            y: ["-0.9em", "1.6em"],
                            
                }}
                >
                    <img 
                        src="./CSS.png" 
                        alt="" 
                        className="w-[85px] mx-auto my-4"
                        />
                    <p>CSS</p>
                </motion.div>
                <motion.div 
                    className="font-bold"
                    transition={floatTransition}
                        animate={{
                            y: ["-1.2em", "1.3em"],
                            
                }}
                >
                    <img 
                        src="./React-icon.svg.png" 
                        alt="" 
                        className="w-[90px] mx-auto my-4"
                        />
                    <p>React</p>
                </motion.div>
                <motion.div 
                    className="font-bold"
                    transition={floatTransition}
                        animate={{
                            y: ["-.8em", "1.6em"],
                            
                }}
                >
                    <img 
                        src="./download.png" 
                        alt="" 
                        className="w-20 mx-auto my-4"
                        />
                    <p>Javascript</p>
                </motion.div>
                <motion.div 
                    className="font-bold"
                    transition={floatTransition}
                        animate={{
                            y: ["-1em", "1.5em"],
                            
                }}
                >
                    <img 
                        src="./5848152fcef1014c0b5e4967.png" 
                        alt="" 
                        className="w-20 mx-auto my-4"
                        />
                    <p>Python</p>
                </motion.div>
                <motion.div 
                    className="font-bold"
                    transition={floatTransition}
                        animate={{
                            y: ["-1em", "1.5em"],
                            
                }}
                >
                    <img 
                        src="./Typescript_logo_2020.svg" 
                        alt="" 
                        className="w-20 mx-auto my-4"
                        />
                    <p>Typescript</p>
                </motion.div>
                <div>
                    <img 
                        src="./NodeJs.png" 
                        alt="" 
                        className="w-20 mx-auto my-4"
                        />
                    <p>NodeJS</p>
                </div>
                <div>
                    <img 
                        src="./Flask.png" 
                        alt="" 
                        className="w-[65px] mx-auto rounded-xl my-4"
                        />
                    <p>Flask</p>
                </div>
                <div>
                    <img 
                        src="./mongoDB.png" 
                        alt="" 
                        className="w-20 mx-auto my-4"
                        />
                    <p>MongoDB</p>
                </div>
                <div>
                    <img 
                        src="./PostgreSQL.svg" 
                        alt="" 
                        className="w-20 mx-auto my-4"
                        />
                    <p>PostgreSQL</p>
                </div>
                <div>
                    <img 
                        src="./Firebase.webp" 
                        alt="" 
                        className="w-20 mx-auto my-4"
                        />
                    <p>Firebase</p>
                </div>
                <div>
                    <img 
                        src="./Jest.png" 
                        alt="" 
                        className="w-20 mx-auto my-4"
                        />
                    <p>Jest</p>
                </div>
            </div>
        </div>
    )
}

export default Skills