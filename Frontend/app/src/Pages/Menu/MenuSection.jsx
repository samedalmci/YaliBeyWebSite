
import { useState } from "react"


export default function MenuSection({ menuCategories }) {
  const [activeCategory, setActiveCategory] = useState(0)
  return (

      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm font-medium text-gray-600 mb-3 tracking-widest uppercase">Menü</p>
              <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-6">Yemek Seçenekleri</h2>
              <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Tüm lezzetlerimiz taze malzemelerle, özel tarif ve profesyonel şeflerimiz tarafından hazırlanıyor.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {menuCategories.map((cat, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeCategory === index
                      ? "bg-gray-900 text-white shadow-lg scale-105"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  {cat.category}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-16">
              {menuCategories[activeCategory].subcategories.map((sub, subIndex) => (
                <div key={subIndex}>
                  <h3 className="text-2xl font-serif font-medium text-gray-900 mb-6 pb-4 border-b-2 border-gray-200">
                    {sub.title}
                  </h3>
                  <div className="space-y-6">
                    {sub.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="group">
                        <div className="flex justify-between items-start gap-4 mb-2">
                          <h4 className="text-lg font-medium text-gray-900 group-hover:text-gray-700 transition-colors">
                            {item.name}
                          </h4>
                          <span className="text-lg font-serif font-medium text-gray-700 whitespace-nowrap flex-shrink-0">
                            {item.price}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                        <div className="mt-3 h-px bg-gradient-to-r from-gray-200 to-transparent" />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  )
}
