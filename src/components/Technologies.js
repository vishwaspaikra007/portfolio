import React, { useEffect } from 'react'
import ImageBox from './ImageBox'
import styles from './Technologies.module.css'
import { motion, useAnimation } from 'framer-motion/dist/framer-motion'
import { InView, useInView } from 'react-intersection-observer'

const base = 'images/'
const listOfImages1 = [
  ['c++.svg', 'c++'],
  ['icons8-github.svg', 'github'],
  ['icons8-react.svg', 'react'],
  ['icons8-angularjs.svg', 'angularjs'],
  ['icons8-git.svg', 'git'],
  ['jimp.png', 'jimp'],
  ['icons8-css3.svg', 'css3'],
  ['icons8-html-5.svg', 'html3'],
  ['metamask.svg', 'metamask'],
  ['icons8-docker.svg', 'docker'],
  ['icons8-javascript.svg', 'javascript'],
  ['passport.png', 'passport.js'],
  ['icons8-ethereum.svg', 'ethereum'],
  ['icons8-mongodb.svg', 'mongodb'],
  ['razorpay-glyph.svg', 'razorpay'],
  ['icons8-ffmpeg.svg', 'ffmpeg'],
  ['icons8-nodejs.svg', 'nodejs'],
  ['icons8-firebase.svg', 'firebase'],
  ['icons8-paytm.svg', 'paytm'],
  ['icons8-material-ui.svg', 'material-UI'],
]
const listOfImages2 = listOfImages1,
listOfImages3 = listOfImages1
listOfImages2.sort()
listOfImages3.reverse()

export default function Technologies() {
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
            key={idx}
            imgURL={base + fileName[0]}
            name={fileName[1]}
            type={idx % 4}
            delay={0.1*idx}
          />
        ))}
      </div>
    </div>
  )
}
