import Header from "../Layout/header.jsx"
import Footer from "../Layout/footer.jsx"
import AboutCTA from "../About/AboutCTA.jsx"

export default function Weddings() {
  return (
    <div>
      <Header />

      {/* Kahraman Alanı (Görsel Güncellendi) */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img            
            src= "/src/assets/WebAsset/Wedding1.jpg"
            alt="YalıBey Restaurant Düğün Alanı"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" /> {/* Karartma artırıldı */}
        </div>

        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight tracking-tight">
              Hayallerinizdeki Düğün, YalıBey’de Gerçek Oluyor
            </h1>
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed drop-shadow-md">
              Özenle hazırlanan menüler ve her detayı sizin için planlanmış bir gün...
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
              <p className="text-sm font-medium text-amber-600 mb-3 tracking-widest uppercase">Düğün Etkinliği</p>
              <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-6">
                Özel Gününüz İçin Unutulmaz Bir Atmosfer
              </h2>
            </div>

            {/* İçerik */}
            <div className="grid md:grid-cols-2 gap-16 mb-16">
              {/* Sol taraf: Romantik Bir Başlangıç */}
              <div>
                <div className="mb-8">
                  <img
                    // Daha zarif, beyaz ağırlıklı masa düzeni
                    src= "/src/assets/WebAsset/Wedding2.jpg"
                    alt="YalıBey Düğün Masası ve Süslemeleri"
                    className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                  />
                </div>
                <h3 className="text-2xl font-serif font-medium text-gray-900 mb-4 border-l-4 border-amber-500 pl-4">Romantik Bir Başlangıç</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  YalıBey Restaurant, zarif tasarımıyla en özel gününüzü unutulmaz kılar. 
                  Her detayı sizin tarzınıza göre şekillendirerek romantik bir atmosfer oluşturuyoruz.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Işık düzeninden masa süslemelerine, müzikten menü seçimine kadar tüm planlama ekibimiz tarafından özenle yapılır. 
                  Siz sadece anın tadını çıkarın.
                </p>
              </div>

              {/* Sağ taraf: Yemek & Servis Deneyimi */}
              <div>
                <div className="mb-8">
                  <img
                    // Daha kaliteli yemek servisi/hazırlığı görseli
                    src= "/src/assets/WebAsset/Wedding3.jpg"
                    alt="YalıBey Düğün Yemek Servisi"
                    className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                  />
                </div>
                <h3 className="text-2xl font-serif font-medium text-gray-900 mb-4 border-l-4 border-amber-500 pl-4">Yemek & Servis Deneyimi</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Misafirlerinizi, YalıBey mutfağının özenle hazırladığı menülerle ağırlayın. 
                  Deniz ürünlerinden geleneksel tatlara, her damak zevkine hitap eden özel seçenekler sunuyoruz.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Profesyonel servis ekibimiz, kusursuz bir deneyim için tüm süreç boyunca yanınızda olur.
                </p>
              </div>
            </div>

            {/* Alıntı kısmı */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-2xl p-12 text-center shadow-2xl">
              <p className="text-2xl md:text-3xl font-serif font-light text-gray-900 mb-4 italic leading-relaxed">
                “Her detayda zarafet, her anında mutluluk...<br />
                Hayatınızın en özel günü, YalıBey’in büyüsüyle birleşiyor.”
              </p>
              <p className="text-gray-600 font-medium">— YalıBey Restaurant Ekibi</p>
            </div>
            
            {/* GALERİ ALANI (Görsellerin Yüksekliği Artırıldı) */}
            <div className="mt-24 text-center">
                <p className="text-sm font-medium text-amber-600 mb-2 tracking-widest uppercase">Görsel Hafıza</p>
                <h2 className="text-3xl font-serif font-light text-gray-900 mb-10">Mekânımızdan Kareler</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* İlk büyük görselin yüksekliği h-[30rem] yapıldı */}
                    <div className="col-span-2 lg:col-span-2">
                        <img 
                            src= "/src/assets/WebAsset/Wedding4.jpg"
                            alt="Düğün Töreni"
                            className="w-full h-[30rem] object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" 
                        />
                    </div>
                    {/* İkinci görselin yüksekliği h-[30rem] yapıldı */}
                    <img 
                        src= "/src/assets/WebAsset/Wedding4.jpg"
                        alt="Düğün Kokteyli Alanı"
                        className="w-full h-[30rem] object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                    />
                   
                    <img 
                        src= "/src/assets/WebAsset/Wedding4.jpg"
                        alt="Restoran İç Mekan Detayı"
                        className="w-full h-[30rem] object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                    />
                </div>
            </div>
            {/* GALERİ ALANI BİTİŞİ */}

          </div>
        </div>
      </section>

      <AboutCTA />
      <Footer />
    </div>
  )
}