
import classes from './Cart.module.css'
import cartitemsctx from './../../store/cart-context'
import CartItems from './CartItem';
import Modal from '../UI/Modal';
import { useContext } from 'react';


const Cart =props =>{
    const crtx =useContext(cartitemsctx)

    const totalAmount=`$ ${crtx.totalAmount.toFixed(2)}`
    const hasItem =crtx.items.length >0;

    const addItemHandler= (item)=>{
        crtx.addItems({...item,amount:1})
        console.log(item.amount)
    }
    const removeItemHsndler=(id)=>{
        crtx.removeItems(id)
    }

    const cartItems =(<ul className={classes['cart-items']}>{
        crtx.items.map((item)=>
        
            <CartItems
            key={item.id}
            amount={item.amount}
            name={item.name}
            price={item.price}
            onAddItem={addItemHandler.bind(null,item)}
            onRemoveItem={removeItemHsndler.bind(null,item.id)}
            />
        )}
        </ul>)
    

    return(
        <Modal closeModel={props.closeModel} >
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                {hasItem &&<button onClick={props.odrderItems}className={classes.button}>Order</button>}
                <button onClick={props.closeModel} className={classes['button--alt']}>close</button>
            </div>
        </Modal>
    )
};

export default Cart