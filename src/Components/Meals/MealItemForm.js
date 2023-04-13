
import Input from '../UI/Input';
import classes from './MealItemForm.module.css'
import { useState } from 'react';


const MealItemForm =(props)=>{
    const [itemValue,setItemValue] =useState(1)
    const [amountIsVlid,setamountIsVlid]=useState(true)
     
    const submitHandler =(e)=>{
        e.preventDefault()
        const enteredAmount =itemValue;
        console.log(enteredAmount)
        if (enteredAmount.length ===0 || enteredAmount<1 ||enteredAmount>5){
            setamountIsVlid(false)
            return;
        }
      props.addToCart(enteredAmount)
    }
    const HandleOnChange=(e)=>{
        e.preventDefault()
         setItemValue(e.target.value);
    }

    return(
        <form className={classes.form} onSubmit={submitHandler}>
            <Input label='Amount' input ={{
                id:'Amount',
                type:'number',
                min:'1',
                max:'5',
                step:'1',
                value:itemValue,
                onChange:HandleOnChange
            }} />
            <button > +Add</button>
            {!amountIsVlid &&'provide valid value'}
        </form>
    )
};

export default MealItemForm 