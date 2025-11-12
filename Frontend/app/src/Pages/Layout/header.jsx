import React, { useState } from "react";
import { Sparkles, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-[100]">
      <div className="container mx-auto px-4 py-5 flex items-center justify-between relative">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-gray-800" />
          <span className="text-xl font-serif font-semibold text-gray-800 tracking-wide">
            YALIBEY RESTAURANT
          </span>
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
            href="/BreakFast"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            Kahvaltı
          </a>
          <a
            href="/Buffet"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            Açık Büfe
          </a>
          <a
            href="/Pub"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            Meyhane
          </a>
          {/* DROP-DOWN KAPSAYICI - py-4 EKLENEREK ALAN GENİŞLETİLDİ (Çözüm burada) */}
          <div
            className="relative py-4" // **DEĞİŞİKLİK BURADA: Dikey dolgu eklendi**
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            {/* Buton - Yüksekliği ve konumu py-4 ile değişti ama merkezde kaldı */}
            <button className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Etkinlikler
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>

            {/* Açılır Menü - top-full ile butonun altına tam hizalandı */}
            <div
              className={`absolute left-0 top-full w-56 bg-white shadow-lg rounded-md py-2 border border-gray-100 transition-all duration-200 ${
                isOpen
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-2 pointer-events-none"
              }`}
              style={{ zIndex: 200 }} // marginTop: '0' veya padding-top ayarlaması ile küçük boşluk bırakılabilir.
            >
              <Link
                to="/Events/Weddings"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
              >
                Nişan
              </Link>
              <Link
                to="/Events/Birthdays"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
              >
                Yaş Günü
              </Link>
              {/* <Link> yerine <a> kullanılmış, tutarlılık için <Link> önerilir */}
              <a
                href="/Events/Proposal"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
              >
                İsteme
              </a>
              <a
                href="/Events/Custom"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
              >
                Etkinliğini Kendin Tasarla
              </a>
            </div>
          </div>
          <a
            href="/About"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            Hakkımızda
          </a>

          <a
            href="/ClientCalendar"
            className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-md transition-colors"
          >
            Danışmanlık Rezervasyonu
          </a>
        </nav>
      </div>
    </header>
  );
}
