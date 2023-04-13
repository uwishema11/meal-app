
import React from "react";
import classes from './Header.module.css'
import HeaderCartButoon from "./HeaderCartButton";
import mealImage from '../../assets/meals.jpg'

const Header =props =>{
    return (
        <React.Fragment>
            <header className ={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButoon onClick={props.onClick}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealImage} alt ='a table full of food!'/>
            </div>
        </React.Fragment>
    )
};

export default Header