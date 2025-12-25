import Header from "../Layout/header.jsx";
import Footer from "../Layout/footer.jsx";
import AboutCTA from "../About/AboutCTA.jsx";

export default function OpenBuffet() {
  return (
    <div>
      <Header />

      {/* Kahraman Alanı */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/TalatYali\Yemek3.jpg"
            alt="YalıBey Restaurant Açık Büfe Alanı"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
        </div>

        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight tracking-tight">
              Zengin Açık Büfe Deneyimi YalıBey’de
            </h1>
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed drop-shadow-md">
              Tazelik, çeşitlilik ve lezzetin buluştuğu özel bir açık büfe
              keyfi...
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
                Açık Büfe Lezzetleri
              </p>
              <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-6">
                Her Zevke Hitap Eden Zengin Seçenekler
              </h2>
            </div>

            {/* İçerik */}
            <div className="grid md:grid-cols-2 gap-16 mb-16">
              {/* Sol taraf */}
              <div>
                <div className="mb-8">
                  <img
                    src="/TalatYali/Yemek18.jpg"
                    alt="YalıBey Açık Büfe Masası"
                    className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                  />
                </div>
                <h3 className="text-2xl font-serif font-medium text-gray-900 mb-4 border-l-4 border-amber-500 pl-4">
                  Taptaze ve Özenle Hazırlanmış Lezzetler
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Günün her saatinde taze, sağlıklı ve özenle hazırlanmış açık
                  büfe menülerimizle misafirlerimize lezzet dolu anlar
                  sunuyoruz.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Soğuk mezelerden sıcak yemeklere, tatlılardan içeceklere kadar
                  geniş bir yelpazede zengin bir deneyim sizi bekliyor.
                </p>
              </div>

              {/* Sağ taraf */}
              <div>
                <div className="mb-8">
                  <img
                    src="/TalatYali/Yemek19.jpg"
                    alt="YalıBey Açık Büfe Servisi"
                    className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                  />
                </div>
                <h3 className="text-2xl font-serif font-medium text-gray-900 mb-4 border-l-4 border-amber-500 pl-4">
                  Konforlu Ortam, Keyifli Deneyim
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Deniz manzarası eşliğinde, ferah ortamımızda açık büfe keyfini
                  doyasıya yaşayın.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Geniş masa düzenimiz ve konforlu alanlarımızla, aileniz ve
                  sevdiklerinizle keyifli bir deneyim sunuyoruz.
                </p>
              </div>
            </div>

            {/* Alıntı kısmı */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-2xl p-12 text-center shadow-2xl">
              <p className="text-2xl md:text-3xl font-serif font-light text-gray-900 mb-4 italic leading-relaxed">
                “Her tabakta özen, her lokmada lezzet...
                <br />
                YalıBey’de açık büfe keyfi bir gelenek haline geliyor.”
              </p>
              <p className="text-gray-600 font-medium">
                — YalıBey Restaurant Ekibi
              </p>
            </div>

            {/* GALERİ ALANI */}
            <div className="mt-24 text-center">
              <p className="text-sm font-medium text-amber-600 mb-2 tracking-widest uppercase">
                Açık Büfeden Kareler
              </p>
              <h2 className="text-3xl font-serif font-light text-gray-900 mb-10">
                Renk, Lezzet ve Çeşitlilik
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="col-span-2 lg:col-span-2">
                  <img
                    src="/TalatYali/Yemek9.jpg"
                    alt="YalıBey Açık Büfe Alanı"
                    className="w-full h-[30rem] object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
                <img
                  src="/TalatYali/Yemek8.jpg"
                  alt="Açık Büfe Seçenekleri"
                  className="w-full h-[30rem] object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
                <img
                  src="/TalatYali/Yemek7.jpg"
                  alt="Tatlı ve Salata Büfesi"
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
