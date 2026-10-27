import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";

const LINKS = ["Home", "Shop", "About"];

const BoltIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M13.5 2 4 13.5h6.2L9 22l10-12.2h-6.4L13.5 2Z" />
  </svg>
);

const CartIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="9" cy="20" r="1.4" />
    <circle cx="18" cy="20" r="1.4" />
    <path d="M2 3h3l2.6 12.2a1 1 0 0 0 1 .8h9.2a1 1 0 0 0 1-.8L20.5 7H6" />
  </svg>
);

const LogoutIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M9 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h3" />
    <path d="M16 8l4 4-4 4" />
    <path d="M20 12H9" />
  </svg>
);

const MenuIcon = ({ open }) => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    aria-hidden="true"
  >
    {open ? (
      <path d="M6 6l12 12M18 6 6 18" />
    ) : (
      <path d="M4 7h16M4 12h16M4 17h16" />
    )}
  </svg>
);

// let u = user.map((e)=>e)
// console.log(user.name);

export default function Navbar({
  // userName = name,
  cartCount = 0,

  // onCartClick = () => {},
}) {
  // eslint-disable-next-line no-unused-vars
  const [active, setActive] = useState("About");
  const [menuOpen, setMenuOpen] = useState(false);

  const iconBtn =
    "flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 " +
    "bg-white/[0.02] text-white transition-colors hover:bg-white/[0.08] " +
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#c8f500]";

  const linkClass = ({ isActive }) =>
    `transition-colors duration-300 ${
      isActive ? "text-[#c8f500]" : "text-gray-500 hover:text-white"
    }`;

  let navigate = useNavigate();

  let onLogout = () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("cartItems");
    navigate("/login", { replace: true });
  };

  const { pathname } = useLocation();

  if (pathname === "/login" || pathname === "/register") return null;

  let user = JSON.parse(localStorage.getItem("currentUser"));
  let userName = user.name || "user";

  return (
    <header className="w-full  bg-[#0d0d0d] font-sans text-white">
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#c8f500] text-black">
            <BoltIcon />
          </span>
          <span className="text-[22px] font-semibold tracking-tight">
            Sky<span className="text-[#c8f500]">Mart</span>
          </span>
        </a>

        {/* Center links (desktop) */}
        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
          {/* {LINKS.map((link) => (
            <NavLink key={link}>
              <a
                href={`/${link === "Home" ? "" : link.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActive(link);
                }}
                aria-current={active === link ? "page" : undefined}
                className={`text-base font-medium transition-colors ${
                  active === link ? "text-[#c8f500]" : "text-neutral-400 hover:text-white"
                }`}
              >
                {link}
              </a>
            </NavLink>
          ))} */}

          <NavLink to={"/"} className={linkClass}>
            Home
          </NavLink>
          <NavLink to={"/shop"} className={linkClass}>
            Shop
          </NavLink>
          <NavLink to={"/about"} className={linkClass}>
            About
          </NavLink>
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          {/* User pill */}
          <div className="hidden h-11 items-center gap-2.5 rounded-xl border border-white/10 bg-white/4 pl-2 pr-4 sm:flex">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#c8f500] text-sm font-semibold text-black">
              {userName.charAt(0).toUpperCase()}
            </span>
            <span className="text-[15px] font-medium text-neutral-200">
              {userName}
            </span>
          </div>

          {/* Cart */}
          <button
            type="button"
            onClick={() => navigate("/cart")}
            className={`${iconBtn} relative`}
            aria-label="Cart"
          >
            <CartIcon />
            {cartCount > 0 && (
              <span className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#c8f500] px-1 text-[11px] font-semibold text-black">
                {cartCount}
              </span>
            )}
          </button>

          {/* Logout */}
          <button
            type="button"
            onClick={onLogout}
            className={iconBtn}
            aria-label="Log out"
          >
            <LogoutIcon />
          </button>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            className={`${iconBtn} md:hidden`}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <ul className="flex flex-col gap-1 border-t border-white/10 px-4 py-3 md:hidden">
          {LINKS.map((link) => (
            <li key={link}>
              <NavLink
                to={`/${link === "Home" ? "" : link.toLowerCase()}`}
                end={link === "Home"}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block rounded-lg px-3 py-2.5 text-base font-medium ${
                    isActive
                      ? "bg-white/4 text-[#c8f500]"
                      : "text-neutral-400 hover:text-white"
                  }`
                }
              >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
