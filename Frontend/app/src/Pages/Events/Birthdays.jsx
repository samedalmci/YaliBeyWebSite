import Header from "../Layout/header.jsx";
import Footer from "../Layout/footer.jsx";
import AboutCTA from "../About/AboutCTA.jsx";

export default function Birthdays() {
  return (
    <div>
      <Header />

      {/* Kahraman Alanı */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/WebAsset/Birthday1.jpg"
            alt="YalıBey Restaurant Doğum Günü Alanı"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
        </div>

        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight tracking-tight">
              Unutulmaz Bir Doğum Günü Deneyimi
            </h1>
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed drop-shadow-md">
              Sadece bir kutlama değil, sevdiklerinizle paylaşacağınız keyifli
              bir anı.
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
                Doğum Günü Etkinliği
              </p>
              <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-6">
                Her Yaş, Kutlanmayı Hak Ediyor
              </h2>
            </div>

            {/* İçerik */}
            <div className="grid md:grid-cols-2 gap-16 mb-16">
              {/* Sol taraf */}
              <div>
                <div className="mb-8">
                  <img
                    src="/WebAsset/Birthday2.jpg"
                    alt="Doğum Günü Masası ve Süslemeleri"
                    className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                  />
                </div>
                <h3 className="text-2xl font-serif font-medium text-gray-900 mb-4 border-l-4 border-amber-500 pl-4">
                  Kişiye Özel Organizasyon
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  İster samimi bir kutlama, ister geniş bir davet planlayın —
                  YalıBey ekibi her detayı sizin için organize eder.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Dekorasyondan müziğe, menü seçiminden fotoğraf köşesine kadar
                  tüm detaylar, sizin zevkinize göre tasarlanır.
                </p>
              </div>

              {/* Sağ taraf */}
              <div>
                <div className="mb-8">
                  <img
                    src="/WebAsset/Birthday3.jpg"
                    alt="Doğum Günü Kutlaması"
                    className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                  />
                </div>
                <h3 className="text-2xl font-serif font-medium text-gray-900 mb-4 border-l-4 border-amber-500 pl-4">
                  Tatlar, Müzik ve Atmosfer
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Gün boyu süren keyifli anlar, özel menüler ve zarif sunumlarla
                  birleşir. Akşam olduğunda ise deniz manzarası eşliğinde müzik
                  ve sohbetle kutlamanız devam eder.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Her yaştan misafir için sıcak, samimi ve şık bir ortam
                  sunuyoruz.
                </p>
              </div>
            </div>

            {/* Alıntı kısmı */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-2xl p-12 text-center shadow-2xl">
              <p className="text-2xl md:text-3xl font-serif font-light text-gray-900 mb-4 italic leading-relaxed">
                “Kutlamalar geçicidir ama hissettirdiği mutluluk kalıcıdır.
                <br />
                YalıBey’de her doğum günü, güzel anılara dönüşür.”
              </p>
              <p className="text-gray-600 font-medium">
                — YalıBey Restaurant Ekibi
              </p>
            </div>

            {/* GALERİ ALANI */}
            <div className="mt-24 text-center">
              <p className="text-sm font-medium text-amber-600 mb-2 tracking-widest uppercase">
                Kutlamalardan Kareler
              </p>
              <h2 className="text-3xl font-serif font-light text-gray-900 mb-10">
                Eğlence, Lezzet ve Anılar
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="col-span-2 lg:col-span-2">
                  <img
                    src="/WebAsset/Birthday4.jpg"
                    alt="Doğum Günü Kutlama Alanı"
                    className="w-full h-[30rem] object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
                <img
                  src="/WebAsset/Birthday4.jpg"
                  alt="Doğum Günü Pastası"
                  className="w-full h-[30rem] object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
                <img
                  src="/WebAsset/Birthday4.jpg"
                  alt="Kutlama Detayı"
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
