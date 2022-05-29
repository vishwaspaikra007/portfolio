import React from 'react'
import Experience from './Experience'
import Profiles from './Profiles'
import styles from './Details.module.css'

export default function Details() {
  return (
    <div className={styles.container}>
        <Profiles />
        <Experience />
    </div>
  )
}
