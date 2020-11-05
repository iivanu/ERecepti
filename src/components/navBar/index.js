import React from 'react'

import styles from './style.module.css'
import SearchBox from '../searchBox/index.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
    return(
        <div className={styles.navBar}>
            <div><p className={styles.appName}>eRecipe</p></div>
            <SearchBox />
            <FontAwesomeIcon icon={faAlignJustify} color="white" className={styles.optionsIcon}/>
        </div>
    )
}

export default NavBar