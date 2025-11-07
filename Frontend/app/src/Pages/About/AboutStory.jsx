export default function AboutStory() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Başlık */}
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-gray-600 mb-3 tracking-widest uppercase">Hakkımızda</p>
            <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-6">
              Hikayemiz ve Felsefemiz
            </h2>
          </div>

          {/* İçerik */}
          <div className="grid md:grid-cols-2 gap-16 mb-16">
            {/* Sol taraf */}
            <div>
              <div className="mb-8">
                <img
                  src="/src/assets/wedding-planning.png"
                  alt="YalıBey Restaurant"
                  className="w-full h-80 object-cover rounded-2xl shadow-xl"
                />
              </div>
              <h3 className="text-2xl font-serif font-medium text-gray-900 mb-4">Biz Kimiz</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                YalıBey Restaurant, günün her saatinde misafirlerine özel deneyimler sunan çok yönlü bir mekandır. Sabahları huzurlu bir kahvaltı ortamı, gün içinde keyifli buluşmalar, akşamları ise sıcak meyhane atmosferiyle hizmet veriyoruz.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Aynı zamanda doğum günü, kurumsal organizasyon ve özel kutlamalar gibi etkinliklerde de profesyonel ekibimizle unutulmaz anlar tasarlıyoruz. Misafirlerimizin her ziyaretinde samimiyet, kalite ve özenle karşılanmasını temel ilkemiz olarak benimsiyoruz.
              </p>
            </div>

            {/* Sağ taraf */}
            <div>
              <div className="mb-8">
                <img
                  src="/src/assets/corporate-event-conference-room-with-modern-setup-.jpg"
                  alt="Felsefemiz"
                  className="w-full h-80 object-cover rounded-2xl shadow-xl"
                />
              </div>
              <h3 className="text-2xl font-serif font-medium text-gray-900 mb-4">Felsefemiz</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Bizim için her misafir bir hikaye, her etkinlik ise yeni bir anıdır. Hazır kalıplar yerine, her organizasyonu sizin beklentilerinize ve tarzınıza göre şekillendiriyoruz.
              </p>
              <p className="text-gray-600 leading-relaxed">
                YalıBey’de amacımız yalnızca iyi bir yemek sunmak değil; güne keyifli bir başlangıç, akşama dostlarla samimi bir sohbet ve her etkinliğe unutulmaz bir atmosfer kazandırmaktır.
              </p>
            </div>
          </div>

          {/* Alıntı kısmı */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 border border-gray-200 rounded-2xl p-12 text-center shadow-lg">
            <p className="text-2xl md:text-3xl font-serif font-light text-gray-900 mb-4 italic leading-relaxed">
              “Kahvaltıdan akşam keyfine, özel davetlerden kurumsal buluşmalara…<br />
              Her anınızda profesyonelliği ve zarafeti bir araya getiriyoruz.”
            </p>    
            <p className="text-gray-600 font-medium">— YalıBey Restaurant Ekibi</p>
          </div>
        </div>
      </div>
    </section>
  );
}