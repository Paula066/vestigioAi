import { Link } from 'react-router-dom';
import map from '../assets/map.svg';
import senuto from '../assets/senuto.svg';

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
         
          
          </div>
          <div>
          <img src={map} alt="Vestigio"  />
          </div>
        </div>
        <div className="mt-[43px] flex justify-between items-end gap-x-[120px] text-sm">
            <div className="flex  gap-[48px]">
              <div>
                <div className="text-[18px] leading-[30px] font-light text-white">500 000</div>
                <div className="text-[16px] leading-[22px] text-zinc-400 max-w-[200px]">szacowany miesięczny ruch całej sieci</div>
              </div>
              <div>
                <div className="text-[18px] leading-[30px] font-light text-white">175+</div>
                <div className="text-[16px] leading-[22px] text-zinc-400 max-w-[200px]">portali z szacowanym miesięcznym ruchem 1000+ wejść / msc</div>
              </div>
              </div>
              <div className="text-[14px] text-zinc-400 flex items-center whitespace-nowrap gap-x-1">Na podstawie danych z <img src={senuto} alt="Senuto" className="inline-block" /></div>
            </div>
      </div>
     
    </div>
  );
}
