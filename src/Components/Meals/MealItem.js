import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import contex from './../../store/cart-context'
import { useContext } from 'react';

const MealItem = (props) => {
  const cartctx =useContext(contex)
  const price = `$${props.price.toFixed(2)}`;


  const addToCartHandler =(amount)=>{
    cartctx.addItems({
      id:props.id,
      name:props.name,
      amount:amount,
      price:props.price
    })
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm addToCart={addToCartHandler}/>
      </div>
    </li>
  );
};

export default MealItem;