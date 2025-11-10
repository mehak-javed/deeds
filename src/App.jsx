import Home from './components/Home/Home'
import Navbar from './components/NavbarData/Navbar'
import Footer from './components/footer/Footer'
import Pathway from './components/pathway/Pathway'
import Location from './components/Location/Location'
import { Routes, Route } from 'react-router-dom';
import StudentReview from './components/Home/StudentReview'
import Thankyou from './components/Thankyou'
import ConsultationForm from './components/ConsultationForm'
import MobileNavbar from './components/NavbarData/MobileNavbar'
import FAQ from './components/Home/FAQ'
import ScrollTop from './components/ScrollTop'
import OurServices from './components/Services/OurServices'
import Steps from './components/pathway/stepstobegin/Steps'
import AOS from 'aos';
import DealingCountries from './components/Destinations/DealingCountries'
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import UnitedKingdom from './components/CountriesDetails/UnitedKingdom'
import Australia from './components/CountriesDetails/Australia'
import Canada from './components/CountriesDetails/Canada'
import USA from './components/CountriesDetails/USA' 
import Germany from './components/CountriesDetails/Germany'
import Ireland from './components/CountriesDetails/Ireland'
import France from './components/CountriesDetails/France'
import UAE from './components/CountriesDetails/UAE'
import AboutCEO from './components/About/AboutCeo'
import Poland from './components/CountriesDetails/Poland'
import Turkey from './components/CountriesDetails/Turkey'
import Malaysia from './components/CountriesDetails/Malaysia'
import Italy from './components/CountriesDetails/Italy'
import PrivacyPolicy from './components/PrivacyPolicy'
import AboutFounder from './components/About/AboutFounder'
import AboutCoFounder from './components/About/AboutCoFounder'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className='min-h-screen flex flex-col scroll-smooth'>
      <Navbar/>
      <MobileNavbar/>
      
      <ScrollTop />
      
      <main className='flex-grow'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/pathway' element={<Pathway/>}/> 
          <Route path='/location' element={<Location/>}/>
          <Route path="/form" element={<ConsultationForm/>} />
          <Route path="/thank-you" element={<Thankyou/>} />
          <Route path='/studentrev' element={<StudentReview/>}/>
          <Route path='/steps' element={<Steps/>}/>
          <Route path='/faq' element={<FAQ/>}/>
          <Route path='/services' element={<OurServices/>}/>
          <Route path='/destination' element={<DealingCountries/>}/>
          <Route path='/uk' element={<UnitedKingdom/>}/>
          <Route path='/australia' element={<Australia/>}/>
          <Route path='/canada' element={<Canada/>}/>
          <Route path='/usa' element={<USA/>}/>
          <Route path='/germany' element={<Germany/>}/>
          <Route path='/ireland' element={<Ireland/>}/>
          <Route path='/france' element={<France/>}/>
          <Route path='/uae' element={<UAE/>}/>
          <Route path='/aboutceo' element={<AboutCEO/>}/>
          <Route path='/poland' element={<Poland/>}/>
          <Route path='/turkey' element={<Turkey/>}/>
          <Route path='/malaysia' element={<Malaysia/>}/>
          <Route path='/italy' element={<Italy/>}/>
          <Route path='/privacypolicy' element={<PrivacyPolicy/>}/>
          <Route path='/aboutfounder' element={<AboutFounder/>}/>
          <Route path='/aboutcofounder' element={<AboutCoFounder/>}/>
        </Routes>
      </main>

      <Footer/>
    </div>
  )
}

export default App