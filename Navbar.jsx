import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiUser } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Exemple de gestion d'utilisateur connecté
  const user = {
    isAuthenticated: true,
    role: "vendeur", // ou "acheteur"
  };

  const navLinks = [
    { name: "Accueil", path: "/" },
    { name: "Annonces", path: "/annonces" },
    { name: "Créer une annonce", path: "/nouvelle-annonce", role: "vendeur" },
    { name: "Mes annonces", path: "/mon-compte", role: "vendeur" },
    { name: "Messages", path: "/messages", role: "vendeur" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-orange-500 font-bold text-xl">
          MiniMarket
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 items-center">
          {navLinks.map(
            (link) =>
              (!link.role || user.role === link.role) && (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-800 hover:text-orange-500 font-medium transition"
                  >
                    {link.name}
                  </Link>
                </li>
              )
          )}
          {user.isAuthenticated ? (
            <li>
              <Link to="/profile">
                <FiUser className="text-gray-800 hover:text-orange-500 text-xl" />
              </Link>
            </li>
          ) : (
            <>
              <li>
                <Link
                  to="/login"
                  className="text-gray-800 hover:text-orange-500 font-medium"
                >
                  Connexion
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="bg-orange-500 text-white px-4 py-1.5 rounded hover:bg-orange-600 transition"
                >
                  Inscription
                </Link>
              </li>
            </>
          )}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white px-4 pb-4 space-y-3 shadow">
          {navLinks.map(
            (link) =>
              (!link.role || user.role === link.role) && (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="block text-gray-800 hover:text-orange-500 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              )
          )}
          {user.isAuthenticated ? (
            <li>
              <Link
                to="/profile"
                className="block text-gray-800 hover:text-orange-500"
              >
                Mon Profil
              </Link>
            </li>
          ) : (
            <>
              <li>
                <Link
                  to="/login"
                  className="block text-gray-800 hover:text-orange-500"
                >
                  Connexion
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="block text-white bg-orange-500 px-4 py-1.5 rounded hover:bg-orange-600"
                >
                  Inscription
                </Link>
              </li>
            </>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
