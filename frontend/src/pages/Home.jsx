import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Home.css'; // Assuming you have some styles for Home component

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Section Carrousel */}
      <Carousel autoPlay infiniteLoop showThumbs={false} interval={4000}>
        <div>
          <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.instagram.com%2Fp%2FDJ3cIjis-1y%2F&psig=AOvVaw2eKtoItMeJP3XMAeuN1MfC&ust=1753450033826000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCIC059LM1Y4DFQAAAAAdAAAAABAE" alt="market" />
          <p className="legend">Bienvenue sur Mini Marketplace</p>
        </div>
        <div>
          <img src="https://products-images.di-static.com/image/marie-aubinais-petit-ours-brun-au-supermarche/9782747055109-475x500-1.webp" alt="produits" />
          <p className="legend">Achetez et vendez localement</p>
        </div>
        <div>
          <img src="https://thumbs.dreamstime.com/z/photo-de-funky-excit%C3%A9-cheveux-courts-homme-usure-rouge-uniforme-cyclomoteur-nourriture-livraison-espace-vide-couleur-bleue-poils-252872222.jpg?ct=jpeg" alt="livraison" />
          <p className="legend">Trouvez tout, près de chez vous</p>
        </div>
      </Carousel>

      {/* Texte qui défile */}
      <div className="bg-orange-500 py-2 overflow-hidden">
        <p className="animate-marquee whitespace-nowrap text-white font-semibold text-sm md:text-md">
          Inscrivez-vous gratuitement | Vendez vos produits facilement | Achetez localement en toute confiance
        </p>
      </div>

      {/* Barre de recherche */}
      <div className="max-w-3xl mx-auto mt-8 px-4">
        <input
          type="text"
          placeholder="Rechercher un produit, un service..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      {/* Catégories */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-orange-600 mb-6">Catégories populaires</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {['Electronique', 'Vêtements', 'Services', 'Maison'].map((cat, i) => (
            <div key={i} className="bg-white p-4 rounded-lg shadow hover:shadow-lg hover:scale-105 transition transform cursor-pointer text-center">
              <img
                src={`https://source.unsplash.com/100x100/?${cat}`}
                alt={cat}
                className="mx-auto rounded-full mb-3"
              />
              <h3 className="text-md font-semibold text-gray-700">{cat}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Appel à l'action */}
      <div className="bg-white py-12 text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Prêt à vendre ou acheter ?</h3>
        <Link to="/register">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded shadow">
            Créer un compte maintenant
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;