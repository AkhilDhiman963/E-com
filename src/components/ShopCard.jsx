
import React, { useContext } from "react";
import { Store } from "../context/MyContext";
import { useNavigate } from "react-router";

const ShopCard = ({ product }) => {
  // eslint-disable-next-line no-unused-vars
  const { title, price, description, category, image, rating } = product;

  let {cart, setCart} = useContext(Store)

  let navigate = useNavigate()
  
  return (
    <div className="w-full max-w-[300px] overflow-hidden rounded-[32px] border border-white/10 bg-[#111111] text-white">
      {/* Image Section */}
      <div className="flex h-[300px] items-center justify-center bg-white p-8">
        <span className="sr-only">{title}</span>

        <img
          src={image}
          alt={title}
          className="h-[160px] w-full object-contain"
   onClick={() => navigate(`/detail/${product.id}`)}
        />

      </div>

      {/* Product Details */}
      <div className="p-5">

        {/* Category */}
        <p className="mb-3 text-sm capitalize tracking-wider text-gray-500">
          {category}
        </p>

        {/* Title */}
        <h2 className="mb-3 line-clamp-2 min-h-[48px] text-lg font-semibold leading-6 text-gray-200">
          {title}
        </h2>

        {/* Rating */}
        <div className="mb-3 flex items-center gap-2">
          <div className="flex items-center text-yellow-400">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5-5.8-3.1-5.8 3.1 1.1-6.5-4.7-4.6 6.5-.9L12 2.5z" />
              </svg>
            ))}
          </div>

          <span className="text-xs text-gray-500">
            ({rating?.count ?? 0})
          </span>
        </div>

        {/* Divider */}
        <div className="mb-4 border-t border-white/70" />

        {/* Price & Add Button */}
        <div className="flex items-center justify-between gap-2">
          <p className="text-2xl font-bold text-lime-400">
            ${Number(price).toFixed(2)}
          </p>

          <button
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
            className="flex items-center gap-2 rounded-full bg-lime-400 px-4 py-2 text-sm font-medium text-black transition-colors duration-300 hover:bg-lime-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l2.2 11.2a2 2 0 002 1.6h8.9a2 2 0 002-1.6L22 7H6"
              />
              <circle cx="10" cy="20" r="1" />
              <circle cx="18" cy="20" r="1" />
            </svg>

            Add
          </button>
        </div>

      </div>
    </div>
  );
};

export default ShopCard;
