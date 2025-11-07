import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Sparkles, Mail, Lock } from "lucide-react";

export default function AdminPanel() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/login", { username, password });
      
      // Token'ı localStorage'a kaydet
      localStorage.setItem("token", res.data.token);

      // Axios default header olarak ayarla
      axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;

      // Başarılı giriş → ClientCalendar yönlendir
      navigate("/AdminCalendar");
    } catch (err) {
      setMessage("Hata: " + (err.response?.data?.message || "Server hatası"));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Sol taraf */}
          <div className="lg:w-1/2 relative overflow-hidden bg-gray-900 min-h-[300px] lg:min-h-[600px]">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&q=80"
                alt="Etkinlik yönetimi"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80" />
            </div>
            <div className="relative z-10 flex flex-col justify-center px-8 lg:px-12 h-full text-white">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="h-7 w-7" />
                <span className="text-2xl font-serif font-semibold tracking-wide">YALIBEY RESTAURANT</span>
              </div>
              <h1 className="text-4xl font-serif font-light mb-4 leading-tight">
                Etkinlik Yönetim
                <br />
                Paneli
              </h1>
              <p className="text-lg font-light opacity-90 leading-relaxed max-w-md">
                Rezervasyonlarınızı yönetin ve müşterilerinizle iletişimde kalın
              </p>
            </div>
          </div>

          {/* Sağ taraf */}
          <div className="lg:w-1/2 flex items-center justify-center px-8 lg:px-12 py-12">
            <div className="w-full max-w-md">
              <div className="mb-8">
                <h2 className="text-3xl font-serif font-medium text-gray-900 mb-3">Admin Girişi</h2>
                <p className="text-gray-600">Yönetim panelinize erişmek için giriş yapın</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-6">
                {/* username */}
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                    Kullanıcı Adı
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="username"
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-800 focus:border-transparent transition-all outline-none"
                      placeholder="Admin Kullanıcı Adı"
                    />
                  </div>
                </div>

                {/* password */}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Şifre
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-800 focus:border-transparent transition-all outline-none"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                {/* submit */}
                <button
                  type="submit"
                  className="w-full bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-md font-medium transition-colors"
                >
                  Giriş Yap
                </button>

                {message && <p className="mt-3 text-sm text-red-500">{message}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
