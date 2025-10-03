

import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats/Stats';
import Process from './components/Process/Process';
import Offer from './components/Offer/Offer';
import Benefits from './components/Benefits';
import Discount from './components/Discount';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-zinc-200">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(40rem_20rem_at_50%_-2rem,rgba(132,204,22,0.08),transparent)]" />
        <Header />
        <main>
          <Hero />
          <div className='pt-[30px] md:pt-[120px]'>
            <About />
          </div>
          <div className='mb-[60px] md:mb-[158px]'>
            <Stats />
          </div>
            <Process />
            <Offer />
            <Benefits />
            <Discount />
            <Testimonials />
            <Contact />
            <FAQ />
        </main>
        <Footer />
      </div>
    </Router>
  );
}
