import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-orange-500 text-white py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Présentation */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Mini Marketplace</h2>
          <p className="text-sm">Achetez et vendez des produits en toute simplicité dans votre localité.</p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-md font-semibold mb-2">Navigation</h3>
          <ul className="space-y-1 text-sm">
            <li><Link to="/" className="hover:underline">Accueil</Link></li>
            <li><Link to="/login" className="hover:underline">Se connecter</Link></li>
            <li><Link to="/register" className="hover:underline">S'inscrire</Link></li>
            <li><Link to="/annonces" className="hover:underline">Voir les annonces</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-md font-semibold mb-2">Contact</h3>
          <p className="text-sm">Email : contact@minimarketplace.com</p>
          <p className="text-sm">Téléphone : +221 77 000 00 00</p>
        </div>
      </div>

      <div className="text-center text-sm mt-6 border-t border-orange-400 pt-4">
        &copy; {new Date().getFullYear()} Mini Marketplace. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
