import { makeStyles } from '@material-ui/core'
import React from 'react'
import MotionH1 from './MotionH1'
import styles from './Blockchain.module.css'

const useStyles = makeStyles({
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        flexDirection: "column",
    },
    videoContainer: {
        maxWidth: "850px",
        width: "90vw",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        flexDirection: "column",
        boxShadow: "0 0 20px -7px #5c1609, inset 0 0 12px -4px #481414",
        borderRadius: "20px",
        height: "fit-content",
        padding: "20px 20px 60px 20px",
        margin: "auto",
        gap: '20px',
    },
    iFrame: {
        width: "-webkit-fill-available",
        borderRadius: '16px',
        border: "5px solid white",
    },
    h1: {
        color: 'white',
    }
})
export default function BlockchainVideo() {
    const classes = useStyles()
  return (
    <div className={[classes.container, styles.container].join(" ")}>
        <div className={classes.videoContainer}>
        <iframe className={classes.iFrame} width="853" height="480" src="https://www.youtube.com/embed/0XCSPLJAwHw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <MotionH1 from="bottom">Blockchain Web3 App to store Patient Data</MotionH1>
        </div>
    </div>
  )
}
