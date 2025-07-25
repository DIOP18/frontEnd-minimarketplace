export default function Footer() {
  return (
    <footer className="px-6 py-6 text-sm text-gray-300 bg-black mt-10">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p>© 2025 Tous droits réservés – Votre marché local</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:underline">CGU</a>
          <a href="#" className="hover:underline">Mentions légales</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  )
}
