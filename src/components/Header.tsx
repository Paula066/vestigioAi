import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Vestigio" className="h-8" />
          </Link>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link to="/dlaczego-warto" className="text-zinc-200 hover:text-white">
                  Dlaczego warto
                </Link>
              </li>
              <li>
                <Link to="/oferta" className="text-zinc-200 hover:text-white">
                  Oferta
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-zinc-200 hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-zinc-200 hover:text-white">
                  Umów konsultację
                </Link>
              </li>
            </ul>
    
          </nav>
          
        </div>
      </div>
    </header>
  );
}
