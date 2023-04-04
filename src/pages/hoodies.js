import React from 'react'
import Link from 'next/link'

const Hoodies = () => {
  return (
    <div>
    <div class="bg-white">
 <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
   <h2 class="sr-only">Products</h2>

   <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
     <Link href={"./product/code wear"} class="group">
       <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7  ">
         <img src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61ScGfBD4mL._UL1500_.jpg" alt="Mugs" class="h-full w-full object-cover object-center group-hover:opacity-75" />
       </div>
       <div class="mt-4">
         <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">T-Shirt</h3>
         <h2 class="text-gray-900 title-font text-lg font-medium">Wear the Code</h2>
         <p class="mt-1 ">₹499.00</p>
         <p class="mt-1">S,M,L,XL,XXL</p>
       </div>
     </Link>
   </div>

   
 </div>
</div>
   </div>
  )
}

export default Hoodies
