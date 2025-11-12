import Header from "../Layout/header.jsx";
import Footer from "../Layout/footer.jsx";
import AboutCTA from "../About/AboutCTA.jsx";

export default function Breakfast() {
  return (
    <div>
      <Header />

      {/* Kahraman Alanı */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/src/assets/WebAsset/Breakfast1.jpg"
            alt="YalıBey Restaurant Kahvaltı Alanı"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>

        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight tracking-tight">
              Güne YalıBey Kahvaltısıyla Başlayın
            </h1>
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed drop-shadow-md">
              Deniz manzarası eşliğinde taze, zengin ve keyifli bir kahvaltı
              deneyimi.
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
                Kahvaltı Deneyimi
              </p>
              <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-6">
                Güne Lezzetle ve Huzurla Başlayın
              </h2>
            </div>

            {/* İçerik */}
            <div className="grid md:grid-cols-2 gap-16 mb-16">
              {/* Sol taraf */}
              <div>
                <div className="mb-8">
                  <img
                    src="/src/assets/WebAsset/Breakfast2.jpg"
                    alt="Kahvaltı Sofrası"
                    className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                  />
                </div>
                <h3 className="text-2xl font-serif font-medium text-gray-900 mb-4 border-l-4 border-amber-500 pl-4">
                  Zengin ve Taze Seçenekler
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Geleneksel serpme kahvaltıdan özel menülere kadar, her damak
                  zevkine hitap eden lezzetleri bir araya getiriyoruz.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Tüm ürünlerimiz günlük ve taze olarak hazırlanır; doğal
                  peynirler, reçeller, zeytinler ve sıcacık ekmeklerle güne
                  harika bir başlangıç yapın.
                </p>
              </div>

              {/* Sağ taraf */}
              <div>
                <div className="mb-8">
                  <img
                    src="/src/assets/WebAsset/Breakfast3.jpg"
                    alt="Kahvaltı Sunumu"
                    className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                  />
                </div>
                <h3 className="text-2xl font-serif font-medium text-gray-900 mb-4 border-l-4 border-amber-500 pl-4">
                  Manzara ve Keyif
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  YalıBey Restaurant, deniz kenarındaki huzurlu atmosferiyle
                  kahvaltınızı unutulmaz bir deneyime dönüştürür.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Sevdiklerinizle birlikte keyifli sohbetlerin, taze çay ve
                  kahvenin tadını çıkarın.
                </p>
              </div>
            </div>

            {/* Alıntı kısmı */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-2xl p-12 text-center shadow-2xl">
              <p className="text-2xl md:text-3xl font-serif font-light text-gray-900 mb-4 italic leading-relaxed">
                “Günün en güzel anı, güzel bir kahvaltı ile başlar.
                <br />
                YalıBey’de her sabah, huzurla dolu bir deneyime dönüşür.”
              </p>
              <p className="text-gray-600 font-medium">
                — YalıBey Restaurant Ekibi
              </p>
            </div>

            {/* GALERİ ALANI */}
            <div className="mt-24 text-center">
              <p className="text-sm font-medium text-amber-600 mb-2 tracking-widest uppercase">
                Kahvaltıdan Kareler
              </p>
              <h2 className="text-3xl font-serif font-light text-gray-900 mb-10">
                Lezzet, Manzara ve Keyif
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="col-span-2 lg:col-span-2">
                  <img
                    src="/src/assets/WebAsset/Breakfast4.jpg"
                    alt="Kahvaltı Alanı"
                    className="w-full h-[30rem] object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
                <img
                  src="/src/assets/WebAsset/Breakfast4.jpg"
                  alt="Serpme Kahvaltı"
                  className="w-full h-[30rem] object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
                <img
                  src="/src/assets/WebAsset/Breakfast4.jpg"
                  alt="Kahvaltı Detayı"
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
