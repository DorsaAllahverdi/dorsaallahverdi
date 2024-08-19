import 'tachyons';
import './App.css';
import ParticlesBg from "particles-bg";
import AppHeader from './Components/AppHeader/AppHeader';
import Navigation from './Components/Navigation/Navigation';
import AboutMe from './Components/AboutMe/AboutMe';
import Projects from './Components/Projects/Projects';
import ProjectsLayout from './Components/Projects/ProjectsLayout/ProjectsLayout';
import ContactMe from './Components/ContactMe/ContactMe';
import FaceRecognition from './Components/Projects/FaceRecognition.png';
import FaceRecognitionHooks from './Components/Projects/FaceRecognitionHooks.png';
import RoboFriends from './Components/Projects/RoboFriends.png';

function App() {
  return (
    <div className="App">
      <ParticlesBg type="cobweb" bg={true} />
      <AppHeader />
      <Navigation />
      <AboutMe />
      <Projects>
        <ProjectsLayout
          projImg={FaceRecognition} 
          projTitle='Face Recognition App (Using React Class Components)'
          projDesc="This innovative application, written using the React class components concept, allows users to input an image URL and automatically detects any faces present in the image. Utilizing advanced facial recognition technology, the application identifies multiple faces and highlights each one by drawing a square around it. This feature ensures that all detected faces are clearly marked, making it easy for users to identify individuals within the image. Whether it's a group photo or a crowded scene, the application efficiently processes the image to provide accurate and reliable face detection results."
          projLiveUrl='https://facerecognitionusingclasses.vercel.app/'
          projCodeUrl='https://github.com/DorsaAllahverdi/facerecognitionusingclasses' />
        <ProjectsLayout
          projImg={FaceRecognitionHooks} 
          projTitle='Face Recognition App (Using React Hooks)'
          projDesc="This innovative application, written using the React Hooks concept, allows users to input an image URL and automatically detects any faces present in the image. Utilizing advanced facial recognition technology, the application identifies multiple faces and highlights each one by drawing a square around it. This feature ensures that all detected faces are clearly marked, making it easy for users to identify individuals within the image. Whether it's a group photo or a crowded scene, the application efficiently processes the image to provide accurate and reliable face detection results."
          projLiveUrl='https://facerecognitionusinghooks.vercel.app/'
          projCodeUrl='https://github.com/DorsaAllahverdi/facerecognitionusinghooks' />
        <ProjectsLayout
          projImg={RoboFriends} 
          projTitle='RoboFriends App (Using React Hooks)'
          projDesc="This innovative application, developed using the React Hooks concept, features a collection of robot images, names, and email addresses. Users can easily search for robots by their names, thanks to the efficient search functionality integrated into the app. By leveraging React Hooks, the application manages state and side effects seamlessly, ensuring a smooth and responsive user experience. Whether you're looking for a specific robot or just browsing through the collection, this app provides a user-friendly interface to explore and find the information you need quickly."
          projLiveUrl='https://robofriends-black.vercel.app/'
          projCodeUrl='https://github.com/DorsaAllahverdi/robofriends' />
      </Projects>
      <ContactMe />
    </div>
  );
}

export default App;
