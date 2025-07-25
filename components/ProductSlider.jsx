import { products } from '../assets/exampleProducts'

export default function ProductSlider() {
  return (
    <section className="px-6 py-10">
      <h2 className="text-xl font-semibold text-white mb-6">Sélection de produits</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((item, idx) => (
          <div key={idx} className="bg-white text-black rounded shadow-lg p-4">
            <img src={item.image} alt={item.name} className="rounded w-full h-32 object-cover mb-3" />
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-sm text-gray-700">{item.description}</p>
            <div className="mt-2 text-primary font-bold">{item.price} €</div>
          </div>
        ))}
      </div>
    </section>
  )
}
