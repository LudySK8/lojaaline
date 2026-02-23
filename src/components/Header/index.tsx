import { useState } from 'react';
import { FaHome, FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full px-6 md:px-12 py-4 flex items-center justify-between bg-white sticky top-0 z-50 shadow-sm">
      <div className="flex items-center gap-3">
        <Link to="/" className="bg-orange-500 text-white p-2 rounded-lg flex items-center justify-center">
          <FaHome size={20} />
        </Link>
        <h1 className="text-lg md:text-xl font-bold text-gray-800">
          Casa <span className="text-orange-500">&</span> Lar
        </h1>
      </div>

      {/* Navegação Desktop */}
      <nav className="hidden md:block">
        <ul className="flex gap-8 text-gray-600 font-medium">
          <li><Link to="/" className="hover:text-orange-500 cursor-pointer">Início</Link></li>
          <li className="hover:text-orange-500 cursor-pointer">Produtos</li>
          <li className="hover:text-orange-500 cursor-pointer">Contato</li>
        </ul>
      </nav>

      <div className="flex items-center gap-5">
        <div className="relative cursor-pointer">
          <FaShoppingBag size={22} className="text-gray-700" />
          <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full border border-white font-bold">3</span>
        </div>

        <Link to="/login" className="text-orange-500 hover:text-orange-600 transition-all">
          <CiUser size={30} className="stroke-1" />
        </Link>

        <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t shadow-lg md:hidden p-6 z-50">
          <ul className="flex flex-col gap-4 text-gray-700 font-bold">
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Início</Link></li>
            <li>Produtos</li>
            <li>Contato</li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;