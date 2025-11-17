import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"


export default function MenuGaleri({slides}) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-gray-600 mb-3 tracking-widest uppercase">Özel Seçimler</p>
            <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-6">
              Gün Boyunca Lezzet
            </h2>
            <p>Menümüzde yer alan bazı özel lezzetlerin görselleri aşağıdadır.</p>
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
                    src={slide.image}
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

            {/* Sol buton */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-gray-900" />
            </button>

            {/* Sağ buton */}
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-gray-900" />
            </button>

            {/* Noktalar */}
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
  )
}
