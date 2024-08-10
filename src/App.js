import 'tachyons';
import './App.css';
import ParticlesBg from "particles-bg";
import AppHeader from './Components/AppHeader/AppHeader';
import Navigation from './Components/Navigation/Navigation';
import AboutMe from './Components/AboutMe/AboutMe';
import Projects from './Components/Projects/Projects';
import ProjectsLayout from './Components/Projects/ProjectsLayout/ProjectsLayout';
import FaceRecognitionProj from './Components/Projects/FaceRecognitionProj/FaceRecognitionProj';
import RoboFriendsProj from './Components/Projects/RoboFriendsProj/RoboFriendsProj';

function App() {
  return (
    <div className="App">
      <ParticlesBg type="cobweb" bg={true} />
      <AppHeader />
      <Navigation />
      <AboutMe />
      <Projects>
        <ProjectsLayout>
          <FaceRecognitionProj />
        </ProjectsLayout>
        <ProjectsLayout>
          <RoboFriendsProj />
        </ProjectsLayout>
      </Projects>
    </div>
  );
}

export default App;
