import HeroSlider from './components/HeroSlider';
import ExploreOurItems from './components/ExploreOurItems';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSlider />
      <ExploreOurItems />
      <AboutUs />
      <Footer />
    </div>
  );
}
