import "@/styles/globals.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useState,useEffect } from "react";

export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState({});
  const [subtotal, setSubtotal] = useState();

  useEffect(() => {
  
    try{
      if(localStorage.getItem("cart")){
      setCart(JSON.parse(localStorage.getItem("cart")));
       saveCart(JSON.parse(localStorage.getItem("cart")))
      }
    }
    catch(e){
      console.error(e);
      localStorage.clear();
    }

  }, [])
  


  const saveCart = (mycart)=>{
    localStorage.setItem("cart",JSON.stringify(mycart))
    let subt = 0;
    let keys = Object.keys(mycart)
    for(let i=0;i<keys.length;i++){
      subt +=  mycart[keys[i]].price * mycart[keys[i]].qty;
    }
    setSubtotal(subt)

  }


  const addToCart = (itemCode,qty,price,name,size,variant)=>{
     let newCart = cart;
     if(itemCode in cart){
      newCart[itemCode].qty = newCart[itemCode].qty + qty;
     }
     else{
      newCart[itemCode] = {qty:1,price,name,size,variant}
     }
     setCart(newCart)
     saveCart(newCart)
  }
   
  const clearCart = ()=>{
    setCart({})
    saveCart({})
  }

  const removeFromCart = (itemCode,qty,price,name,size,variant)=>{
    let newCart = cart;
    if(itemCode in cart){
     newCart[itemCode].qty = cart[itemCode].qty - qty
    }
    if(newCart[itemCode]["qty"]<=0){
          delete newCart[itemCode]
    }
    setCart(newCart)
    saveCart(newCart)
 }
  return (
    <>
      <Navbar key={subtotal} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subtotal={subtotal} />  
      <Component  cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subtotal={subtotal} {...pageProps} /> 
      <Footer />
    </>
  );
}
