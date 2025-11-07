import { Heart, Target, Lightbulb, Shield } from 'lucide-react'

export default function AboutValue() {
  const values = [
    {
      icon: Heart,
      title: "Misafirperverlik",
      description:
        "YalıBey’de her misafirimiz bizim için özeldir. Kahvaltıdan akşam yemeğine, her anı sıcak bir karşılama ve samimi bir hizmetle taçlandırıyoruz.",
    },
    {
      icon: Target,
      title: "Kalite ve Özen",
      description:
        "Kullandığımız her malzeme, hazırladığımız her masa ve planladığımız her etkinlikte kaliteyi ve detaylara verilen önemi hissedersiniz.",
    },
    {
      icon: Lightbulb,
      title: "Yaratıcılık",
      description:
        "Her gün farklı bir deneyim sunmak için yenilikçi fikirlerle, hem gündüz hem gece atmosferine uygun çözümler geliştiriyoruz.",
    },
    {
      icon: Shield,
      title: "Güven ve Tutarlılık",
      description:
        "Yıllardır süregelen tecrübemizle güven veren bir marka olduk. Her sözü zamanında, her hizmeti eksiksiz yerine getirmeyi ilke edindik.",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-gray-600 mb-3 tracking-widest uppercase">
              Değerlerimiz
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-6">
              Bizi Biz Yapan İlkeler
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Güne keyifli bir kahvaltıyla başlayan, akşamları dostlarla buluşulan ve özel günlerde hatıralara dönüşen
              her anın arkasında bu değerlerimiz var.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="h-14 w-14 rounded-full bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center mb-6 shadow-sm">
                    <Icon className="w-7 h-7 text-gray-700" />
                  </div>
                  <h3 className="text-2xl font-serif font-medium text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
