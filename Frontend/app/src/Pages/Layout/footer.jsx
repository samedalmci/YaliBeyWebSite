import React from "react";
import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import "/src/index.css";

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-0 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg font-serif font-semibold tracking-wide">
                <img
                  src="/src/assets/TalatYali/YaliBeyLogos.png"
                  alt="YALIBEY RESTAURANT Logo"
                  className="h-25 w-60 object-contain" // h-20 w-20 denenebilir
                />
              </span>
            </div>
          </div>

          {/* NAVİGASYON */}
          <div>
            <h3 className="font-medium mb-4 text-gray-900">Navigasyon</h3>
            <ul className="space-y-3 text-gray-600">
              <li>
                <Link to="/" className="hover:text-gray-900 transition-colors">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link
                  to="/kahvalti"
                  className="hover:text-gray-900 transition-colors"
                >
                  Kahvaltı
                </Link>
              </li>
              <li>
                <Link
                  to="/acik-bufe"
                  className="hover:text-gray-900 transition-colors"
                >
                  Açık Büfe
                </Link>
              </li>
              <li>
                <Link
                  to="/meyhane"
                  className="hover:text-gray-900 transition-colors"
                >
                  Meyhane
                </Link>
              </li>
              <li>
                <Link
                  to="/hakkimizda"
                  className="hover:text-gray-900 transition-colors"
                >
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link
                  to="/musteri-randevulari"
                  className="hover:text-gray-900 transition-colors"
                >
                  Danışmanlık Rezervasyonu
                </Link>
              </li>
              <li>
                <Link
                  to="/giris"
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Admin Giriş
                </Link>
              </li>
            </ul>
          </div>

          {/* ETKİNLİKLER */}
          <div>
            <h3 className="font-medium mb-4 text-gray-900">Etkinlikler</h3>
            <ul className="space-y-3 text-gray-600">
              <li>
                <Link
                  to="/etkinlikler/dugun-organizasyonu"
                  className="hover:text-gray-900 transition-colors"
                >
                  Nişan / Düğün
                </Link>
              </li>
              <li>
                <Link
                  to="/etkinlikler/dogum-gunu"
                  className="hover:text-gray-900 transition-colors"
                >
                  Yaş Günü
                </Link>
              </li>
              <li>
                <Link
                  to="/etkinlikler/evlilik-teklifi"
                  className="hover:text-gray-900 transition-colors"
                >
                  Evlilik Teklifi
                </Link>
              </li>
              <li>
                <Link
                  to="/etkinlikler/kendin-tasarla"
                  className="hover:text-gray-900 transition-colors"
                >
                  Etkinliğini Kendin Tasarla
                </Link>
              </li>
            </ul>
          </div>

          {/* İLETİŞİM */}
          <div>
            <h3 className="font-medium mb-4 text-gray-900">İletişim</h3>
            <ul className="space-y-3 text-gray-600">
              <li>iletisim@luminaryevents.com</li>
              <li>+90 (546) 4848-848</li>
              <li>Muğla, Türkiye</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8 text-center text-gray-600 text-sm">
          <p>&copy; 2025 YalıBey Restaurant. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
