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
import Menu from "./Pages/Menu/MainMenu.jsx";

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
      <Route path="/login" element={<Login />} />
      <Route path="/AdminCalendar" element={<AdminCalendar />} />
      <Route path="/ClientCalendar" element={<MainClientCalendar />} />
      <Route path="/About" element={<MainAbout />} />
      <Route path="/Menu" element={<Menu />} />
      <Route path="/Events/Custom" element={<DesignYourOwn />} />
      <Route path="/Events/Weddings" element={<Weddings />} />
      <Route path="/Events/Birthdays" element={<Birthdays />} />
      <Route path="/Events/Corporate" element={<Corporate />} />
      <Route path="/BreakFast" element={<BreakFast />} />
      <Route path="/Pub" element={<Pub />} />
      <Route path="/Buffet" element={<Buffet />} />
      <Route path="/Events/Proposal" element={<Proposal />} />
    </Routes>
  );
}
