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
              <Sparkles className="h-5 w-5 text-gray-900" />
              <span className="text-lg font-serif font-semibold tracking-wide">
                YALIBEY RESTAURANT
              </span>
            </div>
            <p className="text-gray-600 leading-relaxed max-w-md">
              Olağanüstü kutlamalar ve unutulmaz anlar yaratıyoruz
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-4 text-gray-900">Navigasyon</h3>
            <ul className="space-y-3 text-gray-600">
              <li>
                <Link to="/" className="hover:text-gray-900 transition-colors">
                  AnaSayfa
                </Link>
              </li>
              <li>
                <Link
                  to="/BreakFast"
                  className="hover:text-gray-900 transition-colors"
                >
                  Kahvaltı
                </Link>
              </li>
              <li>
                <Link
                  to="/Buffet"
                  className="hover:text-gray-900 transition-colors"
                >
                  Açık Büfe
                </Link>
              </li>
              <li>
                <Link
                  to="/Pub"
                  className="hover:text-gray-900 transition-colors"
                >
                  Meyhane
                </Link>
              </li>
              <li>
                <Link
                  to="/About"
                  className="hover:text-gray-900 transition-colors"
                >
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link
                  to="/ClientCalendar"
                  className="hover:text-gray-900 transition-colors"
                >
                  Danışmanlık Rezervasyonu
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Admin Giriş
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4 text-gray-900">Etkinlikler</h3>
            <ul className="space-y-3 text-gray-600">
              <li>
                <Link
                  to="/Events/Weddings"
                  className="hover:text-gray-900 transition-colors"
                >
                  Nişan
                </Link>
              </li>
              <li>
                <Link
                  to="/Events/Birthdays"
                  className="hover:text-gray-900 transition-colors"
                >
                  Yaş Günü
                </Link>
              </li>
              <li>
                <Link
                  to="/Events/Proposal"
                  className="hover:text-gray-900 transition-colors"
                >
                  İsteme
                </Link>
              </li>
              <li>
                <Link
                  to="/Events/Custom"
                  className="hover:text-gray-900 transition-colors"
                >
                  Etkinliğini Kendin Tasarla
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-gray-900">İletişim</h3>
            <ul className="space-y-3 text-gray-600">
              <li>iletisim@luminaryevents.com</li>
              <li>+90 (555) 123-4567</li>
              <li>İstanbul, Türkiye</li>
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
