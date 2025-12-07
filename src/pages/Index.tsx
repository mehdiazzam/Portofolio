import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div id="main-scroll-container" className="min-h-screen h-screen bg-background snap-y snap-mandatory overflow-y-auto">
      <Navigation />
      <Hero />
      <Skills />
      <Certifications />
      <Contact />
    </div>
  );
};

export default Index;
