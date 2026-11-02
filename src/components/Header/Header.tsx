
import { Link } from "react-router-dom";
import { ShoppingCart,Search } from "lucide-react";
import {MenuButton} from "../Menu/menu";


export function Header() {
  return (
    <header className="bg-white border-b border-gray-200">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-8">

        {/* Logotipo */}
      <MenuButton />
        <Link
          to="/"
          className="text-2xl font-bold text-purple-700"
        >
          LojaTech
        </Link>

        {/* Pesquisa */}
        <div className="flex ">
<input
          type="text"
          placeholder="Buscar produtos..."
          className="w-full max-w-md rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-purple-600"
        />
        <button className="hover:bg-purple-300 px-4 py-2 rounded-lg">
           <Search size={26} />
        </button>
       
        </div>
        
        {/* Navegação */}
        <nav className="flex items-center gap-6 ">

          <Link
            to="/"
            className=" px-4 py-2
    rounded-lg
    text-gray-700
    hover:bg-purple-300
    hover:text-white
    transition-colors
    duration-300"
          >
            Início
          </Link>

          <Link
            to="/products"
            className=" px-4 py-2
    rounded-lg
    text-gray-700
    hover:bg-purple-300
    hover:text-white
    transition-colors
    duration-300"
          >
            Produtos
          </Link>

      
          <Link
          to="/login"
          className=" px-4 py-2
    rounded-lg
    text-gray-700
    hover:bg-purple-300
    hover:text-white
    transition-colors
    duration-300"
          >
            Login
          </Link>
          <Link
            to="/cart"
            className=" px-4 py-2
    rounded-lg
    text-gray-700
    hover:bg-purple-300
    hover:text-white
    transition-colors
    duration-300"
          >
           
           <ShoppingCart size={26} className="text-purple-600" />
          </Link>
        </nav>

      </div>

    </header>
  );
}

