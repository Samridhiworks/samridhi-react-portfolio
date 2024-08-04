import Header from './Components/Header'
import Banner from './Components/Banner';
import About from './Components/About';
import Skills from './Components/Skills';
import Works from './Components/Works';
import Certificates from './Components/Certificates'
import Contact from './Components/Contact'
import Mobile from './Components/Mobile'

function App() {
  return (
    <div className="App">
      <Mobile/>
     <Header/>
     <Banner />
     <About/>
     <Skills />
     <Works/>
     <Certificates/>
     <Contact/>
    </div>
  );
}

export default App;
