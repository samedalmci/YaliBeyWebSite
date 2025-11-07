export default function MenuHero() {
  return (
    <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
      <div className="absolute inset-0">
        <img
           src="/src/assets/TalatYali/Yemek1.jpg"
          alt="YalıBey Restaurant Menü"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>

      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light text-white mb-6 leading-tight">
            Lezzetin Her Hali YalıBey’de
          </h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
            Sabah kahvaltısından akşam meyhane keyfine uzanan, her damak zevkine hitap eden özel menümüzle tanışın.
          </p>
        </div>
      </div>
    </section>
  )
}
