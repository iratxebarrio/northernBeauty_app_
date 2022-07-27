import '../src/Styles/App.scss'
import Header from './components/Header';
import Slider from './components/Slider';
import ServicesMain from './components/ServicesMain';
import AboutMain from './components/AboutMain';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';




function App() {
  return (
    <>
   <Header />
   <Slider />
   <ServicesMain />
   <AboutMain />
   <Testimonials />
   <Contact />
   <Footer></Footer>
    </>
  );
}

export default App;
