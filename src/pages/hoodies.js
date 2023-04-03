import React from 'react'
import Link from 'next/link'

const Hoodies = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
<div className="container px-5 py-24 mx-auto">
<div className="flex flex-wrap -m-4">
<Link href={"./product/code wear"}>
<div className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer shadow-lg m-2">

<img alt="ecommerce" width={1500} height={1500} className="object-cover object-center w-full h-full block" src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSiFIcbahBeFOJrvLnIK_sSZwaUiPHazzYjyytHbH6qdwBjmtis6nlx35IOBBgmRPx5SYuBCTWMK2wfFzdN9Pjlciy7ulKlx0ueXdaV7C_U" />
<div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">T-Shirt</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Wear the Code</h2>
          <p className="mt-1">₹499.00</p>
          <p className="mt-1">S,M,L,XL,XXL</p>
        </div>

</div>
</Link>
</div>
</div>
</section>
    </div>
  )
}

export default Hoodies
