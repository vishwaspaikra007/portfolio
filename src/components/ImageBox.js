import { Card, CardActionArea } from '@material-ui/core'
import { motion } from 'framer-motion/dist/framer-motion'
import React from 'react'
import styles from './ImageBox.module.css'

export default function ImageBox(props) {
  const { imgURL: imgURL, type: type, name: name, delay: delay, tooltip: tooltip } = props
  return (
    <Card style={{overflow: 'visible'}}>
      <CardActionArea>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 'some', once: true }}
          transition={{
            type: 'spring',
            duration: 0.7,
            bounce: 0.4,
            delay: delay,
          }}
          className={styles.container}
        >
          {tooltip ? <span className={styles.tooltip}>{name}</span> : false}
          <img className={styles.img} src={imgURL} />
        </motion.div>
      </CardActionArea>
    </Card>
  )
}
