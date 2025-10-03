import { Link } from 'react-router-dom';
import map from '../assets/map.svg';
import senuto from '../assets/senuto.svg';

export default function Hero() {
  return (
    <div className="relative overflow-hidden mt-[30px]">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
            <div className="text-center md:text-left mr-[100px]">
              <h1 className="text-4xl md:text-5xl whitespace-nowrap lg:text-7xl font-light tracking-tight text-white">
                Cała Polska
                <br />
                linkuje do Ciebie
              </h1>
              <p className="mt-6 text-[16px] md:text-[18px] leading-[28px] font-normal text-[#959595] font-inter">
                Pokaż się na niezależnych portalach informacyjnych
                <br className="hidden md:block" />
                z wysokim ruchem i pozycją w Google.
              </p>
              <div className="mt-[32px] md:mt-[48px]">
                <Link
                  to="/oferta"
                  className="inline-block rounded-full font-medium px-[32px] md:px-[48px] py-3 text-base font-light text-black hover:opacity-90 transition-opacity button-animate"
                >
                  Odbieram darmową ofertę
                </Link>
                <p className="mt-4 text-[18px] font-light">
                  <span className="font-medium text-white">365</span> <span className="text-[#959595]">portali w</span> <span className="font-medium text-white">340</span> <span className="text-[#959595]">miejscach w Polsce</span>
                </p>
              </div>
            </div>
            <div className=" md:w-auto relative map-container">
              <img src={map} alt="Vestigio" className="w-full h-auto map-animate" />
            </div>
        </div>
        <div className="mt-[32px] md:mt-[43px] flex flex-col md:flex-row justify-between items-center md:items-end gap-6 md:gap-x-[120px] text-sm">
            <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] text-center md:text-left">
              <div>
                <div className="text-[18px] leading-[30px] font-light text-white">500 000</div>
                <div className="text-[14px] md:text-[16px] leading-[22px] text-zinc-400 max-w-[200px]">szacowany miesięczny ruch całej sieci</div>
              </div>
              <div>
                <div className="text-[18px] leading-[30px] font-light text-white">175+</div>
                <div className="text-[14px] md:text-[16px] leading-[22px] text-zinc-400 max-w-[200px]">portali z szacowanym miesięcznym ruchem 1000+ wejść / msc</div>
              </div>
            </div>
            <div className="text-[14px] text-zinc-400 flex items-center whitespace-nowrap gap-x-1">
              Na podstawie danych z <img src={senuto} alt="Senuto" className="inline-block" />
            </div>
        </div>
      </div>
     
    </div>
  );
}
