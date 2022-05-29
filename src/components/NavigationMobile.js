import { Button, makeStyles } from '@material-ui/core'
import { StylesContext } from '@material-ui/styles'
import React, { useEffect, useState } from 'react'

const useStyles = makeStyles({
    container: {
        width: '90vw',
        padding: '10px 0',
        borderRadius: '10px 10px 0 0',
        backgroundColor: 'white',
        position: 'fixed',
        bottom: 0,
        margin: '0 5vw',
        minHeight: '300px',
        display: 'flex',
        flexDirection: 'column',
        transition: '1s ease-out',
        zIndex: 2,
    }, link: {
        textDecoration: 'none',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
    }, btn: {
        width: '100%'
    }
    
})

const list = [
    'intro', 'technologies', 'projects', 'profiles', 'experience'
  ]
export default function NavigationMobile() {
    const classes = useStyles()
    const [openMenu, setOpenMenu] = useState(true)
    let prev = 10;
    let showMenu;
    const handleWindoeScroll = e => {
        clearTimeout(showMenu)
        const curr = document.documentElement.scrollTop
        showMenu = setTimeout(() => {
            setOpenMenu(() => prev > curr)
            prev = curr
        }, 0, prev, curr);
    }
    useEffect(() => {
        setOpenMenu(false)
      window.addEventListener('scroll', handleWindoeScroll)
      return () => {
        window.addEventListener('scroll', handleWindoeScroll)
      }
    }, [])
    
  return (
    <div className={classes.container} style={{
        scrollSnapAlign: 'none',
        minHeight: 'fit-content',
        transform: openMenu ? 'translateY(0px)' : 'translateY(400px)',
        }}>
        {
            list.map((li, idx) => (
                <a className={classes.link} key={idx} href={'#' + li}>
                   <Button className={classes.btn}>{li}</Button>
                </a>
            ))
        }
    </div>
  )
}
