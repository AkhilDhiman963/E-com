
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Store } from "../context/MyContext";

const Detail = () => {

    const [product, setProduct] = useState()
    
  let {cart, setCart} = useContext(Store)
    
    let {id} = useParams()
    // console.log(id);

    let getSingleProductData = async () => {
        
        try {
            let res = await axios.get(`https://fakestoreapi.com/products/${id}`)
            setProduct(res.data)
            // console.log(res.data);
            
            // console.log(product);
        } catch (error) {
            console.log("error in single prdouct fetching" , error);
            
        }
    }

    useEffect(()=>{
        getSingleProductData()
    },[])
    
    
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0d0d0d] text-white">
        <p className="text-lg text-gray-500">Loading...</p>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#0d0d0d] text-white px-4 py-12 sm:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Breadcrumb */}
       
        {/* Product Details */}
        <div className="grid grid-cols-1 gap-10  rounded-3xl bg-[#0d0d0d] text-white p-5 shadow-sm sm:p-8 lg:grid-cols-2 lg:gap-14">
          {/* Product Image */}
          <div className="flex  items-center justify-center rounded-2xl bg-gray-50 p-8 sm:min-h-112.5">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-100 w-full object-contain transition duration-500 hover:scale-105"
            />
          </div>

          {/* Product Information */}
          <div className="flex flex-col justify-center py-2">
            <span className="mb-4 w-fit rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-medium capitalize text-indigo-600">
              {product.category}
            </span>

            <h1 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
              {product.title}
            </h1>

            {/* Rating */}
            <div className="mt-5 flex flex-wrap items-center gap-2">
              <span className="text-xl text-amber-400">★</span>

              <span className="font-semibold text-white">
                {product.rating?.rate ?? "N/A"}
              </span>

              <span className="text-sm text-white">
                ({product.rating?.count ?? 0} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="mt-6">
              <p className="text-3xl font-bold text-white">
                ${Number(product.price).toFixed(2)}
              </p>
              <p className="mt-1 text-sm text-green-600">
                In stock · Ready to ship
              </p>
            </div>

            {/* Description */}
            <div className="mt-6 border-t border-gray-100 pt-6">
              <h2 className="mb-2 text-lg font-semibold text-white">
                Product Description
              </h2>

              <p className="text-sm leading-7 text-white">
                {product.description}
              </p>
            </div>

            {/* Quantity */}
            <div className="mt-7">
              <p className="mb-3 text-sm font-semibold text-white">
                Quantity
              </p>

              <div className="flex w-fit items-center overflow-hidden rounded-xl border border-gray-200">
                <button
                  type="button"
                  onClick={() =>
                    setQuantity((prev) => Math.max(1, prev - 1))
                  }
                  className="px-4 py-2.5 text-lg hover:bg-gray-100"
                  aria-label="Decrease quantity"
                >
                  −
                </button>

                <span className="min-w-12 text-center font-semibold">
                  {quantity}
                </span>

                <button
                  type="button"
                  onClick={() =>
                    setQuantity((prev) => prev + 1)
                  }
                  className="px-4 py-2.5 text-lg hover:bg-gray-100"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              type="button"
            onClick={() => {
  const exists = cart.some((item) => item.id === product.id);

  const updated = exists
    ? cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      )
    : [...cart, { ...product, quantity: 1 }];

  setCart(updated);
  localStorage.setItem("cartItems", JSON.stringify(updated));
  alert("Added to the cart");
}}

            
              className="mt-7 w-full rounded-xl bg-[#c8f500] px-6 py-4 font-semibold text-black shadow-md transition hover:bg-[#c8f500d5] active:scale-[0.98] sm:w-auto"
            >
              Add to Cart · $
              {(Number(product.price) * quantity).toFixed(2)}
            </button>

            {/* Extra Information */}
            <div className="mt-6 grid grid-cols-2 gap-4 border-t border-gray-100 pt-6">
              <div>
                <p className="text-sm font-semibold text-white">
                  Quality
                </p>
                <p className="mt-1 text-xs text-white">
                  Product details available
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  Secure Shopping
                </p>
                <p className="mt-1 text-xs text-white">
                  Shop with confidence
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detail;
