import Header from './Header';
import Slider from './PantallaPrincipal/Slider';
import ServicesMain from './PantallaPrincipal/ServicesMain';
import AboutMain from './PantallaPrincipal/AboutMain';
import Testimonials from './PantallaPrincipal/Testimonials';
import Contact from './PantallaPrincipal/Contact';
import Footer from './Footer';
function Main() {
    return (
      <>
     <Header />
     <Slider />
     <ServicesMain />
     <AboutMain />
     <Testimonials />
     <Contact />
     <Footer/>
      </>
    );
  }
  
  export default Main;