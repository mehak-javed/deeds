import UniversityList from './UniversityList'
import StudentReview from './StudentReview'
import FAQ from './FAQ'
import StatsSection from './StatsSection'
import UpdatesBanners from './UpdatedBanner'
import Landing from './Landing'
import About from '../About/About'
import FloatingWhatsapp from '../FloatingWhatsapp'
import Team from '../Team/Team'





const Home = () => {
  return (
    <div id='home'>
      <Landing />
      <StatsSection />
      <About />
      <UpdatesBanners />
      <Team />
      <UniversityList />
      <FloatingWhatsapp />
      <FAQ />
      <StudentReview />
    </div>
  )
}

export default Home