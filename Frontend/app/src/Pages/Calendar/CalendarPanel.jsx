/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Sparkles, CalendarIcon, Plus, X, Heart, Users, Cake, Utensils, IdCardLanyard, Gem, MicVocal, Trash2, Pen } from 'lucide-react'
import axios from 'axios'

export default function CalendarPanel() {
  const [currentDate, setCurrentDate] = useState(new Date()) 
  const [events, setEvents] = useState({})
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedDay, setSelectedDay] = useState(null)
  const [newEvent, setNewEvent] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const monthNames = ["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"]
  const dayNames = ["Pzt","Sal","Çar","Per","Cum","Cmt","Paz"]

  const iconOptions = [
    { name: "Düğün Organizasyon", value: "gem", Icon: Gem, color: "bg-rose-500" },
    { name: "Kurumsal Organizasyon", value: "users", Icon: Users, color: "bg-blue-500" },
    { name: "Yemek Organizasyon", value: "utensils", Icon: Utensils, color: "bg-purple-500" },
    { name: "Doğum Günü Organizasyon", value: "cake", Icon: Cake, color: "bg-pink-500" },
    { name: "Özel Organizasyon", value: "idcardlanyard", Icon: IdCardLanyard , color: "bg-amber-600" },
    { name: "Canlı Müzik Organizasyon", value: "micvocal", Icon: MicVocal, color: "bg-emerald-500" },
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

  const getEventKey = (day) => `${currentDate.getFullYear()}-${String(currentDate.getMonth()+1).padStart(2,"0")}-${String(day).padStart(2,"0")}`

  
  const getIconColor = (iconName) => iconOptions.find(i => i.value === iconName)?.color || "bg-gray-400"
  const getEventIcon = (iconName) => iconOptions.find(i => i.value === iconName)?.Icon || Heart

  const handleDayClick = (day) => {
    setSelectedDay(day)
    setNewEvent({ title: "", icon: "heart", name: "", phone: "", startTime: "", endTime: "" })
    setIsModalOpen(true)
  }

  // Etkinlik silme fonksiyonu
  const handleDeleteEvent = async (e, event) => { 
    e.stopPropagation()
    
    if (!window.confirm(`"${event.title}" etkinliğini silmek istediğinizden emin misiniz?`)) {
      return
    }

    try {
      await axios.delete(`http://localhost:5000/events/${event.id}`)
      
      // State'den kaldır
      setEvents(prev => {
        const newEvents = { ...prev }
        
        // Tüm günlerdeki eventleri kontrol et ve sil
        Object.keys(newEvents).forEach(key => {
          newEvents[key] = newEvents[key].filter(ev => ev.id !== event.id)
          if (newEvents[key].length === 0) {
            delete newEvents[key]
          }
        })
        
        return newEvents
      })
      
      alert('Etkinlik silindi!')
    } catch (err) {
      console.error(err)
      alert('Etkinlik silinirken hata oluştu!')
    }
  }

  const handleEditEvent = (e, event) => { 
    e.stopPropagation()
    
    // Modal'ı aç ve formu doldur
    setNewEvent({
      id: event.id,
      title: event.title,
      name: event.name,
      phone: event.phone,
      startTime: event.startTime,
      endTime: event.endTime,
      icon: event.icon
    })
    
    setIsModalOpen(true)
  }


  // ✅ Component mount olduğunda veri çek
  useEffect(() => {
    const fetchInitialEvents = async () => {
      setIsLoading(true)
      const monthStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2,'0')}`
      try {
        const res = await axios.get(`http://localhost:5000/events?month=${monthStr}`)
        const eventsData = res.data
        const newEvents = {}
        eventsData.forEach(ev => {
          const key = ev.eventdate
          if (!newEvents[key]) newEvents[key] = []
          newEvents[key].push({
            id: ev.eventid,
            title: ev.eventname,
            name: ev.personname,
            phone: ev.personnumber,
            startTime: ev.starttime,
            endTime: ev.endtime,
            icon: ev.eventicon
          })
        })
        setEvents(newEvents)
      } catch (err) {
        console.error(err)
      }finally {
        setIsLoading(false)
      }
    }
    fetchInitialEvents()
  }, [currentDate])

  const handleSaveEvent = async () => {
    if (!selectedDay || !newEvent.title.trim() || !newEvent.name.trim() || !newEvent.phone.trim() || !newEvent.startTime || !newEvent.endTime) return

    try {
      const eventKey = getEventKey(selectedDay)
      
      // Eğer id varsa güncelleme, yoksa yeni kayıt
      if (newEvent.id) {
        // Güncelleme
        await axios.put(`http://localhost:5000/events/${newEvent.id}`, {
          title: newEvent.title,
          name: newEvent.name,
          phone: newEvent.phone,
          startTime: newEvent.startTime,
          endTime: newEvent.endTime,
          icon: newEvent.icon,
          date: eventKey
        })

        // State'i güncelle
        setEvents(prev => {
          const newEvents = { ...prev }
          
          // Tüm günlerdeki eventleri kontrol et ve güncelle
          Object.keys(newEvents).forEach(key => {
            newEvents[key] = newEvents[key].map(ev => 
              ev.id === newEvent.id 
                ? { ...newEvent, id: ev.id } 
                : ev
            )
          })
          
          return newEvents
        })

        alert('Etkinlik güncellendi!')
      } else {
        // Yeni kayıt
        const response = await axios.post('http://localhost:5000/events', {
          title: newEvent.title,
          name: newEvent.name,
          phone: newEvent.phone,
          startTime: newEvent.startTime,
          endTime: newEvent.endTime,
          icon: newEvent.icon,
          date: eventKey,
          personId: 1
        })

        // State'e ekle (backend'den dönen ID ile)
        setEvents(prev => ({
          ...prev,
          [eventKey]: [...(prev[eventKey] || []), { ...newEvent, id: response.data.eventId }]
        }))
      }

      setIsModalOpen(false)
      setSelectedDay(null)
      setNewEvent({ title: "", icon: "heart", name: "", phone: "", startTime: "", endTime: "" })
    } catch (err) {
      console.error(err)
      alert('İşlem sırasında hata oluştu!')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-2 px-2">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-t-2xl shadow-sm border border-gray-200 px-6 py-3">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-gray-800" />
              <span className="text-base font-serif font-semibold text-gray-800 tracking-wide">YALIBEY RESTAURANT</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <CalendarIcon className="h-5 w-5" />
              <span className="text-sm font-medium">Rezervasyon Takvimi</span>
            </div>
          </div>

          {/* Month Navigation */}
          <div className="flex items-center justify-between">
            <button onClick={previousMonth} className="h-9 w-9 rounded-lg border border-gray-300 hover:bg-gray-50 flex items-center justify-center transition-colors">
              <ChevronLeft className="h-5 w-5 text-gray-600" />
            </button>
            <h2 className="text-xl font-serif font-light text-gray-900">
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </h2>
            <button onClick={nextMonth} className="h-9 w-9 rounded-lg border border-gray-300 hover:bg-gray-50 flex items-center justify-center transition-colors">
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
        
        {/* Calendar Grid */}
        <div className="bg-white rounded-b-2xl shadow-sm border border-t-0 border-gray-200 p-3">
          {isLoading && (
              <div className="absolute inset-0 bg-white/70 flex items-center justify-center z-20 rounded-b-2xl">
                <div className="flex flex-col items-center gap-2">
                  <svg className="animate-spin h-6 w-6 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span className="text-sm text-gray-700">Takvim yükleniyor...</span>
                  </div>
                </div>
              )}
          {/* Day Names */}
          <div className="grid grid-cols-7 gap-2 mb-1">
            {dayNames.map((day) => (
              <div key={day} className="text-center text-xs font-medium text-gray-500 uppercase tracking-wider py-1">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Days */}
          <div className="grid grid-cols-7 gap-2">
            {/* Empty cells for days before month starts */}
            {Array.from({ length: startingDayOfWeek }).map((_, index) => (
              <div key={`empty-${index}`} className="aspect-square" />
            ))}

            {/* Days of the month */}
            {Array.from({ length: daysInMonth }).map((_, index) => {
              const day = index + 1
              const eventKey = getEventKey(day)
              const dayEvents = events[eventKey] || []

              return (
                <div
                  key={day}
                  onClick={() => handleDayClick(day)}
                  className="aspect-square border border-gray-200 rounded-lg p-1.5 hover:border-gray-400 hover:shadow-md transition-all cursor-pointer group relative"
                >
                  <div className="flex items-center justify-between mb-0.5">
                    <div className="text-sm font-medium text-gray-900">{String(day).padStart(2, "0")}</div>
                    <Plus className="h-3 w-3 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {dayEvents.length > 0 && (
                    <div className="space-y-0.5">
                      {dayEvents.slice(0, 2).map((event, idx) => {
                        const EventIcon = getEventIcon(event.icon)
                        return (
                          <div key={idx} className="flex items-center gap-2">
                            <div
                              className={`h-5 w-5 rounded-full ${getIconColor(event.icon)} flex items-center justify-center`}
                            >
                              <EventIcon className="h-3 w-3 text-white" />
                            </div>
                            <span className="text-[11px] text-gray-600 truncate flex-1">{event.title}</span>
                          </div>
                        )
                      })}
                      {dayEvents.length > 2 && (
                        <div className="text-[10px] text-gray-500 pl-6">+{dayEvents.length - 2} daha</div>
                      )}
                    </div>
                  )}

                  {dayEvents.length > 0 && (
                      <div onClick={(e) => e.stopPropagation()}
                        className="absolute left-0 top-full mt-0.5 bg-white border border-gray-200 rounded-lg shadow-lg p-3 z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all min-w-[280px] cursor-default"
                      >
                      <div className="space-y-3">
                        {dayEvents.map((event, idx) => {
                          const EventIcon = getEventIcon(event.icon)
                          return (
                            <div key={idx} className="space-y-1">
                              <div className="flex items-start gap-2">
                                <div
                                  className={`h-6 w-6 rounded-full ${getIconColor(event.icon)} flex items-center justify-center flex-shrink-0 mt-0.5`}
                                >
                                  <EventIcon className="h-3 w-3 text-white" />
                                </div>
                                <div className="flex-1">
                                  <p className="text-sm font-medium text-gray-900">{event.title}</p>
                                  <p className="text-xs text-gray-600">{event.name}</p>
                                  <p className="text-xs text-gray-500">{event.phone}</p>
                                  <p className="text-xs text-gray-500">
                                    {event.startTime} - {event.endTime}
                                  </p>
                                </div>

                                
                                <div className="flex flex-col items-center gap-2 pl-2">
                                  <button
                                    onClick={(e) => handleEditEvent(e, event)}
                                    className="p-1 rounded-md hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors"
                                    title="Etkinliği Düzenle"
                                  >
                                    <Pen className="w-4 h-4" />
                                  </button>
                                  <button
                                    onClick={(e) => handleDeleteEvent(e, event)}
                                    className="p-1 rounded-md hover:bg-red-100 text-red-500 hover:text-red-700 transition-colors"
                                    title="Etkinliği Sil"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </button>
                                </div>
                              </div>
                              {idx < dayEvents.length - 1 && <div className="border-t border-gray-100 pt-2" />}
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )}                  
                </div>
              )
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex items-center gap-4 justify-center flex-wrap">
              {iconOptions.map((icon) => {
                const IconComponent = icon.Icon
                return (
                  <div key={icon.value} className="flex items-center gap-2">
                    <div className={`h-6 w-6 rounded-full ${icon.color} flex items-center justify-center`}>
                      <IconComponent className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-sm text-gray-600">{icon.name}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Modal for adding events */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-serif font-medium text-gray-900">
                {newEvent.id ? 'Etkinliği Düzenle' : 'Yeni Etkinlik Ekle'}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="h-8 w-8 rounded-lg hover:bg-gray-100 flex items-center justify-center transition-colors"
              >
                <X className="h-5 w-5 text-gray-600" />
              </button>
            </div>

            <div className="space-y-5">
              {/* Event Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Etkinlik Adı</label>
                <input
                  type="text"
                  value={newEvent.title}
                  onChange={(e) => setNewEvent((prev) => ({ ...prev, title: e.target.value }))}
                  placeholder="Örn: Düğün Rezervasyonu"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">İsim Soyisim</label>
                <input
                  type="text"
                  value={newEvent.name}
                  onChange={(e) => setNewEvent((prev) => ({ ...prev, name: e.target.value }))}
                  placeholder="Örn: Ayşe Yılmaz"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Telefon Numarası</label>
                <input
                  type="tel"
                  value={newEvent.phone}
                  onChange={(e) => setNewEvent((prev) => ({ ...prev, phone: e.target.value }))}
                  placeholder="Örn: 0555 123 4567"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Başlangıç Saati</label>
                  <input
                    type="time"
                    value={newEvent.startTime}
                    onChange={(e) => setNewEvent((prev) => ({ ...prev, startTime: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Bitiş Saati</label>
                  <input
                    type="time"
                    value={newEvent.endTime}
                    onChange={(e) => setNewEvent((prev) => ({ ...prev, endTime: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Etkinlik Tipi Seçin</label>
                <div className="grid grid-cols-3 gap-3">
                  {iconOptions.map(({ name, value, Icon, color }) => (
                    <button
                      key={value}
                      onClick={() => setNewEvent((prev) => ({ ...prev, icon: value }))}
                      className={`p-4 rounded-lg border-2 flex flex-col items-center justify-center gap-2 hover:bg-gray-50 transition-colors ${
                        newEvent.icon === value ? "border-gray-800 bg-gray-50" : "border-gray-300"
                      }`}
                    >
                      <div className={`h-10 w-10 rounded-full ${color} flex items-center justify-center`}>
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-xs text-gray-700 text-center">{name}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-xs text-gray-600 mb-3">Önizleme:</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div
                      className={`h-8 w-8 rounded-full ${getIconColor(newEvent.icon)} flex items-center justify-center`}
                    >
                      {(() => {
                        const EventIcon = getEventIcon(newEvent.icon)
                        return <EventIcon className="h-4 w-4 text-white" />
                      })()}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{newEvent.title || "Etkinlik adı"}</p>
                      <p className="text-xs text-gray-600">{newEvent.name || "İsim Soyisim"}</p>
                    </div>
                  </div>
                  {(newEvent.phone || newEvent.startTime || newEvent.endTime) && (
                    <div className="text-xs text-gray-600 pl-11 space-y-1">
                      {newEvent.phone && <p>{newEvent.phone}</p>}
                      {(newEvent.startTime || newEvent.endTime) && (
                        <p>
                          {newEvent.startTime || "--:--"} - {newEvent.endTime || "--:--"}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  İptal
                </button>
                <button
                  onClick={handleSaveEvent}
                  disabled={
                    !newEvent.title.trim() ||
                    !newEvent.name.trim() ||
                    !newEvent.phone.trim() ||
                    !newEvent.startTime ||
                    !newEvent.endTime
                  }
                  className="flex-1 px-4 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {newEvent.id ? 'Güncelle' : 'Kaydet'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}