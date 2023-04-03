import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineShoppingCart,AiFillCloseCircle,AiFillPlusSquare ,AiFillMinusSquare} from 'react-icons/ai';
import { RiDeleteBin6Line} from 'react-icons/ri';
import { BsFillBagHeartFill} from 'react-icons/bs';

const Navbar = () => {
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
    <div className='text-orange-400 flex flex-col md:flex-row  md:justify-start justify-center items-center  py-2 shadow-2xl bg-black'>
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
      <div onClick={toggleCart}  className='cart absolute right-0 mx-5 top-2'>
     <AiOutlineShoppingCart className='text-2xl md:text-2xl cursor-pointer'/>
      </div>
      
      <div ref={ref} className="sideCart w-72 h-full text-black absolute top-0 right-0 bg-orange-200 py-10 px-7 transform transition-transform  translate-x-full">
        <h2 className='font-bold text-xl text-center'>Shopping Cart</h2>
        <span onClick={toggleCart} className="absolute top-5 right-2 cursor-pointer text-2xl text-orange-600"><AiFillCloseCircle/></span>
            <ol className='font-semibold' >
              <li>
                <div className="item flex my-5">
                   <div className='w-2/3'>1. T-shirt Wear the code </div>
                   <div className='w-1/3 flex  items-center justify-center '><AiFillPlusSquare className='mx-1 text-5xl text-orange-600 cursor-pointer ' />1<AiFillMinusSquare className='mx-1 text-5xl text-orange-600 cursor-pointer' /> <RiDeleteBin6Line className='text-5xl text-orange-600 cursor-pointer' /> </div>
                </div>
              </li>
             
            </ol>
            <button class="bg-orange-500  hover:bg-orange-700 text-white font-bold py-2 px-8 left-0 rounded">Checkout <BsFillBagHeartFill className='inline m-1 absolute '/> </button>
      </div>
    </div>
  )
}

export default Navbar
