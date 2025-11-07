import { Calendar, Mail } from 'lucide-react'

export default function AboutStory() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 leading-tight">
            Her Anınızı YalıBey’de Özel Kılın
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            İster güne keyifli bir kahvaltıyla başlayın, ister akşam dostlarınızla unutulmaz bir masa kurun.  
            Dilerseniz özel etkinlikleriniz için de size en uygun atmosferi birlikte tasarlayalım.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/ClientCalendar"
              className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Calendar className="w-5 h-5" />
              Rezervasyon Yap
            </a>
            <a 
              href="/Menu"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white/10 transition-all duration-200"
            >              
              Menülerimizi Keşfedin
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
