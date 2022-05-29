import React from 'react'
import { motion } from 'framer-motion/dist/framer-motion'

export default function MotionH1(props) {
  
  return (
    <motion.h1 
    initial={{x: '-100px', opacity: 0}}
    whileInView={{x: 0, opacity: 1}}
    transition={{type: 'spring', duration: 1, bounce: 0.4}}
    viewport={{amount: 'some', margin: '0px 0px -200px 200px', once: true}}
    >
        {props.children}
    </motion.h1>
  )
}
