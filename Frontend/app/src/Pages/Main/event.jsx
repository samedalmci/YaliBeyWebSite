import React from "react";
import { useState } from 'react'
import { Users, Sparkles, Heart, Award, ChevronLeft, ChevronRight, Calendar, Music, Utensils, Camera, CheckCircle2 } from 'lucide-react'
import eventDetails from '../../Data/MenuEvents.json'



export default function Event() {
      const [currentSlide, setCurrentSlide] = useState(0)

      const icons = {
        Users,
        Sparkles,
        Heart,
        Award,
        Calendar,
        Music,
        Utensils,
        Camera,
        CheckCircle2,
      };
    
    
      const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % eventDetails.length)
      }
    
      const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + eventDetails.length) % eventDetails.length)
      }
    
      const currentEvent = eventDetails[currentSlide]
  return (
    <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-gray-600 mb-3 tracking-widest uppercase">Uzmanlığımız</p>
            <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-6">Her Detayda Mükemmellik</h2>
          </div>

          <div className="max-w-7xl mx-auto relative">
            <div className="overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Side */}
                <div key={`content-${currentSlide}`} className="order-2 lg:order-1 animate-fadeIn">
                  <h3 className="text-3xl md:text-4xl font-serif font-medium text-gray-900 mb-6">
                    {currentEvent.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">{currentEvent.description}</p>

                  <div className="space-y-5">
                    {currentEvent.features.map((feature, index) => {
                      const Icon = icons[feature.icon];
                      return (
                        <div key={index} className="flex gap-4">
                          <Icon
                            className={`h-6 w-6 flex-shrink-0 mt-1 ${
                              currentEvent.color === "rose"
                                ? "text-rose-500"
                                : currentEvent.color === "blue"
                                  ? "text-blue-600"
                                  : currentEvent.color === "purple"
                                  ? "text-purple-600"
                                  : "text-orange-500  "
                            }`}
                          />
                          <p className="text-gray-600 leading-relaxed">{feature.text}</p>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Right Side */}
                <div key={`image-${currentSlide}`} className="order-1 lg:order-2 relative h-[500px] lg:h-[600px] rounded-lg overflow-hidden animate-fadeIn">
                  <img src={currentEvent.image || "/placeholder.svg"} alt={currentEvent.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-6 mt-12">
              <button
                onClick={prevSlide}
                className="h-12 w-12 rounded-full border border-gray-300 hover:bg-gray-50 flex items-center justify-center transition-all duration-300"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-3">
                {eventDetails.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      index === currentSlide ? "w-12 bg-gray-900" : "w-2 bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="h-12 w-12 rounded-full border border-gray-300 hover:bg-gray-50 flex items-center justify-center transition-all duration-300"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
  );
}











  