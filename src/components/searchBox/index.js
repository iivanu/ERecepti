import React from 'react'

import Styles from './style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


const SearchBox = () => {
    return (
        <div className={Styles.container}>
            <input type="text" className={Styles.searchBox} placeholder="Find a Recipe!"></input>
            <button className={Styles.searchButton}>
                <FontAwesomeIcon icon={faSearch} color="gray" />
            </button>
        </div>
    )   
}

export default SearchBox