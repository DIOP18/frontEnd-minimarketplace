import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    role: 'acheteur',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/auth/register', form);
      navigate('/login');
    } catch (err) {
      console.error(err);
      alert("Erreur lors de l'inscription");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-100 px-4">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-orange-600 mb-6">Créer un compte</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
           <label htmlFor="name"> Nom</label>
          <input type="text" name="name" placeholder="Nom "
            value={form.name} onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500" />

          <label htmlFor="name"> Prenom</label>
            <input type="text" name="prenom" placeholder="prenom"
            value={form.name} onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500" />

          <label htmlFor="email"> email</label>
          <input type="email" name="email" placeholder="Email"
            value={form.email} onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500" />
          
          <label htmlFor="password"> mot de passe</label>
          <input type="password" name="password" placeholder="Mot de passe"
            value={form.password} onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500" />

          <label htmlFor="password"> Confirmer le mot de passe</label>
              <input type="password" name="password" placeholder="  comfirmer Mot de passe"
            value={form.password} onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500" />
          
          <label htmlFor="role"> Qui etes vous?</label> <br />
         
          <select name="role" value={form.role} onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500">
            <option value="vendeur">Vendeur</option>
            <option value="acheteur">Acheteur</option>
          </select>

          <button type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded shadow">
            S'inscrire
          </button>
        </form>

        <p className="mt-4 text-sm text-center">
          Vous avez déjà un compte ? <a href="/login" className="text-orange-600 underline">Se connecter</a>
        </p>
      </div>
    </div>
  );
};

export default Register;