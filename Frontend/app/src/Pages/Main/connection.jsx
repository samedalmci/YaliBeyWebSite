import React from "react";
import { Link } from "react-router-dom";
import { Calendar } from 'lucide-react'

export default function Connection() {
  return (
    <section className="py-24 bg-gray-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light mb-6">
          Her Zaman, Her An İçin Özel Bir Deneyim
        </h2>
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed opacity-90">
          Güne keyifli bir kahvaltıyla başlayın, akşam dostlarınızla meyhane
          atmosferinde buluşun ya da özel etkinliğinizi bize emanet edin. 
          YalıBey Restaurant’ta her detay sizin için planlanır.
        </p>
            <a
              href="/ClientCalendar"
              className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Calendar className="w-5 h-5" />
              Rezervasyon Yap
            </a>
      </div>
    </section>
  );
}
