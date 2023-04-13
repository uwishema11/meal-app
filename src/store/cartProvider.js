
import { useReducer } from "react";
import CartContext from "./cart-context";



const cartInitial={
    items:[],
    totalAmount:0
};

const ruducer= (state,action)=>{

    if(action.type ==='ADD-ITEM'){
        const updatedAmount =state.totalAmount + action.item.price*action.item.amount
        const existedItemIndex =state.items.findIndex((item) =>item.id ===action.item.id)
        
        const isExistedItem =state.items[existedItemIndex]

        let updatedItems;

        if(isExistedItem){
            const updatedItem ={
                ...isExistedItem,
                amount:isExistedItem.amount + parseInt(action.item.amount)
            }
            
            updatedItems=[...state.items]
            state.items[existedItemIndex]=updatedItem 
        }
        else{
            updatedItems= state.items.concat(action.item)
        }
        
        return {
            items:updatedItems,
            totalAmount:updatedAmount
            
        }
       
    }
    
   if (action.type === "REMOVE-ITEM") {
  const existedItemIndex = state.items.findIndex(
    (item) => item.id === action.id
  );
  const isExistedItem = state.items[existedItemIndex];
  const updatedAmount = state.totalAmount - isExistedItem.price;

  let updatedItems;
  

  if (isExistedItem.amount === 1) {
    updatedItems = state.items.filter((item) => item.id !== action.id);
  } else {
    const updatedItem = {
      ...isExistedItem,
      amount: isExistedItem.amount - 1,
    };
    updatedItems = [...state.items];
    updatedItems[existedItemIndex] = updatedItem;
  }

  return {
    items: updatedItems,
    totalAmount: updatedAmount,
  };
}


        return cartInitial

}
     

const CartProvider =(props)=>{

    const[state,cartItemDispatch]= useReducer(ruducer,cartInitial)

    const addItemHandler =(item)=>{
        cartItemDispatch({type:'ADD-ITEM', item:item})
    }
    const removeItemHandler =(id)=>{
        cartItemDispatch({type:'REMOVE-ITEM',id:id})

    }

    const cartContext ={
        items:state.items,
        totalAmount:state.totalAmount,
        addItems: addItemHandler,
        removeItems: removeItemHandler
    }



    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
};

export default CartProvider