import React from 'react'
import Link from 'next/link'

const Stickers = () => {
  return (
    <div>
       <section class="text-gray-600 body-font">
<div class="container px-5 py-24 mx-auto">
<div class="flex flex-wrap -m-4">
<Link href={"./product/code wear"}>
<div class="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer shadow-lg m-2">

<img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://thumbs.dreamstime.com/b/cute-trendy-patches-vector-stickers-colorful-pink-yellow-turquoise-elements-white-background-collection-retro-s-style-92951490.jpg" />
<div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">T-Shirt</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Wear the Code</h2>
          <p class="mt-1">₹499.00</p>
          <p class="mt-1">S,M,L,XL,XXL</p>
        </div>

</div>
</Link>
</div>
</div>
</section>
    </div>
  )
}

export default Stickers
