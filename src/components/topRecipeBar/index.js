import React from 'react'

import Styles from './style.module.css'
import TopRecipe from '../topRecipe/index.js'

const TopRecipeBar = () => {
    return (
        <div className={Styles.topRecipeBar}>
            <div className={Styles.checkOut}>
                <p className={Styles.textParagraph}>Currently top rated recipes :</p>
            </div>

            {/*This will be solved using map function once we have a dataset to iterate through*/}
            <div className={Styles.recipeList}>
                <TopRecipe />
                <TopRecipe />
                <TopRecipe />
                <TopRecipe />
                <TopRecipe />
                <TopRecipe />
                <TopRecipe />
                <TopRecipe />
            </div>
        </div>
    )
}

export default TopRecipeBar