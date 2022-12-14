import { motion } from "framer-motion"


const AboutCardImage = ({ id, imgURL, title, index, active, handleClick }) => {
        
    const fadeIn = (direction, type, delay, duration) => ({
        
        hidden: {
          x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
          y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
          opacity: 0,
        },
        show: {
          x: 0,
          y: 0,
          opacity: 1,
          transition: {
            type,
            delay,
            duration,
            ease: 'easeOut',
          },
        },
      }
      );
 
    return (
        <motion.div
            variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
            className={`relative ${ active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'} 
            flex items-center justify-center min-w-[170px] h-[300px] transition-[flex] duration-[0.7s]
            ease-out-flex cursor-pointer
            `}
            onClick={() => handleClick(id)}
            >   
            <img 
                src={imgURL} 
                alt="Image Card" 
                className="absolute w-full h-full object-cover rounded-2xl"
                />
            {active === id &&
                (
                <div className="absolute bottom-0 p-8 bg-transparent-b rounded-b-2xl w-full flex-col z-20">
                    <p>{title}</p>
                </div>
                )
                } 
        </motion.div>
    )
}

export default AboutCardImage