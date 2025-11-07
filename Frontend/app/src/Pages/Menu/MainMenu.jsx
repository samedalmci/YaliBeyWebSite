"use client"

import { useState } from "react"
import { Clock, Users, Utensils, Coffee } from "lucide-react"

import Header from "../Layout/header.jsx"
import Footer from "../Layout/footer.jsx"
import MenuHero from "./MenuHero"
import MenuGaleri from "./MenuGaleri.jsx"

import menuCategories from "../../data/Menu.json";


export default function BreakfastPage() {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <MenuHero />
      <MenuGaleri />

      {/* Menu Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm font-medium text-gray-600 mb-3 tracking-widest uppercase">Menü</p>
              <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-6">Kahvaltı Seçenekleri</h2>
              <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Tüm lezzetlerimiz taze malzemelerle, özel tarif ve profesyonel şeflerimiz tarafından hazırlanıyor.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {menuCategories.map((cat, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeCategory === index
                      ? "bg-gray-900 text-white shadow-lg scale-105"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  {cat.category}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-16">
              {menuCategories[activeCategory].subcategories.map((sub, subIndex) => (
                <div key={subIndex}>
                  <h3 className="text-2xl font-serif font-medium text-gray-900 mb-6 pb-4 border-b-2 border-gray-200">
                    {sub.title}
                  </h3>
                  <div className="space-y-6">
                    {sub.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="group">
                        <div className="flex justify-between items-start gap-4 mb-2">
                          <h4 className="text-lg font-medium text-gray-900 group-hover:text-gray-700 transition-colors">
                            {item.name}
                          </h4>
                          <span className="text-lg font-serif font-medium text-gray-700 whitespace-nowrap flex-shrink-0">
                            {item.price}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                        <div className="mt-3 h-px bg-gradient-to-r from-gray-200 to-transparent" />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Info Section ve CTA değişmedi */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <Clock className="w-12 h-12 mx-auto mb-4 text-gray-700" />
                <h3 className="text-xl font-serif font-medium text-gray-900 mb-2">Açık Saatler</h3>
                <p className="text-gray-600">
                  Sabah 07:00 - Öğleden Sonra 14:00
                  <br />
                  Hafta Sonu: 07:00 - 15:00
                </p>
              </div>
              <div>
                <Users className="w-12 h-12 mx-auto mb-4 text-gray-700" />
                <h3 className="text-xl font-serif font-medium text-gray-900 mb-2">Grup Rezervasyonu</h3>
                <p className="text-gray-600">
                  10+ kişi için özel grup menüleri
                  <br />
                  ve catering hizmetleri mevcut
                </p>
              </div>
              <div>
                <Utensils className="w-12 h-12 mx-auto mb-4 text-gray-700" />
                <h3 className="text-xl font-serif font-medium text-gray-900 mb-2">Özel İstekler</h3>
                <p className="text-gray-600">
                  Vegan, glutensiz ve alerjileri
                  <br />
                  göz önüne alınan seçenekler
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 leading-tight">
              Taze Kahvaltı ile Güne Başlayın
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Bugün bizi ziyaret edin ve unutulmaz bir kahvaltı deneyimi yaşayın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">              
              <a
                href="/ClientCalendar"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white/10 transition-all duration-200"
              >
                <Coffee className="w-5 h-5" />
                Rezervasyon Yap
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
