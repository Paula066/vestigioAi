
import { BrowserRouter as Router } from 'react-router-dom';
import { Suspense, lazy, useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';

// Loading component with spinner
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[200px]">
    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-zinc-200"></div>
  </div>
);

// Error Boundary Component
const ErrorBoundary = ({ children }: { children: React.ReactNode }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleError = (error: ErrorEvent) => {
      console.error('Error caught by boundary:', error);
      setHasError(true);
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  if (hasError) {
    return (
      <div className="text-red-500 p-4 text-center">
        Something went wrong. Please refresh the page.
      </div>
    );
  }

  return <>{children}</>;
};

// Lazy load components with retry
const retryImport = <T,>(importFn: () => Promise<T>, retries = 3, interval = 1000): Promise<T> => {
  return new Promise((resolve, reject) => {
    importFn()
      .then(resolve)
      .catch((error) => {
        setTimeout(() => {
          if (retries === 1) {
            reject(error);
            return;
          }
          retryImport(importFn, retries - 1, interval).then(resolve, reject);
        }, interval);
      });
  });
};

// Lazy load components that are not immediately visible
const About = lazy(() => retryImport(() => import('./components/About')));
const Stats = lazy(() => retryImport(() => import('./components/Stats/Stats')));
const Process = lazy(() => retryImport(() => import('./components/Process/Process')));
const Offer = lazy(() => retryImport(() => import('./components/Offer/Offer')));
const Benefits = lazy(() => retryImport(() => import('./components/Benefits')));
const Discount = lazy(() => retryImport(() => import('./components/Discount')));
const Testimonials = lazy(() => retryImport(() => import('./components/Testimonials')));
const Contact = lazy(() => retryImport(() => import('./components/Contact')));
const FAQ = lazy(() => retryImport(() => import('./components/FAQ')));
const Footer = lazy(() => retryImport(() => import('./components/Footer')));

export default function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-black text-zinc-200">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(40rem_20rem_at_50%_-2rem,rgba(132,204,22,0.08),transparent)]" />
          
          {/* Header i Hero są ładowane natychmiast */}
          <ErrorBoundary>
            <Header />
          </ErrorBoundary>
          
          <main>
            <ErrorBoundary>
              <Hero />
            </ErrorBoundary>

            {/* Pierwsza sekcja - About i Stats */}
            <Suspense fallback={<LoadingSpinner />}>
              <ErrorBoundary>
                <div className='pt-[30px] md:pt-[120px]'>
                  <About />
                </div>
                <div className='mb-[60px] md:mb-[158px]'>
                  <Stats />
                </div>
              </ErrorBoundary>
            </Suspense>

            {/* Druga sekcja - Process i Offer */}
            <Suspense fallback={<LoadingSpinner />}>
              <ErrorBoundary>
                <Process />
                <Offer />
              </ErrorBoundary>
            </Suspense>

            {/* Trzecia sekcja - Benefits i Discount */}
            <Suspense fallback={<LoadingSpinner />}>
              <ErrorBoundary>
                <Benefits />
                <Discount />
              </ErrorBoundary>
            </Suspense>

            {/* Czwarta sekcja - Testimonials, Contact i FAQ */}
            <Suspense fallback={<LoadingSpinner />}>
              <ErrorBoundary>
                <Testimonials />
                <Contact />
                <FAQ />
              </ErrorBoundary>
            </Suspense>
          </main>

          {/* Footer */}
          <Suspense fallback={<LoadingSpinner />}>
            <ErrorBoundary>
              <Footer />
            </ErrorBoundary>
          </Suspense>
        </div>
      </Router>
    </ErrorBoundary>
  );
}
