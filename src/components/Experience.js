import React from 'react'
import MotionH2 from './MotionH2'
import styles from './Experience.module.css'
import { Card, makeStyles, Typography } from '@material-ui/core'
import { motion } from 'framer-motion/dist/framer-motion'

const list = [
  {
    organisationName: 'motionmedia.co.in',
    from: 'AUGUST 2020',
    to: 'AUGUST 2021',
    position: 'Full stack Web Developer',
    description: `I worked as a Full-Stack Web Developer and developed one of their latest Product called Bskill (Website / Platform)`,
  },
]

const useStyles = makeStyles({})
export default function Experience() {
  const classes = useStyles()
  return (
    <div className={styles.container} id="experience">
      <MotionH2>Experience</MotionH2>
      <div>
        {list.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 'some', once: true }}
            transition={{
              type: 'spring',
              duration: 2,
              bounce: 0.4,
              delay: idx * 0.2,
            }}
          >
            <Card>
              <Typography
                variant="h3"
                component="h1"
                className={classes.organisationName}
              >
                {exp.organisationName}
              </Typography>
              <Typography
                variant="h5"
                color="textSecondary"
                component="h2"
                className={classes.position}
              >
                {exp.position}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className={classes.tenure}
              >
                {exp.from + ' - ' + exp.to}
              </Typography>
              <Typography
                variant="body1"
                color="textSecondary"
                component="p"
                className={classes.description}
              >
                {exp.description}
              </Typography>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
