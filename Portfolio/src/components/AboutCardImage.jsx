import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'

const AboutCardImage = ({ image }) => {
        
  const [FlowDirection, setFlowDirection] = useState(true)
  const [CenterId, setCenterId] = useState(0)
  const [LeftId, setLeftId] = useState(image.length - 1)
  const [RightId, setRightId] = useState(1)

    console.log(CenterId)

  const nextBtn = () => {
    if (LeftId === image.length - 1) {
        setLeftId(0)
      } else {
        setLeftId(LeftId + 1)
      }
      if (CenterId === image.length - 1) {
        setCenterId(0)
      } else {
        setCenterId(CenterId + 1)
      }
  
      if (RightId === image.length - 1) {
        setRightId(0)
      } else {
        setRightId(RightId + 1)
      }
      setFlowDirection(true)
    }
    const prevBtn = () => {
      setFlowDirection(false)
      if (LeftId === 0) {
        setLeftId(image.length - 1)
      } else {
        setLeftId(LeftId - 1)
      }
      if (CenterId === 0) {
        setCenterId(image.length - 1)
      } else {
        setCenterId(CenterId - 1)
      }
      if (RightId === 0) {
        setRightId(image.length - 1)
      } else {
        setRightId(RightId - 1)
      }
  }


  const variants = {
    center: {
      x: '0rem',
      opacity: 1,
      scale: 1.1,
      zIndex: '5',
      filter: "brightness(100%)",
      backgroundImage: 'url(' + image[CenterId].imgURL + ')',
      boxShadow: '0px 0px 30px 0px rgba(0,0,0,0.3)',
      transition: {
        type: 'spring',
        duration: 1,
      },
    },
    left: {
      x: '-6rem',
      opacity: 1,
      filter: "brightness(40%)",
      scale: 1,
      backgroundImage: 'url(' + image[LeftId].imgURL + ')',
      zIndex: '4',
      boxShadow: 'unset',
      transition: {
        type: 'spring',
        duration: 1,
      },
    },
    right: {
      backgroundImage: 'url(' + image[RightId].imgURL + ')',
      x: '6rem',
      opacity: 1,
      filter: "brightness(40%)",
      scale: 1,
      boxShadow: 'unset',
      zIndex: '3',
      transition: {
        type: 'spring',
        duration: 1,
      },
    },
    rightHidden: {
      x: '8rem',
      scale: 0,
      opacity: 0,
    },
    leftHidden: {
      x: '-8rem',
      scale: 0,
      opacity: 0,
    },
  }
  return (
    <motion.div className="grid place-content-center rounded-md">
      <motion.div className="relative w-72 h-72">
        <div className='ml-[70px] sm:ml-[60px] mt-10 sm:mt-0'>
        <AnimatePresence initial={false}>
          <motion.div
            key={LeftId}
            variants={variants}
            initial={FlowDirection ? 'center' : 'leftHidden'}
            animate="left"
            exit={'leftHidden'}
            className="absolute w-[150px] h-[150px] sm:w-60 sm:h-60 bg-center bg-cover bg-no-repeat rounded-full"
          ></motion.div>
          <motion.div
            variants={variants}
            key={CenterId}
            initial={FlowDirection ? 'right' : 'left'}
            animate="center"
            className="absolute w-[150px] h-[150px] sm:w-60 sm:h-60 bg-center bg-cover bg-no-repeat rounded-full"
          ></motion.div>
          <motion.div
            key={RightId}
            variants={variants}
            initial={FlowDirection ? 'rightHidden' : 'center'}
            animate="right"
            exit={'rightHidden'}
            className="absolute w-[150px] h-[150px] sm:w-60 sm:h-60 bg-center bg-cover bg-no-repeat rounded-full"
          ></motion.div>
        </AnimatePresence>
        </div>
      </motion.div>
      <div className="mt-2 flex justify-center gap-44 sm:gap-72 text-5xl">
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: 'spring',
            duration: 0.5,
          }}
          whileHover={{scale: 1.1}}
          whileTap={{scale: 0.8}}

          className="bwd-btn"
          onClick={prevBtn}
        >
          {'<'}
        </motion.button>
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: 'spring',
            duration: 0.5,
          }}
          whileHover={{scale: 1.1}}
          whileTap={{scale: 0.8}}
          className="fwd-btn"
          onClick={nextBtn}
        >
          {'>'}
        </motion.button>
      </div>
    </motion.div>
  )
   
}

export default AboutCardImage