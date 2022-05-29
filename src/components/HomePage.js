import React from 'react'
import styles from './HomePage.module.css'
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'

export default function HomePage() {
  return (
    <div className={styles.container}  id="intro"
      style={{backgroundImage: 'url(images/bg2.jpg)'}}
    >
        <motion.h1 
        initial={{y: '100px', opacity: 0, scale: 0.9}}
        animate={{y: 0, opacity: 1, scale: 1}}
        transition={{type: 'ease-in-out', duration: 1, bounce: 0}}
       >
         Vishwas Paikra
        </motion.h1>
    </div>
  )
}
