import React from "react"
import { Link } from "react-router-dom";

export default function Hero() {
  return (    
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/TalatYali/DışMekan.jpg"
            alt="Zarif etkinlik"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light mb-6 leading-tight">
            Lezzet ve Kutlamanın
            <br />
             Buluşma Noktası
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl font-light mb-10 max-w-3xl mx-auto leading-relaxed">
            Kahvaltı, meyhane ve organizasyon keyfini bir arada yaşayın
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/Menu" className="bg-white text-gray-800 hover:bg-gray-100 px-10 py-4 rounded-md text-base font-medium transition-colors">
              Menülerimizi Keşfedin
            </Link>

            <Link to="/ClientCalendar" className="border-2 border-white text-white hover:bg-white/10 px-10 py-4 rounded-md text-base font-medium transition-colors">
              Rezervasyon Yapın
            </Link>
          </div>
        </div>
      </section>    
  );
}