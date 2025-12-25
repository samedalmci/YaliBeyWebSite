import Header from "../Layout/header.jsx";
import Footer from "../Layout/footer.jsx";
import AboutCTA from "../About/AboutCTA.jsx";

export default function Proposal() {
  return (
    <div>
      <Header />

      {/* Kahraman Alanı */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/WebAsset//proposa7.jpg"
            alt="YalıBey Restaurant İsteme Alanı"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
        </div>

        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight tracking-tight">
              Hayatınızın En Özel “Evet” Anı
            </h1>
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed drop-shadow-md">
              Sıcacık bir ortam, romantik detaylar ve unutulmaz bir isteme
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
                İsteme Organizasyonu
              </p>
              <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-6">
                Sürpriz ve Romantizmin Buluştuğu An
              </h2>
            </div>

            {/* İçerik */}
            <div className="grid md:grid-cols-2 gap-16 mb-16">
              {/* Sol taraf */}
              <div>
                <div className="mb-8">
                  <img
                    src="/WebAsset/proposa2.png"
                    alt="İsteme Masası ve Dekor"
                    className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                  />
                </div>
                <h3 className="text-2xl font-serif font-medium text-gray-900 mb-4 border-l-4 border-amber-500 pl-4">
                  Kişiye Özel Sürprizler
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Sevdiklerinizi de dahil edebileceğiniz, tamamen size özel
                  hazırlanmış bir isteme deneyimi sunuyoruz.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Dekorasyon, masa düzeni ve özel detaylar, unutulmaz bir “Evet”
                  anı yaratmak için tasarlanır.
                </p>
              </div>

              {/* Sağ taraf */}
              <div>
                <div className="mb-8">
                  <img
                    src="/WebAsset/proposa3.jpg"
                    alt="İsteme Kutlaması"
                    className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                  />
                </div>
                <h3 className="text-2xl font-serif font-medium text-gray-900 mb-4 border-l-4 border-amber-500 pl-4">
                  Romantik ve Sıcak Atmosfer
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Deniz manzarası eşliğinde, romantik ışıklar ve özenli
                  sunumlarla isteme anınızı daha özel kılıyoruz.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Sadece size ve sevdiklerinize özel, unutulmaz bir hatıra
                  yaratmak için her detay özenle hazırlanır.
                </p>
              </div>
            </div>

            {/* Alıntı kısmı */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-2xl p-12 text-center shadow-2xl">
              <p className="text-2xl md:text-3xl font-serif font-light text-gray-900 mb-4 italic leading-relaxed">
                “O an geldiğinde her şey anlam kazanır...
                <br />
                YalıBey’de isteme anınız, ömür boyu hatırlanacak bir anıya
                dönüşür.”
              </p>
              <p className="text-gray-600 font-medium">
                — YalıBey Restaurant Ekibi
              </p>
            </div>

            {/* GALERİ ALANI */}
            <div className="mt-24 text-center">
              <p className="text-sm font-medium text-amber-600 mb-2 tracking-widest uppercase">
                İstemeden Kareler
              </p>
              <h2 className="text-3xl font-serif font-light text-gray-900 mb-10">
                Romantizm ve Özel Anlar
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="col-span-2 lg:col-span-2">
                  <img
                    src="/WebAsset/proposa4.jpg"
                    alt="İsteme Alanı"
                    className="w-full h-[30rem] object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
                <img
                  src="/WebAsset/proposa4.jpg"
                  alt="İsteme Masası"
                  className="w-full h-[30rem] object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
                <img
                  src="/WebAsset/proposa4.jpg"
                  alt="Romantik Detay"
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
