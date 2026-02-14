import React, { useState } from "react";
import { FaHome, FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full px-4 md:px-8 py-4 flex items-center justify-between bg-white sticky top-0 z-50 shadow-sm">
      
      <div className="flex items-center gap-2 md:gap-3">
        <div className="bg-orange-500 text-white p-2 md:p-3 rounded-xl">
          <FaHome size={18} className="md:size-5" />
        </div>
        <h1 className="text-base md:text-lg font-bold text-gray-800 whitespace-nowrap">
          Casa <span className="text-orange-500">&</span> Lar
        </h1>
      </div>

      <nav className="hidden md:block">
        <ul className="flex gap-8 text-gray-600 font-medium">
          <li className="hover:text-orange-500 cursor-pointer transition-colors">Início</li>
          <li className="hover:text-orange-500 cursor-pointer transition-colors">Produtos</li>
          <li className="hover:text-orange-500 cursor-pointer transition-colors">Contato</li>
        </ul>
      </nav>

      <div className="flex items-center gap-4">
        <div className="relative cursor-pointer p-1">
          <FaShoppingBag size={20} className="text-gray-700" />
          <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
            2
          </span>
        </div>

        <button 
          className="md:hidden text-gray-700 p-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg md:hidden animate-in fade-in slide-in-from-top-2 duration-300">
          <ul className="flex flex-col p-4 text-gray-600 font-medium">
            <li className="py-3 border-b border-gray-50 active:bg-orange-50 active:text-orange-500 px-2 rounded-lg">Início</li>
            <li className="py-3 border-b border-gray-50 active:bg-orange-50 active:text-orange-500 px-2 rounded-lg">Produtos</li>
            <li className="py-3 active:bg-orange-50 active:text-orange-500 px-2 rounded-lg">Contato</li>
          </ul>
        </div>
      )}

    </header>
  );
};

export default Header;