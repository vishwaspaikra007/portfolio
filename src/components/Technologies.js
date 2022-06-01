import React, { useEffect, useRef } from 'react'
import ImageBox from './ImageBox'
import styles from './Technologies.module.css'
import { motion, useAnimation } from 'framer-motion/dist/framer-motion'
import { InView, useInView } from 'react-intersection-observer'

const base = 'images/'
const listOfImages1 = [
  ['icons8-react.svg', 'react'],
  ['icons8-nodejs.svg', 'nodejs'],
  ['icons8-mongodb.svg', 'mongodb'],
  ['icons8-angularjs.svg', 'angularjs'],
  ['icons8-firebase.svg', 'firebase'],
  ['heroku.png', 'heroku'],
  ['icons8-docker.svg', 'docker'],
  ['icons8-material-ui.svg', 'material-UI'],
  ['framer.webp', 'framer'],
  ['razorpay-glyph.svg', 'razorpay'],
  ['icons8-paytm.svg', 'paytm'],
  ['c++.svg', 'c++'],
  ['icons8-javascript.svg', 'javascript'],
  ['icons8-ethereum.svg', 'ethereum'],
  ['metamask.svg', 'metamask'],
  ['icons8-css3.svg', 'css3'],
  ['icons8-html-5.svg', 'html3'],
  ['icons8-github.svg', 'github'],
  ['icons8-git.svg', 'git'],
  ['jimp.png', 'jimp'],
  ['passport.png', 'passport.js'],
  ['icons8-ffmpeg.svg', 'ffmpeg'],
]

export default function Technologies() {

  const delayUnit = window.innerWidth > 800 ? 0.1 : 0
  const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
  })

  const animation = useAnimation()

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: 'spring',
          duration: 1,
          bounce: 0.3,
        },
      })
    }
    if (!inView) {
      animation.start({
        x: '-100vw',
      })
    }
    return () => {}
  }, [inView])

  return (
    <div className={styles.container} ref={ref} id="technologies">
      <motion.h1 animate={animation}>Technologies</motion.h1>
      <div className={styles.imgContainer}>
        {listOfImages1.map((fileName, idx) => (
          <ImageBox
            tooltip={true}
            key={idx}
            imgURL={base + fileName[0]}
            name={fileName[1]}
            type={idx % 4}
            delay={delayUnit*idx}
          />
        ))}
      </div>
    </div>
  )
}
