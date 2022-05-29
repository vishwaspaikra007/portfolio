import React, {useEffect} from 'react'
import { motion, useAnimation } from 'framer-motion/dist/framer-motion'
import { InView, useInView } from 'react-intersection-observer'

export default function MotionH1(props) {
  const animation = useAnimation()
  const {ref, inView} = useInView({
    threshold: 0,
    triggerOnce: true,
    rootMargin: '0px 0px -20% 40%'
  })
  useEffect(() => {
    console.log(inView)
    if(inView) {
      animation.start({
        x: 0, opacity: 1,
        transition: {type: 'spring', duration: 1, bounce: 0.4}
      })
    }
    if(!inView) {
      animation.start({
        x: '-90vw', opacity: 0
      })
    }
    return () => {}
  }, [inView])
  
  return (
    <motion.h1 animate={animation} ref={ref}>
        {props.children}
    </motion.h1>
  )
}
