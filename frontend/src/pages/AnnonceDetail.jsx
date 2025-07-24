import React from 'react';
import { useParams } from 'react-router-dom';

const AnnonceDetail = () => {
  const { id } = useParams();
  if (!id) return <p className="text-center mt-10 text-red-500">Aucune annonce sélectionnée.</p>;

  // Données fictives en attendant une vraie API
  const annonce = {
    id,
    titre: "Téléphone Samsung A51",
    description: "Téléphone en très bon état, utilisé moins d’un an. Batterie solide, écran sans rayure.",
    prix: "90 000 FCFA",
    ville: "Dakar",
    categorie: "Electronique",
    image: "https://source.unsplash.com/600x400/?smartphone",
    vendeur: {
      nom: "Alioune Ndiaye",
      contact: "77 123 45 67",
      email: "alioune@example.com",
    },
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img src={annonce.image} alt={annonce.titre} className="w-full h-64 object-cover" />
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{annonce.titre}</h2>
          <p className="text-orange-600 font-semibold text-xl mb-4">{annonce.prix}</p>
          <p className="text-gray-700 mb-2"><strong>Catégorie :</strong> {annonce.categorie}</p>
          <p className="text-gray-700 mb-2"><strong>Ville :</strong> {annonce.ville}</p>
          <p className="text-gray-600 mb-6">{annonce.description}</p>

          <div className="border-t pt-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Contact vendeur :</h3>
            <p className="text-gray-700"><strong>Nom :</strong> {annonce.vendeur.nom}</p>
            <p className="text-gray-700"><strong>Téléphone :</strong> {annonce.vendeur.contact}</p>
            <p className="text-gray-700"><strong>Email :</strong> {annonce.vendeur.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnonceDetail;
