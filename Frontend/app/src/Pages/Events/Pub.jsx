import Header from "../Layout/header.jsx";
import Footer from "../Layout/footer.jsx";
import AboutCTA from "../About/AboutCTA.jsx";
import { Clock, MapPin } from "lucide-react";

import MenuGaleri from "../Menu/MenuGaleri.jsx";
import MenuSection from "../Menu/MenuSection";
import PubMenu from "../../Data/PubMenu.json";
import PubGaleri from "../../Data/PubGaleri.json";

export default function Tavern() {
  const serviceTimes = [
    { time: "18:00", note: "İlk Sefer" },
    { time: "19:30", note: "Akşam Servisi" },
    { time: "21:00", note: "Gece Servisi" },
    { time: "22:30", note: "Son Sefer" },
  ];

  return (
    <div>
      <Header />

      {/* Kahraman Alanı */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/WebAsset/Tavern1.jpg"
            alt="YalıBey Restaurant Meyhane Alanı"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
        </div>

        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight tracking-tight">
              Ege Esintileriyle Unutulmaz Bir Meyhane Deneyimi
            </h1>
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed drop-shadow-md">
              Mezeler, lezzetler ve deniz kenarında huzurlu akşamlar...
            </p>
          </div>
        </div>
      </section>

      {/* İçerik Bölümü */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Başlık */}
            <div className="text-center mb-16">
              <p className="text-sm font-medium text-amber-600 mb-3 tracking-widest uppercase">
                Meyhane Kültürü
              </p>
              <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-6">
                Sohbetin ve Lezzetin Buluştuğu Yer
              </h2>
            </div>
            {/* İçerik */}
            <div className="grid md:grid-cols-2 gap-16 mb-16">
              {/* Sol taraf */}
              <div>
                <div className="mb-8">
                  <img
                    src="/WebAsset/Tavern2.jpg"
                    alt="YalıBey Meyhane Masası ve Mezeler"
                    className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                  />
                </div>
                <h3 className="text-2xl font-serif font-medium text-gray-900 mb-4 border-l-4 border-amber-500 pl-4">
                  Geleneksel Tatlar, Modern Sunumlar
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Zengin meze çeşitleri, deniz ürünleri ve özenle seçilmiş
                  içeceklerle meyhane kültürünü yaşatıyoruz.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Her tabakta Ege’nin tazeliği, her sunumda YalıBey’in zarafeti
                  sizi bekliyor.
                </p>
              </div>

              {/* Sağ taraf */}
              <div>
                <div className="mb-8">
                  <img
                    src="/WebAsset/Tavern4.jpg"
                    alt="Meyhane Ortamı"
                    className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                  />
                </div>
                <h3 className="text-2xl font-serif font-medium text-gray-900 mb-4 border-l-4 border-amber-500 pl-4">
                  Huzurlu ve Samimi Atmosfer
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Günün stresinden uzaklaşabileceğiniz, dostlarınızla keyifli
                  sohbetler edebileceğiniz sıcak bir ortam sunuyoruz.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Lezzet, kalite ve samimiyeti bir araya getiren YalıBey
                  Meyhanesi, deniz kenarında unutulmaz akşamlar yaşatır.
                </p>
              </div>
            </div>

            <MenuSection menuCategories={PubMenu} />

            <MenuGaleri slides={PubGaleri} />

            <div className="mt-32 mb-24">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-3 tracking-tight">
                  <span className="text-amber-500">Özel</span> Servis Hizmeti 🚗
                </h2>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                  Konak merkezden kapınıza kadar,{" "}
                  <span className="font-semibold text-amber-600">ücretsiz</span>{" "}
                  ve konforlu transfer hizmetimizle akşamınıza başlayın.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-stretch bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden">
                {/* Sol taraf - Görsel Alanı */}
                <div className="relative min-h-[300px] md:min-h-full">
                  <img
                    src="/WebAsset/vito.jpg"
                    alt="Lüks Servis Aracı"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="text-center p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/30">
                      <p className="text-lg font-semibold text-white tracking-widest uppercase">
                        Konforlu Yolculuk
                      </p>
                      <p className="text-3xl md:text-4xl font-serif font-bold text-white mt-2">
                        YalıBey Transfer
                      </p>
                    </div>
                  </div>
                </div>

                {/* Sağ taraf - Bilgi ve Saatler */}
                <div className="p-8 lg:p-12 flex flex-col justify-between bg-gray-50">
                  <div>
                    <div className="flex items-center gap-3 pb-4 mb-6 border-b border-amber-100">
                      <MapPin className="w-6 h-6 text-amber-600" />
                      <span className="text-xl text-gray-900 font-bold">
                        Hareket Noktası: Dalyan , Merkez
                      </span>
                    </div>

                    <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-6">
                      Günlük Servis Saatleri
                    </h3>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {serviceTimes.map((service, idx) => (
                        <div
                          key={idx}
                          className="flex flex-col p-4 bg-white rounded-lg border border-amber-100 transition-all duration-300 hover:bg-amber-50 hover:shadow-md"
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <Clock className="w-5 h-5 text-amber-600" />
                            <span className="text-xl font-bold text-gray-900">
                              {service.time}
                            </span>
                          </div>
                          <span className="text-sm text-gray-700 font-medium">
                            {service.note}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Rezervasyon CTA */}
                  <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
                    <p className="text-sm text-gray-700 leading-relaxed mb-3">
                      Servis hizmetimizden yararlanmak için rezervasyon
                      sırasında belirtiniz. Yer sayısı sınırlıdır.
                    </p>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                      <span className="text-sm font-medium text-gray-600">
                        Hemen Rezervasyon Yaptırın:
                      </span>
                      <a
                        href="tel:0232XXX0000"
                        className="text-lg font-extrabold text-amber-600 hover:text-amber-700 transition-colors"
                      >
                        +90 (546) 4848-848
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AboutCTA />
      <Footer />
    </div>
  );
}
