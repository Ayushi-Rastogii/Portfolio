import './App.css'
import NavBar from './components/NavBar';
import ContactSection from "./components/ContactSection";
import Footer from './components/Footer';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import Publications from './components/PublicationSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectSection from './components/ProjectSection';
import SkillSection from './components/SkillSection';

function App() {
  return (
    <div className='App'>
    <NavBar></NavBar>
    <Header></Header>
    <AboutSection/>
    <SkillSection></SkillSection>
    <ExperienceSection/>
    <ProjectSection></ProjectSection>
    <Publications></Publications>
    <ContactSection></ContactSection>

    <Footer></Footer>
    </div>
  );
}

export default App
