import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Vestigio" className="h-8" />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link to="/dlaczego-warto" className="text-white/70 hover:text-white">
                  Dlaczego warto
                </Link>
              </li>
              <li>
                <Link to="/oferta" className="text-white/70 hover:text-white">
                  Oferta
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-white/70 hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-white opacity-80 hover:opacity-100 rounded-[700px] border border-white px-4 py-2">
                  Umów konsultację
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="absolute top-20 left-0 right-0 bg-black/95 backdrop-blur-sm md:hidden">
              <nav className="px-4 py-6">
                <ul className="flex flex-col space-y-4">
                  <li>
                    <Link to="/dlaczego-warto" className="text-white/70 hover:text-white block" onClick={() => setIsMenuOpen(false)}>
                      Dlaczego warto
                    </Link>
                  </li>
                  <li>
                    <Link to="/oferta" className="text-white/70 hover:text-white block" onClick={() => setIsMenuOpen(false)}>
                      Oferta
                    </Link>
                  </li>
                  <li>
                    <Link to="/faq" className="text-white/70 hover:text-white block" onClick={() => setIsMenuOpen(false)}>
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link to="/faq" className="text-white opacity-80 hover:opacity-100 rounded-[700px] border border-white px-4 py-2 inline-block" onClick={() => setIsMenuOpen(false)}>
                      Umów konsultację
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
