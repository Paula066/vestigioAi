

import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats/Stats';
import Process from './components/Process/Process';
import Offer from './components/Offer/Offer';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-zinc-200">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(40rem_20rem_at_50%_-2rem,rgba(132,204,22,0.08),transparent)]" />
        <Header />
        <main>
          <Hero />
          <div className='pt-[120px]'>
            <About />
          </div>
          <div className='mb-[158px]'>
            <Stats />
          </div>
            <Process />
            <Offer />
        </main>
      </div>
    </Router>
  );
}
