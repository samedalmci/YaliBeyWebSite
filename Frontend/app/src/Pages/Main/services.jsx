import React from "react";
import { Heart, Users, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function Services() {
    return (
        <section id="services" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <p className="text-sm font-medium text-gray-600 mb-3 tracking-widest uppercase">Neler Sunuyoruz</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-gray-900 mb-6">
              Kapsamlı Etkinlik Hizmetleri
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Samimi toplantılardan görkemli kutlamalara kadar her vesileye uzmanlık ve sanat anlayışı getiriyoruz
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="border border-gray-200 rounded-lg p-8 bg-white hover:shadow-xl transition-all duration-300 group">
              <Heart className="h-10 w-10 text-gray-400 group-hover:text-rose-500 transition-colors duration-300 mb-6" />
              <h3 className="text-2xl font-serif font-medium text-gray-900 mb-4">Düğünler</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Benzersiz aşk hikayenizi zarafet ve sofistikeyle yakalayan özel düğün planlama ve tasarım hizmetleri
              </p>
              <Link to="/Events/Weddings" className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md transition-colors">
                Düğünleri Keşfet
              </Link>
            </div>

            <div className="border border-gray-200 rounded-lg p-8 bg-white hover:shadow-xl transition-all duration-300 group">
              <Users className="h-10 w-10 text-gray-400 group-hover:text-blue-600 transition-colors duration-300 mb-6" />
              <h3 className="text-2xl font-serif font-medium text-gray-900 mb-4">Evlilik Teklifi</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Hayatınızın en özel anı için; hassasiyet, romantizm ve kusursuz bir tarzla yürütülen kişiye özel teklif senaryoları.
              </p>
              <Link to="/etkinlikler/evlilik-teklifi" className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md transition-colors">
                Evlilik Teklifini Planla
              </Link>
            </div>

            <div className="border border-gray-200 rounded-lg p-8 bg-white hover:shadow-xl transition-all duration-300 group">
              <Sparkles className="h-10 w-10 text-gray-400 group-hover:text-purple-600 transition-colors duration-300 mb-6" />
              <h3 className="text-2xl font-serif font-medium text-gray-900 mb-4">Özel Partiler</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Kalıcı anılar yaratmak için tasarlanmış dönüm noktası kutlamaları, yıldönümleri ve samimi toplantılar
              </p>
              <Link to="/Events/Custom" className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md transition-colors">
                Partinizi Planlayın
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
}