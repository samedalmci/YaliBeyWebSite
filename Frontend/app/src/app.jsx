import { Routes, Route } from "react-router-dom";
import Header from "./Pages/Layout/header.jsx";
import Hero from "./Pages/Main/hero.jsx";
import Services from "./Pages/Main/services.jsx";
import Event from "./Pages/Main/event.jsx";
import About from "./Pages/Main/about.jsx";
import Connection from "./Pages/Main/connection.jsx";
import Footer from "./Pages/Layout/footer.jsx";
import Login from "./Pages/Login/Login.jsx";
import AdminCalendar from "./Pages/Calendar/AdminCalendar.jsx";
import MainClientCalendar from "./Pages/Calendar/MainClientCalendar.jsx";
import MainAbout from "./Pages/About/MainAbout.jsx";


import DesignYourOwn from "./Pages/Events/DesignYourOwn.jsx";
import Weddings from "./Pages/Events/Weddings.jsx";
import Birthdays from "./Pages/Events/Birthdays.jsx";
import Corporate from "./Pages/Events/Corporate.jsx";
import BreakFast from "./Pages/Events/Breakfast.jsx";
import Pub from "./Pages/Events/Pub.jsx";
import Buffet from "./Pages/Events/Buffet.jsx";
import Proposal from "./Pages/Events/Proposal.jsx";

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="min-h-screen bg-white">
            <Header />
            <Hero />
            <Services />
            <Event />
            <About />
            <Connection />
            <Footer />
          </div>
        }
      />
      {/* Kullanıcı Yönetimi */}
      <Route path="/giris" element={<Login />} />

      {/* Takvim ve Randevu */}
      <Route path="/yonetici-takvimi" element={<AdminCalendar />} />
      <Route path="/musteri-randevulari" element={<MainClientCalendar />} />

      {/* Bilgilendirme Sayfaları */}
      <Route path="/hakkimizda" element={<MainAbout />} />
  

      {/* Menü Detayları */}
      <Route path="/kahvalti" element={<BreakFast />} />
      <Route path="/meyhane" element={<Pub />} />
      <Route path="/acik-bufe" element={<Buffet />} />

      {/* Etkinlikler ve Organizasyonlar */}
      <Route path="/etkinlikler/kendin-tasarla" element={<DesignYourOwn />} />
      <Route path="/etkinlikler/dugun-organizasyonu" element={<Weddings />} />
      <Route path="/etkinlikler/dogum-gunu" element={<Birthdays />} />
      <Route path="/etkinlikler/kurumsal" element={<Corporate />} />
      <Route path="/etkinlikler/evlilik-teklifi" element={<Proposal />} />
    </Routes>
  );
}
