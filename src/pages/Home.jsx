import React, { useContext } from 'react'
import { Store } from '../context/MyContext';
import { useNavigate } from "react-router";

const Home = () => {
  
    let navigate = useNavigate()
  const { allProductsData = [] } = useContext(Store);
  return (
    <div className=" w-full bg-[#0b0b0b] px-4 py-8 text-white sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Page Header */}
      <section className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-lime-400">
            Discover something new
          </p>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
             Products<span className="text-lime-400">.</span>
          </h1>

          <p className="mt-3 max-w-lg text-sm leading-6 text-gray-400 sm:text-base">
            Explore our collection of everyday essentials and
            find something you'll love.
          </p>
        </div>

        <div className="flex w-fit items-center gap-3 rounded-2xl border border-white/10 bg-[#141414] px-4 py-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-400/10 text-lime-400">
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l2.5 12h11L21 7H6M10 20h.01M18 20h.01"
              />
            </svg>
          </div>

          <div>
            <p className="text-xs text-gray-500">Our collection</p>
            <p className="text-sm font-semibold">
              {allProductsData.length} Products
            </p>
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="relative mb-8 overflow-hidden rounded-3xl border border-lime-400/15 bg-gradient-to-r from-[#1b2113] via-[#151a11] to-[#111111] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-10 -top-16 h-56 w-56 rounded-full bg-lime-400/10 blur-3xl" />

        <div className="relative z-10 max-w-xl">
          <span className="inline-flex rounded-full border border-lime-400/20 bg-lime-400/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-lime-300">
            The everyday edit
          </span>

          <h2 className="mt-5 text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
            Find your next
            <br />
            <span className="text-lime-400">favorite thing.</span>
          </h2>

          <p className="mt-3 max-w-md text-sm leading-6 text-gray-400 sm:text-base">
            Thoughtfully picked essentials, standout styles,
            and everything in between.
          </p>

          <button
            onClick={()=> navigate("/shop")}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-lime-400 px-5 py-3 text-sm font-semibold text-black transition duration-300 hover:bg-lime-300 active:scale-95"
          >
            Explore collection
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 17 17 7M7 7h10v10"
              />
            </svg>
          </button>
        </div>

        {/* Decorative shapes */}
        <div className="pointer-events-none absolute -bottom-20 right-8 hidden h-64 w-64 rotate-12 rounded-[45px] border border-lime-400/10 bg-white/[0.02] lg:block" />

        <div className="pointer-events-none absolute -bottom-24 right-32 hidden h-64 w-64 -rotate-12 rounded-[45px] border border-lime-400/10 lg:block" />

        <div className="pointer-events-none absolute right-16 top-10 hidden text-7xl font-black text-white/[0.025] lg:block">
          SHOP
        </div>
      </section>
    </div>
  )
}

export default Home
