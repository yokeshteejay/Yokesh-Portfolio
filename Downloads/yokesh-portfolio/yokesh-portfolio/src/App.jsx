import AuroraBackground from './components/effects/AuroraBackground.jsx'
import CursorGlow from './components/effects/CursorGlow.jsx'
import PageLoader from './components/layout/PageLoader.jsx'
import ScrollProgressBar from './components/layout/ScrollProgressBar.jsx'
import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import HeroSection from './components/sections/HeroSection.jsx'
import AboutSection from './components/sections/AboutSection.jsx'
import ExperienceSection from './components/sections/ExperienceSection.jsx'
import ProjectsSection from './components/sections/ProjectsSection.jsx'
import SkillsSection from './components/sections/SkillsSection.jsx'
import AiFocusSection from './components/sections/AiFocusSection.jsx'
import MomentsGallerySection from './components/sections/MomentsGallerySection.jsx'
import ServiceAreaSection from './components/sections/ServiceAreaSection.jsx'
import ContactSection from './components/sections/ContactSection.jsx'
import WhatsAppButton from './components/floating/WhatsAppButton.jsx'
import BackToTopButton from './components/floating/BackToTopButton.jsx'

export default function App() {
  return (
    <>
      <PageLoader />
      <AuroraBackground />
      <CursorGlow />
      <ScrollProgressBar />
      <Navbar />

      <main className="overflow-x-clip">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <AiFocusSection />
        <MomentsGallerySection />
        <ServiceAreaSection />
        <ContactSection />
      </main>

      <Footer />
      <WhatsAppButton />
      <BackToTopButton />
    </>
  )
}
