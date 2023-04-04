import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineShoppingCart,AiFillCloseCircle,AiFillPlusSquare ,AiFillMinusSquare} from 'react-icons/ai';
import { RiDeleteBin6Line} from 'react-icons/ri';
import { BsFillBagHeartFill} from 'react-icons/bs';
import {MdAccountCircle} from 'react-icons/md';

const Navbar = ({cart,addToCart,removeFromCart,subtotal,clearCart}) => {



 const toggleCart= ()=>{
     if(ref.current.classList.contains('translate-x-full')){
      ref.current.classList.remove('translate-x-full')
      ref.current.classList.add('translate-x-0')
     }
     else if(!ref.current.classList.contains('translate-x-full')){
      ref.current.classList.remove('translate-x-0')
      ref.current.classList.add('translate-x-full')
     }
  }
  const ref = useRef()
  return (
    <div className='text-orange-400 flex flex-col md:flex-row  md:justify-start justify-center items-center  py-2 shadow-2xl bg-black sticky sticky top-0 z-10 '>
      <div className='logo mx-5 my-3'> 
      <Link href={"/"}><Image src="/name.png" alt="" width={200} height={40} /></Link></div>
       <div className='nav '>
         <ul className='flex  items-center space-x-6 font-bold md:text-xl '>
             <Link href={"/tshirt"}><li> Tshirts </li> </Link>
             <Link href={"/hoodies"}> <li>Hoodies</li></Link>
             <Link href={"/stickers"}> <li>Stickers</li></Link>
             <Link href={"/mugs"}> <li> Mugs </li> </Link>
         </ul>
        </div>
        <div className='absolute right-0 mx-14 text-2xl cursor-pointer top-2 pt-2'><Link href={'/login'}><MdAccountCircle /></Link></div>
        <div className='cart absolute right-0 mx-5 top-2 pt-2'>
     <AiOutlineShoppingCart onClick={toggleCart}  className='text-2xl md:text-2xl cursor-pointer'/>
      </div>
      
      <div ref={ref} className={`sideCart w-72 h-[100vh] text-black absolute top-0 right-0 bg-orange-200 py-10 px-7 transform transition-transform  ${Object.keys(cart).length!==0 ?  'translate-x-0' : 'translate-x-full' }`}>
        <h2 className='font-bold text-xl text-center'>Shopping Cart</h2>
        <span onClick={toggleCart} className="absolute top-5 right-5 cursor-pointer text-2xl text-orange-600"><AiFillCloseCircle/></span>
            <ol className='font-semibold' >
              {Object.keys(cart).length===0 && <div className='mt-5 mb-5 '>Your cart is empty !</div>}
           {Object.keys(cart).map((k)=>{ return <li key={k}>
                <div className="item flex my-5">
                  {console.log(cart[k].qty)}
                   <div className='w-2/3 mt-2'>{cart[k].name}</div>
                   <div className='w-1/3 flex  items-center justify-center '><AiFillPlusSquare onClick={()=>{addToCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant)}}   className='mx-1 text-5xl text-orange-500  cursor-pointer ' />{cart[k].qty}<AiFillMinusSquare onClick={()=>{removeFromCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant)}} className='mx-1 text-5xl text-orange-500 cursor-pointer' /> <RiDeleteBin6Line  className='text-5xl text-red-900 cursor-pointer' /> </div>
                </div>
              </li>}) 
      }
            
            </ol>
            <span className='mb-2 font-mono font-semibold'>Subtotal : ₹{subtotal} </span>
            <div className="flex">
           <Link href={"/checkout"}> <button className="bg-orange-500 mr-3 mt-2 hover:bg-orange-700 text-white font-bold py-2 px-2 left-0 rounded pr-7">Checkout <BsFillBagHeartFill className='inline m-1 absolute '/> </button></Link>
            <button onClick={clearCart}  className="bg-red-500 mr-3 mt-2 hover:bg-red-800 text-white font-bold py-2 px-2 left-0 rounded">Clear Cart </button>
            </div>
      </div>
    </div>
  )
}

export default Navbar
