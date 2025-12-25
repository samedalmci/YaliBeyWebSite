export default function AboutTeam() {
  const team = [
    {
      name: "Ayşe Yılmaz",
      role: "Kurucu & CEO",
      image: "professional-woman-ceo-portrait-elegant-business-a.jpg",
    },
    {
      name: "Mehmet Demir",
      role: "Kreatif Direktör",
      image: "professional-man-creative-director-portrait-modern.jpg",
    },
    {
      name: "Zeynep Kaya",
      role: "Etkinlik Koordinatörü",
      image: "professional-woman-event-coordinator-portrait-frie.jpg",
    },
    {
      name: "Can Öztürk",
      role: "Teknik Direktör",
      image: "professional-man-technical-director-portrait-confi.jpg",
    },
  ];
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-gray-600 mb-3 tracking-widest uppercase">
              Ekibimiz
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-6">
              Başarının Arkasındaki İsimler
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Tutkulu, deneyimli ve yaratıcı ekibimiz her projede mükemmellik
              için çalışıyor.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={`/${member.image}`}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/400x400?text=" +
                        member.name;
                    }}
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-serif font-medium text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
