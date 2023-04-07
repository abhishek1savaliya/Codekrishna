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
           {Object.keys(products).map((item)=>{

           return <div key={products[item]._id}> <Link passHref={true} href={`./product/${products[item].slug}`} class="group">
              <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7  ">
                <img
                  src={products[item].img}
                  alt="Mugs"
                  class="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                 {products[item].category}
                </h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">
                  {products[item].title}
                </h2>
                <p class="mt-1 ">₹{products[item].price}</p>
                <div class="mt-1">
                  {products[item].size.includes('S') && <span className="border border-gray-300 px-1 mx-1">S</span>}
                  {products[item].size.includes('M') && <span className="border border-gray-300 px-1 mx-1">M</span>}
                  {products[item].size.includes('L') && <span className="border border-gray-300 px-1 mx-1">L</span>}
                    {products[item].size.includes('XL') && <span className="border border-gray-300 px-1 mx-1">XL</span>}
                      {products[item].size.includes('XXL') && <span className="border border-gray-300 px-1 mx-1">XXL</span>}
                </div>
                <div class="mt-1">
              {products[item].color.includes('orange') && <button className="border-2 border-gray-300 ml-1 bg-orange-500 rounded-full w-6 h-6 focus:outline-none"></button>}
              {products[item].color.includes('black') && <button className="border-2 border-gray-300 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none"></button>}
              {products[item].color.includes('pink') && <button className="border-2 border-gray-300 ml-1 bg-pink-500 rounded-full w-6 h-6 focus:outline-none"></button>}
              {products[item].color.includes('blue') && <button className="border-2 border-gray-300 ml-1 bg-blue-500 rounded-full w-6 h-6 focus:outline-none"></button>}
              {products[item].color.includes('red') && <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>}
              {products[item].color.includes('green') && <button className="border-2 border-gray-300 ml-1 bg-green-500 rounded-full w-6 h-6 focus:outline-none"></button>}
              {products[item].color.includes('yellow') && <button className="border-2 border-gray-300 ml-1 bg-yellow-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                
                </div>
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
  let tshirt = {}
  for(let item of products){
    if(item.title in tshirt){
          if(!tshirt[item.title].color.includes(item.color) && item.availableQty>0){ 
            tshirt[item.title].color.push(item.color)   
          }
          if(!tshirt[item.title].color.includes(item.size) && item.availableQty>0){ 
            tshirt[item.title].size.push(item.size)   
          }
    }else{
      tshirt[item.title] = JSON.parse(JSON.stringify((item)))
      if(item.availableQty>0){
        tshirt[item.title].color = [item.color];
        tshirt[item.title].size = [item.size];
      }
    }
  }

  return {
    props: {products: JSON.parse(JSON.stringify((tshirt)))}, // will be passed to the page component as props
  }
} 

export default Tshirt;
