import Header from "../Layout/header.jsx";
import Footer from "../Layout/footer.jsx";
import AboutCTA from "../About/AboutCTA.jsx";

export default function CorporateEvent() {
  return (
    <div>
      <Header />

      {/* Kahraman Alanı */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/src/assets/WebAsset/office1.jpg"
            alt="YalıBey Restaurant Kurumsal Etkinlik Alanı"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
        </div>

        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight tracking-tight">
              Kurumsal Etkinlikler, Şıklığın ve Lezzetin Buluşma Noktası
            </h1>
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed drop-shadow-md">
              İş toplantılarından ekip kutlamalarına, her an profesyonel bir atmosferde.
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
                Kurumsal Etkinlikler
              </p>
              <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-6">
                Profesyonel Toplantılar, Keyifli Anlar
              </h2>
            </div>

            {/* İçerik */}
            <div className="grid md:grid-cols-2 gap-16 mb-16">
              {/* Sol taraf */}
              <div>
                <div className="mb-8">
                  <img
                    src="/src/assets/WebAsset/office2.jpg"
                    alt="YalıBey Kurumsal Yemek Düzeni"
                    className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                  />
                </div>
                <h3 className="text-2xl font-serif font-medium text-gray-900 mb-4 border-l-4 border-amber-500 pl-4">
                  Şirket Toplantıları ve Lansmanlar
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  YalıBey Restaurant, kurumsal organizasyonlar için hem konforlu hem de prestijli bir ortam sunar. 
                  Toplantılar, lansmanlar ve ekip etkinlikleri için özel olarak düzenlenmiş alanlarımızla hizmet veriyoruz.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Her ayrıntı profesyonellik, zarafet ve verimlilik odaklı planlanır. 
                  Siz işinize odaklanın, biz ortamı mükemmel hale getirelim.
                </p>
              </div>

              {/* Sağ taraf */}
              <div>
                <div className="mb-8">
                  <img
                    src="/src/assets/WebAsset/office3.jpg"
                    alt="Kurumsal Yemek ve Servis Deneyimi"
                    className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                  />
                </div>
                <h3 className="text-2xl font-serif font-medium text-gray-900 mb-4 border-l-4 border-amber-500 pl-4">
                  Gurme Menü & Özenli Servis
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Şeflerimizin hazırladığı özel menüler, kurumsal etkinliklerinize şıklık ve lezzet katar.  
                  İster sabah kahvaltısı, ister akşam yemeği — her detay titizlikle hazırlanır.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Profesyonel servis ekibimiz, konuklarınızın konforu ve memnuniyeti için sürecin her aşamasında yanınızdadır.
                </p>
              </div>
            </div>

            {/* Alıntı kısmı */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-2xl p-12 text-center shadow-2xl">
              <p className="text-2xl md:text-3xl font-serif font-light text-gray-900 mb-4 italic leading-relaxed">
                “Başarılı işlerin ardında güçlü ekipler, güçlü ekiplerin ardında doğru ortamlar vardır.”<br />
                — YalıBey Restaurant, profesyonelliği konforla buluşturur.
              </p>
              <p className="text-gray-600 font-medium">— YalıBey Restaurant Ekibi</p>
            </div>

            {/* GALERİ ALANI */}
            <div className="mt-24 text-center">
              <p className="text-sm font-medium text-amber-600 mb-2 tracking-widest uppercase">
                Galeri
              </p>
              <h2 className="text-3xl font-serif font-light text-gray-900 mb-10">
                Kurumsal Buluşmalardan Kareler
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="col-span-2 lg:col-span-2">
                  <img
                    src="/src/assets/WebAsset/office4.jpg"
                    alt="Kurumsal Etkinlik Alanı"
                    className="w-full h-[30rem] object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
                <img
                  src="/src/assets/WebAsset/office4.jpg"
                  alt="Toplantı Masası"
                  className="w-full h-[30rem] object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
                <img
                  src="/src/assets/WebAsset/office4.jpg"
                  alt="Yemek Servisi"
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
