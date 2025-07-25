export default function HeroSection() {
  return (
    <section className="px-6 py-10 text-center">
      <img
        src="/banner.jpg"
        alt="Panier de légumes"
        className="mx-auto rounded-lg w-full max-w-3xl mb-6 shadow-lg"
      />
      <h1 className="text-2xl font-bold text-white mb-2">Composez votre panier local</h1>
      <p className="text-sm text-gray-300 mb-4">
        Produits frais et de saison, directement du producteur.
      </p>
      <button className="bg-accent text-white px-5 py-2 rounded-full hover:bg-purple-600 transition">
        Je compose mon panier
      </button>
    </section>
  )
}
