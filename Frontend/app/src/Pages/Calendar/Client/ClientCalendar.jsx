// /* eslint-disable no-unused-vars */
// "use client"

// import { useState } from "react"
// import {
//   ChevronLeft,
//   ChevronRight,
//   Calendar as CalendarIcon,
//   Gem,
//   Users,
//   Utensils,
//   Cake,
//   LucideAward as IdCardLanyard,
//   MicVocal,
// } from "lucide-react"

// export default function ClientCalendar({ currentDate, setCurrentDate, events = {}, onDayClick = () => {} }) {
//   const [hoveredDay, setHoveredDay] = useState(null)

//   const monthNames = [
//     "Ocak",
//     "Şubat",
//     "Mart",
//     "Nisan",
//     "Mayıs",
//     "Haziran",
//     "Temmuz",
//     "Ağustos",
//     "Eylül",
//     "Ekim",
//     "Kasım",
//     "Aralık",
//   ]
//   const dayNames = ["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"]

//   const iconOptions = [
//     { name: "Düğün Organizasyon", value: "gem", Icon: Gem, color: "bg-rose-500" },
//     { name: "Kurumsal Organizasyon", value: "users", Icon: Users, color: "bg-blue-500" },
//     { name: "Yemek Organizasyon", value: "utensils", Icon: Utensils, color: "bg-purple-500" },
//     { name: "Doğum Günü Organizasyonu", value: "cake", Icon: Cake, color: "bg-pink-500" },
//     { name: "Özel Organizasyon", value: "idcardlanyard", Icon: IdCardLanyard, color: "bg-amber-600" },
//     { name: "Canlı Müzik Organizasyonu", value: "micvocal", Icon: MicVocal, color: "bg-emerald-500" },
//   ]

//   const getDaysInMonth = (date) => {
//     const year = date.getFullYear()
//     const month = date.getMonth()
//     const firstDay = new Date(year, month, 1)
//     const lastDay = new Date(year, month + 1, 0)
//     const daysInMonth = lastDay.getDate()
//     const startingDayOfWeek = firstDay.getDay()
//     return { daysInMonth, startingDayOfWeek: startingDayOfWeek === 0 ? 6 : startingDayOfWeek - 1 }
//   }

//   const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentDate)

//   const previousMonth = () =>
//     setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
//   const nextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))

//   const getEventKey = (day) => {
//     const year = currentDate.getFullYear()
//     const month = String(currentDate.getMonth() + 1).padStart(2, "0")
//     const dayStr = String(day).padStart(2, "0")
//     return `${year}-${month}-${dayStr}`
//   }

//   const getIconColor = (iconName) => iconOptions.find((i) => i.value === iconName)?.color || "bg-gray-400"
//   const getEventIcon = (iconName) => iconOptions.find((i) => i.value === iconName)?.Icon || CalendarIcon

//   return (
//     <section className="py-20 bg-white relative">
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
//       <div className="container mx-auto px-4 relative z-10">
//         <div className="max-w-4xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-4">Müsaitlik Takvimi</h2>
//             <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
//               Aşağıdaki takvimden rezerve edilmiş günleri görebilir ve müsait tarihleri kontrol edebilirsiniz. Herhangi
//               bir güne tıklayarak rezervasyon talebi oluşturabilirsiniz.
//             </p>
//           </div>

//           <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden backdrop-blur-sm">
//             <div className="bg-gradient-to-b from-gray-50 to-gray-50/50 px-6 py-5 border-b border-gray-100">
//               <div className="flex items-center justify-between">
//                 <button
//                   onClick={previousMonth}
//                   className="h-10 w-10 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-white hover:shadow-sm flex items-center justify-center transition-all duration-200"
//                 >
//                   <ChevronLeft className="h-5 w-5 text-gray-600" />
//                 </button>
//                 <h3 className="text-xl font-serif font-medium text-gray-900">
//                   {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
//                 </h3>
//                 <button
//                   onClick={nextMonth}
//                   className="h-10 w-10 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-white hover:shadow-sm flex items-center justify-center transition-all duration-200"
//                 >
//                   <ChevronRight className="h-5 w-5 text-gray-600" />
//                 </button>
//               </div>
//             </div>

//             <div className="p-6 bg-gradient-to-b from-white to-gray-50/30">
//               <div className="grid grid-cols-7 gap-3 mb-3">
//                 {dayNames.map((day) => (
//                   <div
//                     key={day}
//                     className="text-center text-xs font-medium text-gray-500 uppercase tracking-wider py-2"
//                   >
//                     {day}
//                   </div>
//                 ))}
//               </div>

//               <div className="grid grid-cols-7 gap-3">
//                 {Array.from({ length: startingDayOfWeek }).map((_, index) => (
//                   <div key={`empty-${index}`} className="aspect-square" />
//                 ))}

//                 {Array.from({ length: daysInMonth }).map((_, index) => {
//                   const day = index + 1
//                   const eventKey = getEventKey(day)
//                   const dayEvents = events[eventKey] || []
//                   const hasEvents = dayEvents.length > 0

//                   return (
//                     <div
//                       key={day}
//                       onClick={() => {
//                         onDayClick(day)
//                       }}
//                       className={`aspect-square border rounded-xl p-2 transition-all duration-200 cursor-pointer ${
//                         hasEvents
//                           ? "border-gray-300 bg-gradient-to-br from-gray-50 to-gray-100/50 hover:from-gray-100 hover:to-gray-100 hover:shadow-md hover:scale-105"
//                           : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-md hover:scale-105 hover:bg-gray-50/50"
//                       }`}
//                     >
//                       <div className="text-sm font-medium text-gray-900 mb-1">{String(day).padStart(2, "0")}</div>
//                       {hasEvents && (
//                         <div className="flex flex-wrap gap-1">
//                           {dayEvents.slice(0, 3).map((event, idx) => {
//                             const EventIcon = getEventIcon(event.icon)
//                             return (
//                               <div
//                                 key={idx}
//                                 className={`h-5 w-5 rounded-full ${getIconColor(event.icon)} flex items-center justify-center shadow-sm`}
//                                 title={event.title}
//                               >
//                                 <EventIcon className="h-3 w-3 text-white" />
//                               </div>
//                             )
//                           })}
//                         </div>
//                       )}
//                     </div>
//                   )
//                 })}
//               </div>

//               <div className="mt-8 pt-6 border-t border-gray-100">
//                 <p className="text-sm text-gray-600 mb-4 text-center font-medium">Etkinlik Tipleri:</p>
//                 <div className="flex items-center gap-4 justify-center flex-wrap">
//                   {iconOptions.map((icon) => {
//                     const IconComponent = icon.Icon
//                     return (
//                       <div
//                         key={icon.value}
//                         className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-50/50 hover:bg-gray-100/50 transition-colors"
//                       >
//                         <div
//                           className={`h-6 w-6 rounded-full ${icon.color} flex items-center justify-center shadow-sm`}
//                         >
//                           <IconComponent className="h-3 w-3 text-white" />
//                         </div>
//                         <span className="text-xs text-gray-600">{icon.name}</span>
//                       </div>
//                     )
//                   })}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
