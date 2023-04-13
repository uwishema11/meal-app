
import Header from './Components/Layout/Header';
import './App.css';
import Cart from './Components/Cart/Cart';
import Meals from './Components/Meals/Meals';
import CartContexProvider from './store/cartProvider';
import { useState } from 'react';


function App() {
  const [isModel,setIsModel]=useState(false)

  const showCartModel =()=>{
    setIsModel(true)
  }

  const HideCartModel =()=>{
    setIsModel(false)
  }

  return (
    <CartContexProvider>
      {isModel &&<Cart 
      closeModel={HideCartModel}

      />}
      <Header onClick={showCartModel} />
      <main>
        <Meals/>
      </main>
    </CartContexProvider>
  );
};


export default App;
