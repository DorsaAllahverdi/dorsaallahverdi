import 'tachyons';
import './App.css';
import ParticlesBg from "particles-bg";
import AppHeader from './Components/AppHeader/AppHeader';
import Navigation from './Components/Navigation/Navigation';
import AboutMe from './Components/AboutMe/AboutMe';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <ParticlesBg type="cobweb" bg={true} />
      <AppHeader />
      <Navigation />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;
