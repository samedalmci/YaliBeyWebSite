import React, { useState } from "react";
import { Sparkles, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-[100]">
      <div className="container mx-auto px4 py-5 flex items-center justify-between relative">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/TalatYali/YaliBeyLogos.png"
            alt="YALIBEY RESTAURANT Logo"
            className="h-25 w-60 object-contain" // h-20 w-20 denenebilir
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 relative">
          <a
            href="/"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            Ana Sayfa
          </a>
          <a
            // ESKİ: /BreakFast -> YENİ: /kahvalti
            href="/kahvalti"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            Kahvaltı
          </a>
          <a
            // ESKİ: /Buffet -> YENİ: /acik-bufe
            href="/acik-bufe"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            Açık Büfe
          </a>
          <a
            href="/meyhane"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            Meyhane
          </a>

          {/* ETKİNLİKLER DROP-DOWN */}
          <div
            className="relative py-4"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <button className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Etkinlikler
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>

            {/* Açılır Menü */}
            <div
              className={`absolute left-0 top-full w-56 bg-white shadow-lg rounded-md py-2 border border-gray-100 transition-all duration-200 ${
                isOpen
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-2 pointer-events-none"
              }`}
              style={{ zIndex: 200 }}
            >
              <Link
                // ESKİ: /Events/Weddings -> YENİ: /etkinlikler/dugun-organizasyonu (Nişan olarak etiketlenmiş, rota düğün/nişan için kullanılabilir)
                to="/etkinlikler/dugun-organizasyonu"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
              >
                Nişan / Düğün
              </Link>
              <Link
                // ESKİ: /Events/Birthdays -> YENİ: /etkinlikler/dogum-gunu
                to="/etkinlikler/dogum-gunu"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
              >
                Yaş Günü
              </Link>
              {/* Not: <Link> kullanılması daha tutarlı olur */}
              <Link
                // ESKİ: /Events/Proposal -> YENİ: /etkinlikler/evlilik-teklifi
                to="/etkinlikler/evlilik-teklifi"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
              >
                Evlilik Teklifi
              </Link>
              <Link
                // ESKİ: /Events/Custom -> YENİ: /etkinlikler/kendin-tasarla
                to="/etkinlikler/kendin-tasarla"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
              >
                Etkinliğini Kendin Tasarla
              </Link>
            </div>
          </div>

          {/* Hakkımızda */}
          <a
            // ESKİ: /About -> YENİ: /hakkimizda
            href="/hakkimizda"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            Hakkımızda
          </a>

          {/* Rezervasyon Butonu */}
          <a
            // ESKİ: /ClientCalendar -> YENİ: /musteri-randevulari
            href="/musteri-randevulari"
            className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-md transition-colors"
          >
            Danışmanlık Rezervasyonu
          </a>
        </nav>
      </div>
    </header>
  );
}
