

import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-zinc-200">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(40rem_20rem_at_50%_-2rem,rgba(132,204,22,0.08),transparent)]" />
        <Header />
        <main className='pt-[120px] pb-[10px] md:pb-[30px]'>
          <Hero />
          <About />
        </main>
      </div>
    </Router>
  );
}
