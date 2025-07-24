import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const annoncesFictives = [
  {
    id: 1,
    titre: "Chaussures homme taille 42",
    prix: "15 000 FCFA",
    ville: "Dakar",
    categorie: "Vêtements",
    image: "https://source.unsplash.com/400x300/?shoes",
  },
  {
    id: 2,
    titre: "Téléviseur 32 pouces",
    prix: "75 000 FCFA",
    ville: "Thiès",
    categorie: "Electronique",
    image: "https://source.unsplash.com/400x300/?tv",
  },
  {
    id: 3,
    titre: "Cours de soutien en mathématiques",
    prix: "5 000 FCFA/heure",
    ville: "Ziguinchor",
    categorie: "Services",
    image: "https://source.unsplash.com/400x300/?tutor",
  },
];

const AnnonceList = () => {
  const [categorie, setCategorie] = useState('');
  const [ville, setVille] = useState('');

  const annoncesFiltrees = annoncesFictives.filter((a) => {
    return (
      (categorie === '' || a.categorie === categorie) &&
      (ville === '' || a.ville === ville)
    );
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-orange-600 mb-6">Annonces disponibles</h1>

      {/* Filtres */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <select
          value={categorie}
          onChange={(e) => setCategorie(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          <option value="">Toutes les catégories</option>
          <option value="Electronique">Électronique</option>
          <option value="Vêtements">Vêtements</option>
          <option value="Services">Services</option>
        </select>

        <select
          value={ville}
          onChange={(e) => setVille(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          <option value="">Toutes les villes</option>
          <option value="Dakar">Dakar</option>
          <option value="Thiès">Thiès</option>
          <option value="Ziguinchor">Ziguinchor</option>
        </select>
      </div>

      {/* Annonces */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {annoncesFiltrees.map((annonce) => (
          <div key={annonce.id} className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300">
            <img src={annonce.image} alt={annonce.titre} className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-1">{annonce.titre}</h2>
              <p className="text-orange-600 font-bold mb-2">{annonce.prix}</p>
              <p className="text-gray-600 text-sm mb-4">{annonce.ville} - {annonce.categorie}</p>
              <Link
                to={`/annonce/${annonce.id}`}
                className="text-sm text-white bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded inline-block"
              >
                Voir plus
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnnonceList;
