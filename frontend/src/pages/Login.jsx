import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/auth/login', form);
      localStorage.setItem('token', res.data.token); // ou 'user' si tu stockes autre chose
      navigate('/');
    } catch (err) {
      console.error(err);
      alert("Identifiants incorrects");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-100 px-4">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-orange-600 mb-6">Connexion</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="email" name="email" placeholder="Email"
            value={form.email} onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500" />
          
          <input type="password" name="password" placeholder="Mot de passe"
            value={form.password} onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500" />
          
          <button type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded shadow">
            Se connecter
          </button>
        </form>

        <p className="mt-4 text-sm text-center">
          Pas encore de compte ? <a href="/register" className="text-orange-600 underline">S'inscrire</a>
        </p>
      </div>
    </div>
  );
};

export default Login;