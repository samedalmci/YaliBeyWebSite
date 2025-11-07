"use client"

import { useState, useEffect } from "react"
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Heart,
  Users,
  Cake,
  Utensils,
  LucideAward as IdCardLanyard,
  Gem,
  MicVocal,
  X,
} from "lucide-react"


import ClientContact from "./Client/ClientContact"
import ClientHero from "./Client/ClientHero"
import ClientMap from "./Client/ClientMap"
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

export default function MainClientCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [events, setEvents] = useState({})
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedDay, setSelectedDay] = useState(null)
  const [selectedDayEvents, setSelectedDayEvents] = useState([])
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false)
  const [reservationForm, setReservationForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })


  const monthNames = [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık",
  ]
  const dayNames = ["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"]

  const iconOptions = [
    { name: "Düğün Organizasyon", value: "gem", Icon: Gem, color: "bg-rose-500" },
    { name: "Kurumsal Organizasyon", value: "users", Icon: Users, color: "bg-blue-500" },
    { name: "Yemek Organizasyon", value: "utensils", Icon: Utensils, color: "bg-purple-500" },
    { name: "Doğum Günü Organizasyonu", value: "cake", Icon: Cake, color: "bg-pink-500" },
    { name: "Özel Organizasyon", value: "idcardlanyard", Icon: IdCardLanyard, color: "bg-amber-600" },
    { name: "Canlı Müzik Organizasyonu", value: "micvocal", Icon: MicVocal, color: "bg-emerald-500" },
  ]

  const getDaysInMonth = (date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()
    return { daysInMonth, startingDayOfWeek: startingDayOfWeek === 0 ? 6 : startingDayOfWeek - 1 }
  }

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentDate)

  const previousMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
  const nextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))

  const getEventKey = (day) => {
    const year = currentDate.getFullYear()
    const month = String(currentDate.getMonth() + 1).padStart(2, "0")
    const dayStr = String(day).padStart(2, "0")
    return `${year}-${month}-${dayStr}`
  }

  const getIconColor = (iconName) => iconOptions.find((i) => i.value === iconName)?.color || "bg-gray-400"
  const getEventIcon = (iconName) => iconOptions.find((i) => i.value === iconName)?.Icon || Heart

  useEffect(() => {
    const fetchEvents = async () => {
      const monthStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, "0")}`
      try {
        // Replace 'http://localhost:5000' with your actual backend URL
        const response = await fetch(`http://localhost:5000/events?month=${monthStr}`)

        if (!response.ok) throw new Error("API not available")

        const eventsData = await response.json()

        const newEvents = {}
        eventsData.forEach((ev) => {
          const key = ev.eventdate
          if (!newEvents[key]) newEvents[key] = []
          newEvents[key].push({
            title: ev.eventname,
            icon: ev.eventicon,
          })
        })
        setEvents(newEvents)
        
      } catch (err) {
        console.error(err)
        alert('Etkinlik silinirken hata oluştu!')
      }
    }
    fetchEvents()    
  }, [currentDate])

  const handleDayClick = (day) => {
    const eventKey = getEventKey(day)
    const dayEvents = events[eventKey] || []
    const dateText = `${day} ${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`

    setSelectedDay(day)
    setSelectedDayEvents(dayEvents)
    setIsModalOpen(true)

      setReservationForm({
        name: "",
        email: "",
        phone: "",
        message: `${dateText} tarihi için bilgi talep ediyorum.`,
      })


  }

  const handleReservationEmailSend = () => {
    const eventKey = getEventKey(selectedDay)
    const subject = encodeURIComponent(`${eventKey} Tarihli Etkinlik Rezervasyon Talebi`)
    const body = encodeURIComponent(
      `Merhaba,\n\n${eventKey} tarihi için rezervasyon yapmak istiyorum.\n\nİsim: ${reservationForm.name}\nE-posta: ${reservationForm.email}\nTelefon: ${reservationForm.phone}\n\nMesaj:\n${reservationForm.message}\n\nTeşekkürler.`,
    )
    window.location.href = `mailto:iletisim@luminaryevents.com?subject=${subject}&body=${body}`
    setIsReservationModalOpen(false)
    setReservationForm({ name: "", email: "", phone: "", message: "" })
  }

  const handlePhoneCall = () => {
    window.location.href = "tel:+905551234567"
  }
  const openReservationModal = () => {
    const dateText = `${selectedDay} ${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`
    setReservationForm({
      name: "",
      email: "",
      phone: "",
      message: `${dateText} tarihi için bilgi talep ediyorum.`,
    })
    setIsModalOpen(false)
    setIsReservationModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <Header />

      <ClientHero />


      {/* Calendar Section */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-4">Müsaitlik Takvimi</h2>
              <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Aşağıdaki takvimden rezerve edilmiş günleri görebilir ve müsait tarihleri kontrol edebilirsiniz.
                Herhangi bir güne tıklayarak rezervasyon talebi oluşturabilirsiniz.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden backdrop-blur-sm">
              {/* Calendar Header */}
              <div className="bg-gradient-to-b from-gray-50 to-gray-50/50 px-6 py-5 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <button
                    onClick={previousMonth}
                    className="h-10 w-10 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-white hover:shadow-sm flex items-center justify-center transition-all duration-200"
                  >
                    <ChevronLeft className="h-5 w-5 text-gray-600" />
                  </button>
                  <h3 className="text-xl font-serif font-medium text-gray-900">
                    {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                  </h3>
                  <button
                    onClick={nextMonth}
                    className="h-10 w-10 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-white hover:shadow-sm flex items-center justify-center transition-all duration-200"
                  >
                    <ChevronRight className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Calendar Grid */}
              <div className="p-6 bg-gradient-to-b from-white to-gray-50/30">
                {/* Day Names */}
                <div className="grid grid-cols-7 gap-3 mb-3">
                  {dayNames.map((day) => (
                    <div
                      key={day}
                      className="text-center text-xs font-medium text-gray-500 uppercase tracking-wider py-2"
                    >
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar Days */}
                <div className="grid grid-cols-7 gap-3">
                  {Array.from({ length: startingDayOfWeek }).map((_, index) => (
                    <div key={`empty-${index}`} className="aspect-square" />
                  ))}

                  {Array.from({ length: daysInMonth }).map((_, index) => {
                    const day = index + 1
                    const eventKey = getEventKey(day)
                    const dayEvents = events[eventKey] || []
                    const hasEvents = dayEvents.length > 0

                    return (
                      <div
                        key={day}
                        onClick={() => handleDayClick(day)}
                        className={`aspect-square border rounded-xl p-2 transition-all duration-200 cursor-pointer ${
                          hasEvents
                            ? "border-gray-300 bg-gradient-to-br from-gray-50 to-gray-100/50 hover:from-gray-100 hover:to-gray-100 hover:shadow-md hover:scale-105"
                            : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-md hover:scale-105 hover:bg-gray-50/50"
                        }`}
                      >
                        <div className="text-sm font-medium text-gray-900 mb-1">{String(day).padStart(2, "0")}</div>
                        {hasEvents && (
                          <div className="flex flex-wrap gap-1">
                            {dayEvents.slice(0, 3).map((event, idx) => {
                              const EventIcon = getEventIcon(event.icon)
                              return (
                                <div
                                  key={idx}
                                  className={`h-5 w-5 rounded-full ${getIconColor(event.icon)} flex items-center justify-center shadow-sm`}
                                  title={event.title}
                                >
                                  <EventIcon className="h-3 w-3 text-white" />
                                </div>
                              )
                            })}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>

                {/* Legend */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <p className="text-sm text-gray-600 mb-4 text-center font-medium">Etkinlik Tipleri:</p>
                  <div className="flex items-center gap-4 justify-center flex-wrap">
                    {iconOptions.map((icon) => {
                      const IconComponent = icon.Icon
                      return (
                        <div
                          key={icon.value}
                          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-50/50 hover:bg-gray-100/50 transition-colors"
                        >
                          <div
                            className={`h-6 w-6 rounded-full ${icon.color} flex items-center justify-center shadow-sm`}
                          >
                            <IconComponent className="h-3 w-3 text-white" />
                          </div>
                          <span className="text-xs text-gray-600">{icon.name}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ClientContact />



      {/* Contact Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[100] p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative z-[101]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center mb-6">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center mx-auto mb-4 shadow-sm">
                <Calendar className="h-8 w-8 text-gray-800" />
              </div>
              <h3 className="text-2xl font-serif font-medium text-gray-900 mb-2">
                {selectedDay} {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </h3>
              <p className="text-gray-600 mb-4">Bu tarihte aşağıdaki etkinlikler mevcut:</p>

              <div className="space-y-2 mb-6">
                {selectedDayEvents.map((event, idx) => {
                  const EventIcon = getEventIcon(event.icon)
                  return (
                    <div
                      key={idx}
                      className="flex items-center justify-center gap-3 bg-gradient-to-r from-gray-50 to-gray-50/50 rounded-lg p-3 border border-gray-100"
                    >
                      <div
                        className={`h-8 w-8 rounded-full ${getIconColor(event.icon)} flex items-center justify-center shadow-sm`}
                      >
                        <EventIcon className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-sm font-medium text-gray-900">{event.title}</span>
                    </div>
                  )
                })}
              </div>

              <p className="text-sm text-gray-600 mb-6">
                Rezervasyon yapmak veya detaylı bilgi almak için bizimle iletişime geçin:
              </p>
            </div>

            <div className="space-y-3 relative z-[102]">
              <button
                onClick={handlePhoneCall}
                className="w-full flex items-center justify-center gap-3 bg-gray-800 hover:bg-gray-700 text-white py-4 rounded-lg transition-all duration-200 font-medium shadow-md hover:shadow-lg relative z-[103] pointer-events-auto"
              >
                <Phone className="h-5 w-5" />
                Telefon Et
              </button>
              <button
                onClick={openReservationModal}
                className="w-full flex items-center justify-center gap-3 border-2 border-gray-800 text-gray-800 hover:bg-gray-50 py-4 rounded-lg transition-all duration-200 font-medium shadow-sm hover:shadow-md relative z-[103] pointer-events-auto"
              >
                <Mail className="h-5 w-5" />
                Mail At
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-full text-gray-600 hover:text-gray-900 py-2 text-sm transition-colors relative z-[103] pointer-events-auto"
              >
                İptal
              </button>
            </div>
          </div>
        </div>
      )}

      <ClientMap />

      {/* Reservation Modal */}
      {isReservationModalOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[100] p-4"
          onClick={() => setIsReservationModalOpen(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 max-h-[90vh] overflow-y-auto relative z-[101]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-serif font-medium text-gray-900 mb-1">Rezervasyon Talebi</h3>
                <p className="text-sm text-gray-600">
                  {selectedDay} {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                </p>
              </div>
              <button
                onClick={() => setIsReservationModalOpen(false)}
                className="h-8 w-8 rounded-lg hover:bg-gray-100 flex items-center justify-center transition-colors"
              >
                <X className="h-5 w-5 text-gray-600" />
              </button>
            </div>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">İsim Soyisim</label>
                <input
                  type="text"
                  value={reservationForm.name}
                  onChange={(e) => setReservationForm((prev) => ({ ...prev, name: e.target.value }))}
                  placeholder="Adınız ve soyadınız"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none shadow-sm hover:border-gray-300 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">E-posta</label>
                <input
                  type="email"
                  value={reservationForm.email}
                  onChange={(e) => setReservationForm((prev) => ({ ...prev, email: e.target.value }))}
                  placeholder="ornek@email.com"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none shadow-sm hover:border-gray-300 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Telefon</label>
                <input
                  type="tel"
                  value={reservationForm.phone}
                  onChange={(e) => setReservationForm((prev) => ({ ...prev, phone: e.target.value }))}
                  placeholder="0555 123 4567"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none shadow-sm hover:border-gray-300 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mesajınız</label>
                <textarea
                  value={reservationForm.message}
                  onChange={(e) => setReservationForm((prev) => ({ ...prev, message: e.target.value }))}
                  placeholder="Etkinlik detaylarınızı ve özel isteklerinizi yazabilirsiniz..."
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none resize-none shadow-sm hover:border-gray-300 transition-colors"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => setIsReservationModalOpen(false)}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-200 font-medium shadow-sm hover:shadow-md"
                >
                  İptal
                </button>
                <button
                  onClick={handleReservationEmailSend}
                  disabled={!reservationForm.name || !reservationForm.email || !reservationForm.phone}
                  className="flex-1 px-4 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                >
                  <Mail className="h-4 w-4" />
                  Mail Gönder
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}