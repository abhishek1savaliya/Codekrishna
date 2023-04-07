import React from "react";
import Link from "next/link";
import Image from "next/image";
const mongoose = require("mongoose");
import Product from "../../models/Product";

const Tshirt = ({products}) => {
  return (
    <div>
      <div class="bg-white">
        <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 class="sr-only">Products</h2>

          <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
           {products.map((item)=>{

           return <div key={item._id}> <Link passHref={true} href={`./product/${item.slug}`} class="group">
              <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7  ">
                <img
                  src={item.img}
                  alt="Mugs"
                  class="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                 {item.category}
                </h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">
                  {item.title}
                </h2>
                <p class="mt-1 ">₹{item.price}</p>
                <p class="mt-1">S,M,L,XL,XXL</p>
              </div>
            </Link>
            </div>
            }) }
          </div>
        </div>
      </div>
    </div>
  );
};


export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI); 
  }
 
  let products = await Product.find({category:'Tshirt'})

  return {
    props: {products: JSON.parse(JSON.stringify((products)))}, // will be passed to the page component as props
  }
} 

export default Tshirt;
