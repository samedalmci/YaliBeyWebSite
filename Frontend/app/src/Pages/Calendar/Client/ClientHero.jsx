import { Calendar, Phone } from "lucide-react"

export default function ClientHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,0,0,0.02)_0%,transparent_50%)]" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-gray-900 mb-6 leading-tight">
            Hayalinizdeki Etkinliği Birlikte Planlayalım
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            Müsait tarihlerimizi inceleyin ve size en uygun günü seçin. Hemen iletişime geçerek özel etkinliğinizi
            planlamaya başlayalım.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-gray-800" />
              <span>Müsaitlik Kontrolü</span>
            </div>
            <div className="h-4 w-px bg-gray-300" />
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-gray-800" />
              <span>Anında İletişim</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
