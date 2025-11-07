import { useState } from "react"
import { ChevronLeft, ChevronRight} from "lucide-react"

export default function MenuGaleri() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }
    
    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    }

    const slides = [
  {
    image: "/src/assets/TalatYali/bonfile cafe de paris soslu.jpg",
    title: "Bonfile Café de Paris Soslu",
    description: "Özel sosu ve yumuşacık dokusuyla klasik Fransız lezzetini YalıBey yorumuyla keşfedin.",
  },
  {
    image: "/src/assets/TalatYali/chilli con carne.jpg",
    title: "Chilli Con Carne",
    description: "Baharat dengesiyle öne çıkan Meksika mutfağının en sevilen sıcak tabağı.",
  },
  {
    image: "/src/assets/TalatYali/egg bennedict.jpg",
    title: "Egg Benedict",
    description: "Tereyağlı muffin üzerinde poşe yumurta ve Hollandez sosun mükemmel uyumu.",
  },
  {
    image: "/src/assets/TalatYali/french toast.jpg",
    title: "French Toast",
    description: "Tatlı bir başlangıç: Tarçın, bal ve meyvelerle zenginleştirilmiş Fransız tostu.",
  },
  {
    image: "/src/assets/TalatYali/gözleme.jpg",
    title: "El Açması Gözleme",
    description: "Taze hamurla hazırlanan geleneksel lezzet, kahvaltı sofralarının vazgeçilmezi.",
  },
  {
    image: "/src/assets/TalatYali/ızgara çipura.jpg",
    title: "Izgara Çipura",
    description: "Denizden sofraya taptaze çipura, hafif zeytinyağlı dokunuşlarla sunulur.",
  },
  {
    image: "/src/assets/TalatYali/ızgara kalamar.jpg",
    title: "Izgara Kalamar",
    description: "Dışı çıtır, içi yumuşak kalamar; özel sos eşliğinde deniz kokusunu hissedin.",
  },
  {
    image: "/src/assets/TalatYali/ızgara köfte.jpg",
    title: "Izgara Köfte",
    description: "Geleneksel tarifle hazırlanmış, sulu ve doyurucu ızgara köftemiz.",
  },
  {
    image: "/src/assets/TalatYali/ızgara somon.jpg",
    title: "Izgara Somon",
    description: "Omega zengini taze somon, nar gibi kızarmış yüzeyiyle sofranızda fark yaratır.",
  },
  {
    image: "/src/assets/TalatYali/kalamar tava.jpg",
    title: "Kalamar Tava",
    description: "Altın sarısı kızartılmış kalamar halkaları, limon ve özel sosla servis edilir.",
  },
  {
    image: "/src/assets/TalatYali/karışık ızgara.jpg",
    title: "Karışık Izgara",
    description: "Et severler için özel: Bonfile, köfte ve tavuk ızgaranın lezzet şöleni.",
  },
  {
    image: "/src/assets/TalatYali/lazanya.jpg",
    title: "Fırın Lazanya",
    description: "Kat kat lezzet: Kıymalı sos, beşamel ve peynirin nefis buluşması.",
  },
  {
    image: "/src/assets/TalatYali/levrek lokum.jpg",
    title: "Levrek Lokum",
    description: "Izgarada mükemmel pişmiş, dışı kızarmış içi yumuşacık levrek lokumları.",
  },
  {
    image: "/src/assets/TalatYali/lokum bonfile.jpg",
    title: "Lokum Bonfile",
    description: "Etin en özel hali: Dışı mühürlenmiş, içi yumuşacık dana lokum.",
  },
  {
    image: "/src/assets/TalatYali/mücver.jpg",
    title: "Sebzeli Mücver",
    description: "Taze sebzelerle hazırlanan, dışı çıtır içi yumuşak ev yapımı mücver.",
  },
  {
    image: "/src/assets/TalatYali/paçanga böreği.jpg",
    title: "Paçanga Böreği",
    description: "Pastırma ve kaşar peyniriyle doldurulmuş, çıtır hamurdan lezzet patlaması.",
  },
  {
    image: "/src/assets/TalatYali/patates kroket.jpg",
    title: "Patates Kroket",
    description: "Kremamsı içi ve çıtır dışıyla her menüye eşlik eden lezzetli atıştırmalık.",
  },
  {
    image: "/src/assets/TalatYali/ratatouille.jpg",
    title: "Ratatouille",
    description: "Renkli sebzelerin zeytinyağıyla buluştuğu klasik Fransız lezzeti.",
  },
  {
    image: "/src/assets/TalatYali/sigara böreği.jpg",
    title: "Sigara Böreği",
    description: "İncecik yufka, beyaz peynir ve maydanozun efsane uyumu.",
  },
  {
    image: "/src/assets/TalatYali/sosis tava.jpg",
    title: "Sosis Tava",
    description: "Baharatlı mini sosisler, özel sosla buluşarak keyifli bir başlangıç sunar.",
  },
  {
    image: "/src/assets/TalatYali/tavuk şiş.jpg",
    title: "Tavuk Şiş",
    description: "Marine edilmiş yumuşacık tavuk, köz tadında ızgarada ustalıkla pişirilir.",
  },
  {
    image: "/src/assets/TalatYali/taze meyve suları.jpg",
    title: "Taze Meyve Suları",
    description: "Doğal ve ferahlatıcı içecekler, güne enerjik bir başlangıç için ideal.",
  },
  {
    image: "/src/assets/TalatYali/yoğurt kasesi.jpg",
    title: "Yoğurt Kasesi",
    description: "Taze meyve, granola ve bal ile hazırlanmış hafif ve sağlıklı bir alternatif.",
  },
];
  return (
          <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm font-medium text-gray-600 mb-3 tracking-widest uppercase">Özel Seçimler</p>
              <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-6">Gün Boyunca Lezzet</h2>
            </div>

            <div className="relative">
              <div className="relative h-[500px] overflow-hidden rounded-2xl shadow-2xl bg-gray-100">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      index === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <img
                      src={slide.image || "/placeholder.svg"}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <h3 className="text-3xl md:text-4xl font-serif font-medium mb-3">{slide.title}</h3>
                      <p className="text-lg text-white/90 leading-relaxed">{slide.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6 text-gray-900" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="w-6 h-6 text-gray-900" />
              </button>

              {/* Dots */}
              <div className="flex justify-center gap-2 mt-6">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide ? "bg-gray-900 w-8" : "bg-gray-300 w-2"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      )}