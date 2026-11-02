import { useState } from "react";
import { Menu, X } from "lucide-react";

export function MenuButton() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      {/* Botão para abrir e fechar */}
      <button
        onClick={toggleMenu}
        className="relative z-50 cursor-pointer"
        aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={menuOpen}
        aria-controls="menu-lateral"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Fundo escuro */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Barra lateral */}
      <aside
        id="menu-lateral"
        inert={!menuOpen}
        className={`
          fixed top-0 left-0 z-40
          h-screen w-72 max-w-[85vw]
          bg-white p-6 pt-20 shadow-xl
          transform transition-transform duration-300 ease-in-out
          ${menuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <h2 className="mb-8 text-2xl font-bold">
          Menu
        </h2>

        <nav>
          <ul className="space-y-5">
            <li>
              <a href="/" className="hover:text-blue-600">
                Início
              </a>
            </li>
            <li>
              <a href="/produtos" className="hover:text-blue-600">
                Produtos
              </a>
            </li>
            <li>
              <a href="/ofertas" className="hover:text-blue-600">
                Ofertas
              </a>
            </li>
            <li>
              <a href="/contato" className="hover:text-blue-600">
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}