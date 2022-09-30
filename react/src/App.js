import '../src/Styles/App.scss'
import Header from './components/Header';
import Slider from './components/PantallaPrincipal/Slider';
import ServicesMain from './components/PantallaPrincipal/ServicesMain';
import AboutMain from './components/PantallaPrincipal/AboutMain';
import Testimonials from './components/PantallaPrincipal/Testimonials';
import Contact from './components/PantallaPrincipal/Contact';
import Footer from './components/Footer';
import Login  from './components/Usuarios/Login';




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
   <Login />
    </>
  );
}

export default App;
