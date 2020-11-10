import React from "react"

import NavBar from '../components/navBar/index.js'
import TopRecipeBar from '../components/topRecipeBar/index.js'
import RecipeList from '../components/recipeList/index.js'
import Styles from './style.module.css'

const IndexPage = () => {
  return(
    <div className={Styles.IndexPage}>
      <NavBar />
      <TopRecipeBar />
      <RecipeList />
      <RecipeList />
      <RecipeList />
      <RecipeList />
      <RecipeList />
      <RecipeList />
    </div>
  )
}

export default IndexPage
