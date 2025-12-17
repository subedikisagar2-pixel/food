import React, { useState } from "react";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-green-700 via-green-600 to-emerald-500 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-3xl">🍽</span>
          <h1 className="text-2xl font-extrabold tracking-wide">RecipeHub</h1>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8 font-medium">
          <a href="#" className="hover:text-yellow-300 transition">
            Home
          </a>
          <a href="#" className="hover:text-yellow-300 transition">
            Recipes
          </a>
          <a href="#" className="hover:text-yellow-300 transition">
            Categories
          </a>
          <a href="#" className="hover:text-yellow-300 transition">
            About
          </a>
        </nav>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="hidden md:flex bg-white rounded-full overflow-hidden shadow">
            <input
              type="text"
              placeholder="Search recipes..."
              className="px-4 py-2 text-gray-800 focus:outline-none w-44"
            />
            <button className="bg-yellow-400 px-4 text-gray-900 font-semibold hover:bg-yellow-300 transition">
              Search
            </button>
          </div>

          {/* Auth Button */}
          <button
            onClick={() => setIsLoggedIn(!isLoggedIn)}
            className="bg-black/20 backdrop-blur-md px-4 py-2 rounded-full font-semibold hover:bg-black/30 transition"
          >
            {isLoggedIn ? "Sign Out" : "Sign In"}
          </button>

          {/* Mobile Menu */}
          <button className="md:hidden text-2xl">☰</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
