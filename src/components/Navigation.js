import React, { useEffect } from 'react'
import styles from './Navigation.module.css'
import { motion, useAnimation } from 'framer-motion/dist/framer-motion'
import { InView, useInView } from 'react-intersection-observer'

const list = [
  'intro', 'technologies', 'projects', 'profiles', 'experience'
]
export default function Heading() {
  const animation = useAnimation()
  const liAni = useAnimation()
  const { ref, inView } = useInView({
    threshold: 0.3
  })

  useEffect(() => {
    console.log(1233, inView)
    if(inView) {
      animation.start(variants.top)
      liAni.start({
        lineHeight: '80px'
      })
    } else {
      animation.start(variants.right)
      liAni.start({
        lineHeight: '40px'
      })
    }
  }, [inView])
  
  const variants = {
    top: {
      display: 'flex',
      opacity: 1,
      right: '50%',
      top: '0vh',
      flexDirection: 'row',
      direction: 'ltr',
      gap: '36px',
      transition: {
        type: 'spring',
        duration: 1,
        bounce: 0.3,
      },
    },
    right: {
      display: 'flex',
      opacity: 1,
      right: '10%',
      top: 'calc(50vh - 100px)',
      flexDirection: 'column',
      direction: 'rtl',
      gap: '0px',
      transition: {
        type: 'spring',
        duration: 1,
        bounce: 0.3,
      },
    }
  }
  return (
    <div className={styles.container} ref={ref}>
        {/* <Logo/> */}
        <motion.ul
          animate={animation}
        >
            {
              list.map((li, idx) => {
                return (<a key={idx} href={'#'+li}>
                  <motion.li
                    animate={liAni}
                  >
                    {li}
                  </motion.li>
                  </a>)
              })
            }
        </motion.ul>
    </div>
  )
}
