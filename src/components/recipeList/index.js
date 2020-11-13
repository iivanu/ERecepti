import React from 'react'

import Styles from './style.module.css'
import Recipe from '../recipe/index.js'

const RecipeList = () => {
    return (
        <div className={Styles.recipeList}>
            <Recipe />
            <Recipe />
            <Recipe />
            <Recipe />
            <Recipe />
            <Recipe />
            <Recipe />
            <Recipe />
        </div>
    )
}

export default RecipeList