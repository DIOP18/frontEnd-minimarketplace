export default function Services() {
  const services = [
    {
      title: "Commande en ligne",
      desc: "Faites votre panier selon vos envies.",
      icon: "🧺",
    },
    {
      title: "Producteurs locaux",
      desc: "Des circuits courts & transparents.",
      icon: "🌾",
    },
    {
      title: "Livraison rapide",
      desc: "Chez vous ou en point relais.",
      icon: "🚚",
    },
    {
      title: "Zéro déchet",
      desc: "Emballages recyclables ou consignés.",
      icon: "♻️",
    },
  ]

  return (
    <section className="px-6 py-10 bg-chalkboard">
      <h2 className="text-xl font-semibold text-white mb-6">Nos engagements</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {services.map((s, idx) => (
          <div key={idx} className="text-center p-4 bg-white/5 rounded-lg">
            <div className="text-3xl mb-2">{s.icon}</div>
            <h3 className="text-white font-semibold">{s.title}</h3>
            <p className="text-sm text-gray-300">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
