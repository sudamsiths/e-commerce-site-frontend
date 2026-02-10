import Logo from "../../assets/images/Nike-Logo-navbar.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../../context/CartContext";

function Navbar() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartCount } = useCart();

  return (
    <>
      <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-200 bg-white/95 backdrop-blur-md transition-all shadow-sm sticky top-0 z-50">
        <a
          href="https://nike.com"
          className="transform hover:scale-105 transition-transform duration-300"
        >
          <img
            className="h-12 w-30 p-0 m-0 object-contain drop-shadow-md"
            src={Logo}
            alt="Nike Logo"
          />
        </a>

        <button
          aria-label="Menu"
          id="menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="sm:hidden hover:bg-gray-100 p-2 rounded-lg transition-colors duration-200"
        >
          <svg
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform duration-300"
          >
            <rect width="21" height="1.5" rx=".75" fill="#426287" />
            <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
            <rect
              x="6"
              y="13"
              width="15"
              height="1.5"
              rx=".75"
              fill="#426287"
            />
          </svg>
        </button>

        <div
          id="mobile-menu"
          className={`${mobileMenuOpen ? "flex" : "hidden"} absolute top-15 left-0 w-full bg-linear-to-b from-white to-gray-50 shadow-xl py-6 flex-col items-start gap-4 px-6 text-sm md:hidden border-t border-gray-200 animate-slide-down`}
        >
          <button
            className="block w-full py-2 px-3 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-all duration-200 font-medium"
            onClick={() => navigate("/dashboard")}
          >
            Home
          </button>
          <button
            onClick={() => navigate("/dashboard")}
            className="block w-full py-2 px-3 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-all duration-200 font-medium"
          >
            About
          </button>
          <button
            onClick={() => navigate("/dashboard")}
            className="block w-full py-2 px-3 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-all duration-200 font-medium"
          >
            Contact
          </button>
          <button
            onClick={() => navigate("/cart")}
            className="flex items-center justify-between w-full py-2 px-3 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-all duration-200 font-medium"
          >
            <span>Cart</span>
            {cartCount > 0 && (
              <span className="bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                {cartCount}
              </span>
            )}
          </button>
          <button
            onClick={() => navigate("/")}
            className="w-full cursor-pointer px-6 py-2.5 mt-2 bg-linear-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 transition-all duration-300 text-white rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Login
          </button>
        </div>

        <div className="hidden sm:flex items-center gap-8">
          <button
            onClick={() => navigate("/dashboard")}
            className="relative group py-2 font-medium text-gray-700 hover:text-indigo-600 transition-colors duration-300"
          >
            Home{" "}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-indigo-500 to-indigo-600 group-hover:w-full transition-all duration-300" />
          </button>
          <button
            onClick={() => navigate("/about")}
            className="relative group py-2 font-medium text-gray-700 hover:text-indigo-600 transition-colors duration-300"
          >
            About{" "}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-indigo-500 to-indigo-600 group-hover:w-full transition-all duration-300" />
          </button>
          <button
            onClick={() => navigate("/contact")}
            className="relative group py-2 font-medium text-gray-700 hover:text-indigo-600 transition-colors duration-300"
          >
            Contact{" "}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-indigo-500 to-indigo-600 group-hover:w-full transition-all duration-300" />
          </button>

          <div className="hidden lg:flex items-center text-sm gap-2 border-2 border-gray-200 px-4 rounded-full hover:border-indigo-300 focus-within:border-indigo-500 focus-within:shadow-lg transition-all duration-300 bg-gray-50/50 hover:bg-white">
            <input
              className="py-2 w-full bg-transparent outline-none placeholder-gray-400 text-gray-700 font-medium"
              type="text"
              placeholder="Search products"
            />
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0 opacity-60 hover:opacity-100 transition-opacity"
            >
              <path
                d="M10.836 10.615 15 14.695"
                stroke="#7A7B7D"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                clipRule="evenodd"
                d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783"
                stroke="#7A7B7D"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="relative cursor-pointer group">
            <button onClick={() => navigate("/cart")} className="relative">
              <div className="p-2 hover:bg-indigo-50 rounded-full transition-all duration-300">

                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="group-hover:scale-110 transition-transform duration-300 cursor-pointer"
                >
                  <path
                    d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0"
                    stroke="#615fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              {cartCount > 0 && (
                <div className="absolute -top-1 -right-2 text-xs text-white bg-linear-to-r from-indigo-500 to-indigo-600 w-5 h-5 rounded-full flex items-center justify-center font-bold shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-300 animate-pulse">
                  {cartCount}
                </div>
              )}
            </button>

          </div>

          <button
            onClick={() => navigate("/")}
            className="cursor-pointer px-8 py-2.5 bg-linear-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 transition-all duration-300 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-0.5"
          >
            Login
          </button>
          <button id="button-Add" onClick={() => navigate("/add-product")}>
            Add Products
          </button>
        </div>
      </nav >
    </>
  );
}

export default Navbar;
