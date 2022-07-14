import '../src/Styles/App.scss'
import Header from './components/Header';
import Slider from './components/Slider';
import ServicesMain from './components/ServicesMain';
import AboutMain from './components/AboutMain';
import Testimonials from './components/Testimonials';


function App() {
  return (
    <>
   <Header />
   <Slider />
   <ServicesMain />
   <AboutMain />
   <Testimonials />
    </>
  );
}

export default App;
