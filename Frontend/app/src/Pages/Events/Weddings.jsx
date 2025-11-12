import Header from "../Layout/header.jsx";
import Footer from "../Layout/footer.jsx";
import AboutCTA from "../About/AboutCTA.jsx";

export default function Engagement() {
  return (
    <div>
      <Header />

      {/* Kahraman Alanı */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/src/assets/WebAsset/Wedding1.jpg"
            alt="YalıBey Restaurant Nişan Alanı"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
        </div>

        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight tracking-tight">
              Hayalinizdeki Nişan, YalıBey’de Gerçek Oluyor
            </h1>
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed drop-shadow-md">
              Zarif detaylar, lezzetli menüler ve özenle planlanmış bir
              kutlama...
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
                Nişan Etkinliği
              </p>
              <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-6">
                Aşkınızın İlk Kutlaması İçin Unutulmaz Bir Ortam
              </h2>
            </div>

            {/* İçerik */}
            <div className="grid md:grid-cols-2 gap-16 mb-16">
              {/* Sol taraf */}
              <div>
                <div className="mb-8">
                  <img
                    src="/src/assets/WebAsset/Wedding2.jpg"
                    alt="Nişan Masası ve Süslemeleri"
                    className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                  />
                </div>
                <h3 className="text-2xl font-serif font-medium text-gray-900 mb-4 border-l-4 border-amber-500 pl-4">
                  Zarif Bir Başlangıç
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  YalıBey Restaurant, zarif tasarımıyla aşkınızın ilk adımını
                  özel kılar. Her detay sizin tarzınıza göre planlanır ve
                  romantik bir atmosfer sunar.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Dekorasyondan müziğe, masa düzeninden menüye kadar her detay
                  profesyonel ekibimizce hazırlanır.
                </p>
              </div>

              {/* Sağ taraf */}
              <div>
                <div className="mb-8">
                  <img
                    src="/src/assets/WebAsset/Wedding3.jpg"
                    alt="Nişan Kutlaması"
                    className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                  />
                </div>
                <h3 className="text-2xl font-serif font-medium text-gray-900 mb-4 border-l-4 border-amber-500 pl-4">
                  Lezzet & Atmosfer
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Misafirlerinizi YalıBey mutfağının özenle hazırladığı
                  lezzetlerle ağırlayın. Her ayrıntı, sıcak ve samimi bir
                  ortamda mükemmel bir deneyim için düşünülür.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Profesyonel servis ekibimizle her şey kusursuz ilerler.
                </p>
              </div>
            </div>

            {/* Alıntı kısmı */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-2xl p-12 text-center shadow-2xl">
              <p className="text-2xl md:text-3xl font-serif font-light text-gray-900 mb-4 italic leading-relaxed">
                “Her detayda zarafet, her anında mutluluk...
                <br />
                Aşkınızın sembolü, YalıBey’in büyüsüyle taçlanıyor.”
              </p>
              <p className="text-gray-600 font-medium">
                — YalıBey Restaurant Ekibi
              </p>
            </div>

            {/* GALERİ ALANI */}
            <div className="mt-24 text-center">
              <p className="text-sm font-medium text-amber-600 mb-2 tracking-widest uppercase">
                Görsel Hafıza
              </p>
              <h2 className="text-3xl font-serif font-light text-gray-900 mb-10">
                Kutlamalardan Kareler
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="col-span-2 lg:col-span-2">
                  <img
                    src="/src/assets/WebAsset/Wedding4.jpg"
                    alt="Nişan Alanı"
                    className="w-full h-[30rem] object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
                <img
                  src="/src/assets/WebAsset/Wedding4.jpg"
                  alt="Nişan Pastası"
                  className="w-full h-[30rem] object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
                <img
                  src="/src/assets/WebAsset/Wedding4.jpg"
                  alt="Nişan Detayı"
                  className="w-full h-[30rem] object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
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
