
import { BrowserRouter as Router } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';

// Lazy load components that are not immediately visible
const About = lazy(() => import('./components/About'));
const Stats = lazy(() => import('./components/Stats/Stats'));
const Process = lazy(() => import('./components/Process/Process'));
const Offer = lazy(() => import('./components/Offer/Offer'));
const Benefits = lazy(() => import('./components/Benefits'));
const Discount = lazy(() => import('./components/Discount'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Contact = lazy(() => import('./components/Contact'));
const FAQ = lazy(() => import('./components/FAQ'));
const Footer = lazy(() => import('./components/Footer'));

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-zinc-200">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(40rem_20rem_at_50%_-2rem,rgba(132,204,22,0.08),transparent)]" />
        <Header />
        <main>
          <Hero />
          <Suspense fallback={<div className="h-20 animate-pulse bg-zinc-900" />}>
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
          </Suspense>
        </main>
        <Suspense fallback={<div className="h-16 animate-pulse bg-zinc-900" />}>
          <Footer />
        </Suspense>
      </div>
    </Router>
  );
}
