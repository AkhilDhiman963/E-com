import React, { useContext, useState } from "react";
import { Store } from "../context/MyContext";
import ShopCard from "../components/ShopCard";
// import { useNavigate } from "react-router";

const Shop = () => {
  const { allProductsData = [] } = useContext(Store);

const [search, setSearch] = useState("");
const [category, setCategory] = useState("all");
const [sortBy, setSortBy] = useState("featured");

const filteredProducts = allProductsData
  .filter((product) => {
    return product.title
      .toLowerCase()
      .includes(search.toLowerCase());
  })
  .filter((product) => {
    if (category === "all") {
      return true;
    }

    return product.category === category;
  });


  const sortedProducts = [...filteredProducts].sort((a,b)=>{
    if (sortBy === "price-low") {
      return a.price - b.price
    }

    if (sortBy === "price-high") {
      return b.price - a.price
    }

    if (sortBy === "rating") {
      return b.rating.rate - a.rating.rate
    }

    return 0;
    
  })
  
   

  return (
    <main className="min-h-screen w-full bg-[#0b0b0b] px-4 py-8 text-white sm:px-6 md:px-8 lg:px-12 xl:px-16">

    

      {/* Search and Filter UI */}
      <section className="mb-8 rounded-2xl border border-white/10 bg-[#111111] p-4 sm:rounded-3xl sm:p-5 lg:p-6">

        <div className="mb-5 flex flex-col gap-1">
          <h2 className="text-lg font-semibold">Find your product</h2>
          <p className="text-sm text-gray-500">
            Search, filter, and discover your next favorite.
          </p>
        </div>

        <div className="flex flex-col gap-3 lg:flex-row lg:items-center">

          {/* Search Input */}
          <div className="relative min-w-0 flex-1">
            <svg
              className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <circle cx="11" cy="11" r="7" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m20 20-4-4"
              />
            </svg>

            <input
            onChange={(e)=>{
              setSearch(e.target.value)
            }}
              type="text"
              placeholder="Search products..."
              className="w-full rounded-xl border border-white/10 bg-[#1b1b1b] py-4 pl-12 pr-4 text-sm text-white outline-none transition duration-300 placeholder:text-gray-500 hover:border-white/20 focus:border-lime-400 sm:text-base"
            />
          </div>

          {/* Category Dropdown */}
          <div className="relative w-full lg:w-[210px] lg:shrink-0">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full appearance-none cursor-pointer rounded-xl border border-white/10 bg-[#1b1b1b] py-4 pl-4 pr-12 text-sm text-gray-200 outline-none transition duration-300 hover:border-white/20 focus:border-lime-400 sm:text-base"
            >
              <option value="all">All Categories</option>
              <option value="men">Men's Clothing</option>
              <option value="women">Women's Clothing</option>
              <option value="jewelery">Jewelry</option>
              <option value="electronics">Electronics</option>
            </select>

            <svg
              className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m6 9 6 6 6-6"
              />
            </svg>
          </div>

          {/* Sort Dropdown */}
          <div className="relative w-full lg:w-[220px] lg:shrink-0">
            <select
             
  value={sortBy}
  onChange={(e) => setSortBy(e.target.value)}
              className="w-full appearance-none cursor-pointer rounded-xl border border-white/10 bg-[#1b1b1b] py-4 pl-4 pr-12 text-sm text-gray-200 outline-none transition duration-300 hover:border-white/20 focus:border-lime-400 sm:text-base"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>

            <svg
              className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m6 9 6 6 6-6"
              />
            </svg>
          </div>
        </div>

        {/* Filter Footer */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4">
          <p className="text-xs text-gray-500 sm:text-sm">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-lime-400" />
            Curated for your everyday
          </p>

          <span className="text-xs text-gray-500">
            Browse the collection
          </span>
        </div>
      </section>

      {/* Products Heading */}
      <section id="products" className="mb-5 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="mb-1 text-xs font-medium uppercase tracking-[0.2em] text-lime-400">
            Your next find
          </p>

          <h2 className="text-2xl font-bold sm:text-3xl">
            Explore products
          </h2>
        </div>

        <span className="rounded-full border border-white/10 bg-[#141414] px-4 py-2 text-xs text-gray-400 sm:text-sm">
          {sortedProducts.length} items
        </span>
      </section>

      {/* Products Grid */}

      <section>
  {sortedProducts.length > 0 ? (
    <div className="grid grid-cols-1 justify-items-center gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {sortedProducts.map((val) => (
        <div
          key={val.id}
       
          className="w-full max-w-[340px] transition duration-300 hover:-translate-y-1"
        >
          <ShopCard product={val} />
        </div>
      ))}
    </div>
  ) : (
    <div className="rounded-3xl border border-white/10 bg-[#111111] px-5 py-16 text-center">
      <h3 className="text-lg font-semibold">
        No products found
      </h3>

      <p className="mt-2 text-sm text-gray-500">
        Try another search term or category.
      </p>
    </div>
  )}
</section>
      
    

      {/* Bottom Note */}
      <footer className="mt-12 border-t border-white/10 py-6 text-center">
        <p className="text-xs tracking-wide text-gray-600">
          GOOD FINDS. EVERYDAY STYLE. YOUR KIND OF SHOPPING.
        </p>
      </footer>

    </main>
  );
};

export default Shop;
