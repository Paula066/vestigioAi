import logo from '../assets/logo.svg';
import { useState } from 'react';

const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="container">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <button onClick={() => handleNavClick('hero')} className="flex items-center cursor-pointer">
              <img src={logo} alt="Vestigio" className="h-8" />
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8 items-center">
              <li>
                <button onClick={() => handleNavClick('about')} className="text-white/70 hover:text-white cursor-pointer">
                  Dlaczego warto
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('offer')} className="text-white/70 hover:text-white cursor-pointer">
                  Oferta
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('faq')} className="text-white/70 hover:text-white cursor-pointer">
                  FAQ
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('contact')} className="text-white opacity-80 hover:opacity-100 rounded-[700px] border border-white px-4 py-2 cursor-pointer">
                  Umów konsultację
                </button>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 cursor-pointer"
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
                    <button onClick={() => handleNavClick('about')} className="text-white/70 hover:text-white block w-full text-left cursor-pointer">
                      Dlaczego warto
                    </button>
                  </li>
                  <li>
                    <button onClick={() => handleNavClick('offer')} className="text-white/70 hover:text-white block w-full text-left cursor-pointer">
                      Oferta
                    </button>
                  </li>
                  <li>
                    <button onClick={() => handleNavClick('faq')} className="text-white/70 hover:text-white block w-full text-left cursor-pointer">
                      FAQ
                    </button>
                  </li>
                  <li>
                    <button onClick={() => handleNavClick('contact')} className="text-white opacity-80 hover:opacity-100 rounded-[700px] border border-white px-4 py-2 inline-block cursor-pointer">
                      Umów konsultację
                    </button>
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
