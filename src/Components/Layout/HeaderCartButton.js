
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import classes from './HeaderCartButton.module.css'
import { useContext } from "react";


const HeaderCartButoon =props =>{

    const cartctx = useContext(CartContext)
    const numberCartItems =cartctx.items.reduce((acc,item)=>{
        return (acc + parseInt(item.amount))
    },0)
    return (
        <button onClick={props.onClick} className={classes.button}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}> {numberCartItems}</span>
        </button>
    )
};

export default HeaderCartButoon