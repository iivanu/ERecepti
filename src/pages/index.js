import React from "react"

import NavBar from '../components/navBar/index.js'
import Styles from './style.module.css'

const IndexPage = () => {
  return(
    <div className={Styles.IndexPage}>
      <NavBar />
    </div>
  )
}

export default IndexPage
