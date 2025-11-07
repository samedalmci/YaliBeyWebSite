import Header from "../Layout/header.jsx";
import AboutHeader from './AboutHeader.jsx';
import AboutStory from './AboutStory.jsx';
import AbutValue from './AboutValue.jsx';
import AboutCTA from './AboutCTA.jsx';
import Footer from '../Layout/footer.jsx';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white"> 
      <div>
        <Header />
        <AboutHeader />
        <AboutStory />      
        <AbutValue /> 
        <AboutCTA /> 
        <Footer />  
      </div>
    </div>
  )
}
