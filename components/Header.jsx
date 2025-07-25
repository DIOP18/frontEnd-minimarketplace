export default function Header() {
  return (
    <header className="flex flex-col items-center py-4 px-6 bg-chalkboard text-white">
      <div className="text-center text-sm tracking-wide text-accent">
        Livraison de fruits & légumes frais | Service local – Zéro déchet
      </div>
      <div className="mt-2">
        <input
          type="text"
          placeholder="Rechercher un produit..."
          className="px-3 py-1 rounded bg-white text-black w-64 text-sm"
        />
      </div>
    </header>
  )
}
