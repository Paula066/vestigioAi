import { Link } from 'react-router-dom';
import map from '../assets/map.svg';

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
            <div>
          <h1 className="text-5xl font-light tracking-tight text-white sm:text-6xl lg:text-7xl">
            Cała Polska
            <br />
            linkuje do Ciebie
          </h1>
          <p className="mt-6 text-[18px] leading-[28px] font-normal text-[#959595] font-inter">
            Pokaż się na niezależnych portalach informacyjnych
            <br />
            z wysokim ruchem i pozycją w Google.
          </p>
          <div className="mt-[48px]">
            <Link
              to="/oferta"
              className="inline-block rounded-full px-[48px] py-3 text-base font-light text-black hover:opacity-90 transition-opacity" style={{ background: 'linear-gradient(90deg, #FFE4D6 0%, #D5BBF9 100%)' }}
            >
              Odbieram darmową ofertę
            </Link>
          </div>
          <div className="mt-3 flex items-center gap-x-6 text-sm">
            <div>
              <span className="font-semibold text-white">365</span>
              <span className="text-zinc-400"> portali w </span>
              <span className="font-semibold text-white">340</span>
              <span className="text-zinc-400"> miejscach w Polsce</span>
            </div>
          </div>
          
          </div>
          <div>
          <img src={map} alt="Vestigio"  />
          </div>
        </div>
       
      </div>
     
    </div>
  );
}
