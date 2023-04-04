import React from 'react'
import { AiFillPlusSquare ,AiFillMinusSquare} from 'react-icons/ai';
import { RiDeleteBin6Line} from 'react-icons/ri';
import { BsFillBagHeartFill} from 'react-icons/bs';
import Link from 'next/link';

const Checkout = ({cart,clearCart,addToCart,removeFromCart,subtotal}) => {
  return (
    <div className='container m-0'>
       <div class="mt-8">
            <h1 class="flex items-center justify-center font-bold text-orange-500 text-md lg:text-3xl">Checkout page
            </h1>
        </div>
        <div class="container p-8 mx-auto">
            <div class="flex flex-col w-full px-0 mx-auto md:flex-row">
                <div class="flex flex-col md:w-full">
                    <h2 class="mb-4 font-bold md:text-xl text-heading ">Shipping Address
                    </h2>
                    <form class="justify-center w-full mx-auto" method="post" action>
                        <div class="">
                            <div class="space-x-0 lg:flex lg:space-x-4">
                                <div class="w-full lg:w-1/2">
                                    <label for="firstName" class="block mb-3 text-sm font-semibold text-gray-500">First
                                        Name</label>
                                    <input name="firstName" type="text" placeholder="First Name"
                                        class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-orange-600" />
                                </div>
                                <div class="w-full lg:w-1/2 ">
                                    <label for="firstName" class="block mb-3 text-sm font-semibold text-gray-500">Last
                                        Name</label>
                                    <input name="Last Name" type="text" placeholder="Last Name"
                                        class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-orange-600" />
                                </div>
                            </div>
                            <div class="mt-4">
                                <div class="w-full">
                                    <label for="Email"
                                        class="block mb-3 text-sm font-semibold text-gray-500">Email</label>
                                    <input name="Last Name" type="text" placeholder="Email"
                                        class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-orange-600" />
                                </div>
                            </div>
                            <div class="mt-4">
                                <div class="w-full">
                                    <label for="Address"
                                        class="block mb-3 text-sm font-semibold text-gray-500">Address</label>
                                    <textarea
                                        class="w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-orange-600"
                                        name="Address" cols="20" rows="4" placeholder="Address"></textarea>
                                </div>
                            </div>
                            <div class="space-x-0 lg:flex lg:space-x-4">
                                <div class="w-full lg:w-1/2">
                                    <label for="city"
                                        class="block mb-3 text-sm font-semibold text-gray-500">City</label>
                                    <input name="city" type="text" placeholder="City"
                                        class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-orange-600" />
                                </div>
                                <div class="w-full lg:w-1/2 ">
                                    <label for="postcode" class="block mb-3 text-sm font-semibold text-gray-500">
                                        Postcode</label>
                                    <input name="postcode" type="text" placeholder="Post Code"
                                        class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-orange-600" />
                                </div>
                            </div>
                            <div class="flex items-center mt-4">
                                <label class="flex items-center text-sm group text-heading">
                                    <input type="checkbox"
                                        class="w-5 h-5 border border-gray-300 rounded focus:outline-none focus:ring-1" />
                                    <span class="ml-2">Save this information for next time </span></label>
                            </div>
                            <div class="mt-4">
                                <button
                                    class="w-full px-6 py-2 text-white bg-orange-600 hover:bg-orange-900">Add address</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div  className="sideCart w-72 h-[100vh] md:ml-6   text-black mt-2 bg-orange-100 md:py-10  md:px-7 ">
        <h2 className='font-bold text-xl text-center'>Review Cart Item & pay</h2>
            <ol className='font-semibold' >
              {Object.keys(cart).length===0 && <div className='mt-5 mb-5 '>Your cart is empty !</div>}
           {Object.keys(cart).map((k)=>{ return <li key={k}>
                <div className="item flex my-5">
                  {console.log(cart[k].qty)}
                   <div className='w-2/3 mt-2'>{cart[k].name}</div>
                   <div className='w-1/3 flex  items-center justify-center '><AiFillPlusSquare onClick={()=>{addToCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant)}}   className='mx-1 text-5xl text-orange-500  cursor-pointer ' />{cart[k].qty}<AiFillMinusSquare onClick={()=>{removeFromCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant)}} className='mx-1 text-5xl text-orange-500 cursor-pointer' /> <RiDeleteBin6Line  className='text-5xl text-red-900 cursor-pointer' /> </div>  
                </div>
              </li>}) 
      }         <span className='font-mono'>Subtotal : {subtotal} </span>
            </ol>
            
    <div className="mt-2">
             <Link href={"/checkout"}> 
             <button  className="bg-black mr-2 hover:bg-red-800 text-white font-bold py-2 px-2 left-0 mb-2 rounded">Pay Rs.{subtotal} &#8594;</button></Link>
             
              </div>
      </div>
            </div>
        </div>

      
    </div>
  )
}

export default Checkout
