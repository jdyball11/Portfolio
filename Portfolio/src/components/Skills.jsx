import { motion } from "framer-motion"

const Skills = () => {

    const floatTransition = {
        y: {
            duration: 2.3,
            yoyo: Infinity,
        },
        x: {
            duration: 2.1,
            yoyo: Infinity
        }
    };
    const floatTransition2 = {
        y: {
            duration: 2.1,
            yoyo: Infinity,
        },
        x: {
            duration: 2.2,
            yoyo: Infinity
        }
    };
    const floatTransition3 = {
        y: {
            duration: 2,
            yoyo: Infinity,
        },
        x: {
            duration: 2.2,
            yoyo: Infinity
        }
    };
    const floatTransition4 = {
        y: {
            duration: 2.2,
            yoyo: Infinity,
        },
        x: {
            duration: 2.3,
            yoyo: Infinity
        }
    };
    const floatTransition5 = {
        y: {
            duration: 2,
            yoyo: Infinity,
        },
        x: {
            duration: 2.2,
            yoyo: Infinity
        }
    };
    const floatTransition6 = {
        y: {
            duration: 2.2,
            yoyo: Infinity,
        },
        x: {
            duration: 2,
            yoyo: Infinity
        }
    };
    const floatTransition7 = {
        y: {
            duration: 2.1,
            yoyo: Infinity,
        },
        x: {
            duration: 2,
            yoyo: Infinity
        }
    };
    const floatTransition8 = {
        y: {
            duration: 1.8,
            yoyo: Infinity,
        },
        x: {
            duration: 2,
            yoyo: Infinity
        }
    };
    const floatTransition9 = {
        y: {
            duration: 2.1,
            yoyo: Infinity,
        },
        x: {
            duration: 1.9,
            yoyo: Infinity
        }
    };
    const floatTransition10 = {
        y: {
            duration: 2,
            yoyo: Infinity,
        },
        x: {
            duration: 2.2,
            yoyo: Infinity
        }
    };
    const floatTransition11 = {
        y: {
            duration: 1.9,
            yoyo: Infinity,
        },
        x: {
            duration: 2.1,
            yoyo: Infinity
        }
    };
    const floatTransition12 = {
        y: {
            duration: 1.8,
            yoyo: Infinity,
        },
        x: {
            duration: 2,
            yoyo: Infinity
        }
    };

    return (
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div>
                <h1 className="text-6xl font-bold my-16">Skills</h1>
            </div>
            <div 
                className="w-full grid grid-cols-2 sm:grid-cols-4 gap-5 text-center py-8 inline-block">
                <motion.div 
                    className="font-bold"
                    transition={floatTransition}
                        animate={{
                            y: ["-1.1em", "1.3em"],
                            x: ["-1em", "1.4em"]
                }}
                >
                    <img 
                        src="../HTML.png" 
                        alt="" 
                        className="w-20 mx-auto my-4 pt-1 "
                        />
                    <p>HTML</p>
                </motion.div>
                <motion.div 
                    className="font-bold"
                    transition={floatTransition2}
                        animate={{
                            y: ["-1em", "1.3em"],
                            x: ["-0.9em", "1.2em"]
                            
                }}
                >
                    <img 
                        src="../CSS.png" 
                        alt="" 
                        className="w-[85px] mx-auto my-4"
                        />
                    <p>CSS</p>
                </motion.div>
                <motion.div 
                    className="font-bold"
                    transition={floatTransition3}
                        animate={{
                            y: ["-1.2em", "1.3em"],
                            x: ["-1em", "1.2em"]
                            
                }}
                >
                    <img 
                        src="../React-icon.svg.png" 
                        alt="" 
                        className="w-[90px] mx-auto my-4"
                        />
                    <p>React</p>
                </motion.div>
                <motion.div 
                    className="font-bold"
                    transition={floatTransition4}
                        animate={{
                            y: ["1.1em", "-1.6em"],
                            x: ["-0.9em", "1.2em"]
                            
                }}
                >
                    <img 
                        src="../download.png" 
                        alt="" 
                        className="w-20 mx-auto my-4"
                        />
                    <p>Javascript</p>
                </motion.div>
                <motion.div 
                    className="font-bold"
                    transition={floatTransition5}
                        animate={{
                            y: ["-0.8em", "1.1em"],
                            x: ["-0.9em", "1.2em"]
                            
                }}
                >
                    <img 
                        src="../5848152fcef1014c0b5e4967.png" 
                        alt="" 
                        className="w-20 mx-auto my-4"
                        />
                    <p>Python</p>
                </motion.div>
                <motion.div 
                    className="font-bold"
                    transition={floatTransition6}
                        animate={{
                            y: ["-0.8em", "1.1em"],
                            x: ["-1em", "1.3em"]
                            
                }}
                >
                    <img 
                        src="../Typescript_logo_2020.svg" 
                        alt="" 
                        className="w-20 mx-auto my-4"
                        />
                    <p>Typescript</p>
                </motion.div>
                <motion.div
                    className="font-bold"
                    transition={floatTransition7}
                        animate={{
                            y: ["-0.9em", "1.1em"],
                            x: ["1.5em", "-1em"]
                }}
                    >
                    <img 
                        src="../NodeJs.png" 
                        alt="" 
                        className="w-20 mx-auto my-4"
                        />
                    <p>NodeJS</p>
                </motion.div>
                <motion.div
                    className="font-bold"
                    transition={floatTransition8}
                        animate={{
                            y: ["1.1em", "-1.4em"],
                            x: ["-1em", "1.3em"]
                }}
                    >
                    <img 
                        src="../Flask.png" 
                        alt="" 
                        className="w-[65px] mx-auto rounded-xl my-4"
                        />
                    <p>Flask</p>
                </motion.div>
                <motion.div
                    className="font-bold"
                    transition={floatTransition9}
                        animate={{
                            y: ["1.4em", "-0.9em"],
                            x: ["0.9em", "-1.2em"]
                            
                }}
                     >
                    <img 
                        src="../mongoDB.png" 
                        alt="" 
                        className="w-20 mx-auto my-4"
                        />
                    <p>MongoDB</p>
                </motion.div>
                <motion.div
                    className="font-bold"
                    transition={floatTransition10}
                        animate={{
                            y: ["-1em", "1.3em"],
                            x: ["-1em", "1.3em"]
                }}
                >
                    <img 
                        src="../PostgreSQL.svg" 
                        alt="" 
                        className="w-20 mx-auto my-4"
                        />
                    <p>PostgreSQL</p>
                </motion.div>
                <motion.div
                    className="font-bold"
                    transition={floatTransition11}
                        animate={{
                            y: ["1.3em", "-0.8em"],
                            x: ["-1em", "1.2em"]
                            
                }}
                >
                    <img 
                        src="../Firebase.webp" 
                        alt="" 
                        className="w-20 mx-auto my-4"
                        />
                    <p>Firebase</p>
                </motion.div>
                <motion.div
                    className="font-bold"
                    transition={floatTransition12}
                        animate={{
                            y: ["0.9em", "-1.2em"],
                            x: ["1.1em", "1.4em"]
                            
                }}
                >
                    <img 
                        src="../Jest.png" 
                        alt="" 
                        className="w-20 mx-auto my-4"
                        />
                    <p>Jest</p>
                </motion.div>
            </div>
        </div>
    )
}

export default Skills