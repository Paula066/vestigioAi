import { Link } from 'react-router-dom';
import map from '../assets/map.svg';
import senuto from '../assets/senuto.svg';

export default function Hero() {
  return (
    <div id="hero" className="relative overflow-hidden pt-[90px]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
            <div className="text-center md:text-left md:mr-[50px] lg:mr-[0px]">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-light tracking-tight text-white">
                Cała Polska
                <br className=" ml-3 md:ml-0" />
                linkuje do Ciebie
              </h1>
              <div className="block md:hidden w-full max-w-[280px] mx-auto mt-6">
                <img src={map} alt="Vestigio" className="w-full h-auto map-animate" />
              </div>
              <p className="mt-4 md:mt-6 text-[14px] sm:text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] font-normal text-[#959595] font-inter">
                Pokaż się na niezależnych portalach informacyjnych
                <br className="hidden md:block" />
                z wysokim ruchem i pozycją w Google.
              </p>
              <div className="mt-[24px] mb-4 md:mt-[32px] lg:mt-[48px]">
                <Link
                  to="/oferta"
                  className="inline-block rounded-full font-medium px-[24px] sm:px-[32px] md:px-[48px] py-2.5 md:py-3 text-[15px] sm:text-base font-light text-black hover:opacity-90 transition-opacity button-animate"
                >
                  Odbieram darmową ofertę
                </Link>
                <p className="mt-4 text-[16px] md:text-[18px] font-light">
                  <span className="font-medium text-white">365</span> <span className="text-[#959595]">portali w</span> <span className="font-medium text-white">340</span> <span className="text-[#959595]">miejscach w Polsce</span>
                </p>
              </div>
            </div>
            <div className="hidden md:block w-full sm:w-[80%] md:w-auto relative map-container">
              <img src={map} alt="Vestigio" className="w-full h-auto map-animate" />
            </div>
        </div>
        <div className="mt-[24px] md:mt-[32px] lg:mt-[43px] flex flex-col md:flex-row justify-between items-center md:items-end gap-4 md:gap-6 lg:gap-x-[120px] text-sm">
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-[48px] text-center md:text-left">
              <div>
                <div className="text-[16px] md:text-[18px] leading-[24px] md:leading-[30px] font-light text-white">500 000</div>
                <div className="text-[12px] sm:text-[14px] md:text-[16px] leading-[20px] md:leading-[22px] text-zinc-400 max-w-[200px]">szacowany miesięczny ruch całej sieci</div>
              </div>
              <div>
                <div className="text-[16px] md:text-[18px] leading-[24px] md:leading-[30px] font-light text-white">175+</div>
                <div className="text-[12px] sm:text-[14px] md:text-[16px] leading-[20px] md:leading-[22px] text-zinc-400 max-w-[200px]">portali z szacowanym miesięcznym ruchem 1000+ wejść / msc</div>
              </div>
            </div>
            <div className="text-[12px] sm:text-[14px] text-zinc-400 flex items-center whitespace-nowrap gap-x-1">
              Na podstawie danych z <img src={senuto} alt="Senuto" className="inline-block h-4 md:h-auto" />
            </div>
        </div>
      </div>
    </div>
  );
}

