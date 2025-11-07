import Header from "../Layout/header.jsx"
import Footer from "../Layout/footer.jsx"
import AboutCTA from "../About/AboutCTA.jsx"

export default function DesignYourOwnEvent() {
  return (
    <div>
      <Header />

      {/* HERO */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/src/assets/WebAsset/DYO2.jpg"
            alt="Etkinlik Planlama - YalıBey Restaurant"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
        </div>

        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              Kendi Etkinliğini Tasarla
            </h1>
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed">
              Düğün, doğum günü, kurumsal davet veya özel kutlama…  
              Her detay senin isteğine göre planlanır.
            </p>
          </div>
        </div>
      </section>

      {/* İÇERİK */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            <div className="text-center mb-16">
              <p className="text-sm font-medium text-amber-600 mb-3 tracking-widest uppercase">Kişiye Özel Planlama</p>
              <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-6">
                Her Etkinlik Bir Hikaye, Her Hikaye Size Özel
              </h2>
              <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
                YalıBey Restaurant’ta her etkinlik size özel olarak tasarlanır. 
                Ambiyans, menü, masa düzeni ve müzik tercihleriniz doğrultusunda, hayalinizdeki atmosferi birlikte oluşturuyoruz.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-16 mb-16">
              
              {/* Sol taraf */}
              <div>
                <div className="mb-8">
                  <img
                    src="/src/assets/WebAsset/DYO3.jpg"
                    alt="Etkinlik Planlama Süreci"
                    className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                  />
                </div>
                <h3 className="text-2xl font-serif font-medium text-gray-900 mb-4 border-l-4 border-amber-500 pl-4">
                  Sizin İçin Tasarlıyoruz
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Her etkinlik, sizin zevkinizi yansıtır. Konsept seçiminden masa düzenine, 
                  dekorasyondan müziğe kadar her adımı sizinle birlikte planlıyoruz.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  İster sade bir brunch, ister görkemli bir kutlama… 
                  Her detay profesyonel ekibimiz tarafından özenle hazırlanır.
                </p>
              </div>

              {/* Sağ taraf */}
              <div>
                <div className="mb-8">
                  <img
                    src="/src/assets/WebAsset/DYO4.jpg"
                    alt="Yemek ve Menü Seçenekleri"
                    className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                  />
                </div>
                <h3 className="text-2xl font-serif font-medium text-gray-900 mb-4 border-l-4 border-amber-500 pl-4">
                  Menü & Servis Seçenekleri
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Etkinliğinizin tarzına uygun menü seçenekleri sunuyoruz. 
                  Deniz ürünlerinden et yemeklerine, atıştırmalıklardan tatlılara kadar her kategoride özgün lezzetler.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Servis planı ve masa düzeni, etkinliğin konseptine göre özel olarak hazırlanır. 
                  Siz sadece keyfini çıkarın.
                </p>
              </div>
            </div>

            {/* ALINTI */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-2xl p-12 text-center shadow-2xl">
              <p className="text-2xl md:text-3xl font-serif font-light text-gray-900 mb-4 italic leading-relaxed">
                “Her etkinlik bir iz bırakır.<br />
                Biz, o izi zarafet ve lezzetle şekillendiriyoruz.”
              </p>
              <p className="text-gray-600 font-medium">— YalıBey Restaurant Ekibi</p>
            </div>

            {/* GALERİ */}
            <div className="mt-24 text-center">
              <p className="text-sm font-medium text-amber-600 mb-2 tracking-widest uppercase">İlham Alın</p>
              <h2 className="text-3xl font-serif font-light text-gray-900 mb-10">
                Daha Önceki Organizasyonlarımızdan Kareler
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="col-span-2 lg:col-span-2">
                  <img
                    src="/src/assets/WebAsset/DYO1.jpg"
                    alt="Etkinlik Alanı"
                    className="w-full h-[30rem] object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
                <img
                  src="/src/assets/WebAsset/DYO1.jpg"
                  alt="Kokteyl Alanı"
                  className="w-full h-[30rem] object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
                <img
                  src="/src/assets/WebAsset/DYO1.jpg"
                  alt="Mekan Detayı"
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
  )
}
