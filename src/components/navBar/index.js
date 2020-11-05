import React from 'react'

import styles from './style.module.css'
import SearchBox from '../searchBox/index.js'

const NavBar = () => {
    return(
        <div className={styles.navBar}>
            <div><p className={styles.appName}>eRecipe</p></div>
            <SearchBox />
        </div>
    )
}

export default NavBar