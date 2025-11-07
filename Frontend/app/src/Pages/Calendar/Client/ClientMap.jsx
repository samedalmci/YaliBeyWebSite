export default function ClientMap() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-4">Konumumuz</h2>
                <p className="text-gray-600">Ofisimizi ziyaret etmek isterseniz, haritadan bizi bulabilirsiniz.</p>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.3054668035998!2d28.642153876424!3d36.83515966572707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c079fabdab04ff%3A0xa3a5a490f73d414a!2sDalyan%20Computer!5e0!3m2!1str!2str!4v1762259351893!5m2!1str!2str"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
                </div>
            </div>
            </div>
      </section>

    );
}