import {
  Card,
  CardActionArea,
  CardMedia,
  List,
  makeStyles,
  Typography,
} from '@material-ui/core'
import React, {useRef} from 'react'
import styles from './Projects.module.css'
import { motion } from 'framer-motion/dist/framer-motion'
import MotionH1 from './MotionH1'
import MotionH2 from './MotionH2'

const useStyles = makeStyles({
  root: {
    // padding: 10,
    // margin: 'auto',
    "&:hover": {
      transform: `translate(0, -10px)`
    },
    transition: '200ms'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    width: 'min(800px, 90vw)',
    gap: 20,
    margin: '20px 0'
  },
  heading: {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    padding: '10px'
  },
  description: {
    padding: '10px',
    height: 80
  },
  image: {
    padding: '5px',
  }
})
const list = [
    {name: 'Fit-X', description: `FitX E-Commerce Website
    By using ReactJS and Firebase.`, imgURL: 'fitX-min.png', 
    link: 'https://fitx-c9b1d.web.app/'},
    {name: 'Dijkstra Path Find', description: `Path Find Demo
    By using Dijkstra Algorithm, HTML, CSS, JS.`, imgURL: 'pathFind-min.png', 
    link: 'https://vishwaspaikra007.github.io/path-find-demo/'},
    {name: 'Steganography', description: `Image and Video Steganography
    By using FFmpeg, Jimp, and NodeJS.`, imgURL: 'steganography-min.png', 
    link: 'https://stegno-image.herokuapp.com/'},
    {name: 'WhatsApp Look Alike', description: `WhatsApp look alike working
    By using MERN stack and Passport.js`, imgURL: 'whatsapp-look-alike-min.png', 
    link: 'https://vishwaspaikra007.github.io/whatsapp-look-alike/'},
]

export default function Projects() {
  const classes = useStyles()
  const refH1 = useRef()
  return (
    <div className={styles.container} id="projects">
      <MotionH1>Projects</MotionH1>
      {/* <MotionH2>Projects</MotionH2> */}
      <div className={classes.grid} ref={refH1}>
        {list.map((project, idx) => (
          <motion.div
          key={idx}
          initial={{y: 40, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          viewport={{amount: 0, once: true}}
          transition={{type: 'spring', duration: 0.7, bounce: 0.4, delay: 0.2*idx}}
          >
          <Card 
          onClick={() => window.open(project.link, 'popup', 'width:320, height:300')} 
          className={classes.root} key={idx}>
            <CardActionArea>
              <CardMedia
              className={classes.image}
                component="img"
                height="140"
                image={'images/projects/' + project.imgURL}
                title={project.name}
                alt={project.name}
              />
              <Typography variant="h5" component="h2" className={classes.heading}>
                {project.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" className={classes.description}>
                {project.description}
              </Typography>
            </CardActionArea>
          </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
