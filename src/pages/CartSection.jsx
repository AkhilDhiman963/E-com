import React, { useContext } from "react";
import { Store } from "../context/MyContext";

const CartSection = () => {
  const { cart=[], setCart } = useContext(Store);

  // Calculate subtotal
  const subtotal = cart.reduce((total, item) => {
    return total + item.price * (item.quantity || 1);
  }, 0);

  // Increase quantity
  const increaseQuantity = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      )
    );
  };

  // Decrease quantity
  const decreaseQuantity = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, (item.quantity || 1) - 1),
            }
          : item
      )
    );
  };

  // Remove product
  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));

    function prev() {
      return cart.map((e)=>{return e})
    }

    let a = prev()
    // console.log(a);
    let b = a.filter((item) => item.id !== id)
    // console.log(b);
    
    
    
    // let a = (prev) =>  prev.filter((item) => item.id !== id)
    // console.log(prev);
    
    localStorage.setItem("cartItems",JSON.stringify(b))
  };

  return (
    <main className="min-h-screen bg-[#0b0b0b] px-4 py-10 text-white sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-10">
          <p className="mb-2 text-sm uppercase tracking-[0.25em] text-lime-400">
            Your collection
          </p>
          <h1 className="text-3xl font-bold sm:text-4xl">
            Shopping Cart
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            You have {cart.length} items in your cart.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

          {/* Cart Products */}
          <section className="space-y-4 lg:col-span-2">
            {cart.length > 0 ? (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-[#111111] p-4 sm:flex-row sm:items-center sm:p-6"
                >
                  {/* Image */}
                  <div className="flex h-36 w-full shrink-0 items-center justify-center rounded-xl bg-white p-4 sm:h-32 sm:w-32">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="min-w-0 flex-1">
                    <p className="mb-2 text-xs uppercase tracking-wider text-gray-500">
                      {item.category}
                    </p>

                    <h2 className="line-clamp-2 text-lg font-semibold">
                      {item.title}
                    </h2>

                    <p className="mt-2 text-xl font-bold text-lime-400">
                      ${item.price.toFixed(2)}
                    </p>

                    {/* Quantity */}
                    <div className="mt-4 flex items-center gap-3">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 hover:border-lime-400"
                      >
                        −
                      </button>

                      <span className="min-w-5 text-center">
                        {item.quantity || 1}
                      </span>

                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 hover:border-lime-400"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Item Total and Remove */}
                  <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
                    <p className="font-semibold">
                      ${(item.price * (item.quantity || 1)).toFixed(2)}
                    </p>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-sm text-gray-500 transition hover:text-red-400"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="rounded-2xl border border-white/10 bg-[#111111] px-6 py-16 text-center">
                <h2 className="text-xl font-semibold">
                  Your cart is empty
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  Add some products to see them here.
                </p>
              </div>
            )}
          </section>

          {/* Order Summary */}
          <aside className="h-fit rounded-2xl border border-white/10 bg-[#111111] p-6 lg:sticky lg:top-8">
            <h2 className="text-xl font-semibold">Order Summary</h2>

            <div className="mt-6 space-y-4 text-sm">
              <div className="flex justify-between text-gray-400">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-gray-400">
                <span>Shipping</span>
                <span className="text-lime-400">Free</span>
              </div>

              <div className="border-t border-white/10 pt-4">
                <div className="flex justify-between text-base font-bold">
                  <span>Total</span>
                  <span className="text-lime-400">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            <button
            onClick={()=>{
                alert("Feature coming soon")
            }}
              disabled={cart.length === 0}
              className="mt-7 w-full rounded-xl bg-lime-400 py-4 font-semibold text-black transition hover:bg-lime-300 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Proceed to Checkout →
            </button>

            <p className="mt-4 text-center text-xs text-gray-500">
              Secure checkout · Easy returns
            </p>
          </aside>

        </div>
      </div>
    </main>
  );
};

export default CartSection;