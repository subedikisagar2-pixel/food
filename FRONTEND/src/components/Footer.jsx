import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-700 via-green-600 to-emerald-500 text-white mt-16">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-3xl font-extrabold mb-4">🍽 RecipeHub</h2>
          <p className="text-sm leading-relaxed text-gray-100">
            Discover delicious recipes, cooking inspiration, and step-by-step
            guides from around the world.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Explore</h3>
          <ul className="space-y-2 text-sm text-gray-100">
            <li>
              <a href="#" className="hover:text-yellow-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-300">
                Recipes
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-300">
                Categories
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-300">
                About
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm text-gray-100">
            <li>Email: support@recipehub.com</li>
            <li>Phone: +123 456 7890</li>
            <li>Location: Food City</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
          <p className="text-sm text-gray-100 mb-3">
            Get fresh recipes in your inbox.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 rounded-l-md text-gray-800 outline-none"
            />
            <button className="bg-yellow-400 px-4 rounded-r-md text-gray-900 font-semibold hover:bg-yellow-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="bg-green-800 text-center py-4 text-sm text-gray-100">
        © {new Date().getFullYear()} RecipeHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
