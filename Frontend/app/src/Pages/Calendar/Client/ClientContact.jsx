import { Phone, Mail, MapPin } from "lucide-react"

export default function ClientContact() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-4">
              Bizimle İletişime Geçin
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Sorularınız için bize ulaşın. Size en kısa sürede dönüş yapacağız.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 text-center border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center mx-auto mb-4 shadow-sm">
                <Phone className="h-6 w-6 text-gray-800" />
              </div>
              <h3 className="font-serif font-medium text-gray-900 mb-2">Telefon</h3>
              <p className="text-gray-600 text-sm mb-3">Hemen arayın</p>
              <a href="tel:+905551234567" className="text-gray-800 font-medium hover:underline">
                +90 (555) 123-4567
              </a>
            </div>

            <div className="bg-white rounded-xl p-6 text-center border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center mx-auto mb-4 shadow-sm">
                <Mail className="h-6 w-6 text-gray-800" />
              </div>
              <h3 className="font-serif font-medium text-gray-900 mb-2">E-posta</h3>
              <p className="text-gray-600 text-sm mb-3">Mesaj gönderin</p>
              <a href="mailto:iletisim@luminaryevents.com" className="text-gray-800 font-medium hover:underline">
                iletisim@luminaryevents.com
              </a>
            </div>

            <div className="bg-white rounded-xl p-6 text-center border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center mx-auto mb-4 shadow-sm">
                <MapPin className="h-6 w-6 text-gray-800" />
              </div>
              <h3 className="font-serif font-medium text-gray-900 mb-2">Adres</h3>
              <p className="text-gray-600 text-sm mb-3">Bizi ziyaret edin</p>
              <p className="text-gray-800 font-medium">İstanbul, Türkiye</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}