import arrowDown1 from '../../assets/arrowDown1.svg';
import arrowDown2 from '../../assets/arrowDown2.svg';
import arrowDown3 from '../../assets/arrowDown3.svg';

import { useState } from 'react';

export default function Offer() {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-[166px]">
      <h2 className="text-[44px] font-light leading-[57px] tracking-[-1.76px] text-white mb-[54px]">
        Poznaj naszą ofertę
      </h2>

      <div className="flex flex-col">
        {/* Wizytówka */}
        <div className="rounded-t-[24px] border-t border-r border-l border-[#72787E] bg-black p-[48px] pb-[68px]">
          <div 
            onClick={() => setExpandedSection(expandedSection === 1 ? null : 1)}
            className="flex items-center justify-between cursor-pointer">
            <div className="flex items-center gap-4">
              <button 
                className={`${expandedSection === 1 ? "" : "rotate-180"} cursor-pointer transition-transform duration-300`}
              >
                <img src={arrowDown1} alt="Expand" className="w-6 h-6" />
              </button>
              <h3 className="text-[20px] font-light bg-gradient-to-r from-[rgba(155,127,239,1)] to-[rgba(72,222,238,1)] bg-clip-text text-transparent">Wizytówka dla Twojej firmy</h3>
            </div>
            <span className="text-[20px] font-light bg-gradient-to-r from-[rgba(155,127,239,1)] to-[rgba(72,222,238,1)] bg-clip-text text-transparent">od 240 zł</span>
          </div>
          <div className={`grid grid-rows-[0fr] transition-all duration-300 ease-in-out ${expandedSection === 1 ? 'grid-rows-[1fr] mt-8' : ''}`}>
            <div className="overflow-hidden">
            <div className="mt-8 grid grid-cols-2 gap-8">
              <div className="rounded-[20px] bg-[#0D0D0D] p-6">
                <h4 className="text-white text-2xl mb-4">Standard</h4>
                <div className="text-3xl font-medium text-white mb-6">240 <span className="text-base font-light">zł netto / rok</span></div>
                <div className="space-y-4">
                  <div className="text-[#C2C2C2]">Obecność w sekcji <span className="text-[#7B61FF]">Więcej firm z kategorii</span></div>
                  <div className="text-[#C2C2C2]">Link na stronie wizytówki</div>
                  <div className="text-[#C2C2C2]">Przedłużenie wizytówki<br/>na następny rok: <span className="text-white">192 zł</span></div>
                  <button className="text-[#7B61FF] mt-4">Zobacz przykład</button>
                </div>
              </div>
              <div className="rounded-[20px] bg-[#0D0D0D] p-6 border border-[rgba(72,222,238,0.3)]">
                <h4 className="text-white text-2xl mb-4">Premium</h4>
                <div className="text-3xl font-medium text-white mb-6">600 <span className="text-base font-light">zł netto / rok</span></div>
                <div className="space-y-4">
                  <div className="text-[#C2C2C2]">Wyższa pozycja: <span className="text-[#7B61FF]">Promowane firmy z kategorii</span></div>
                  <div className="text-[#C2C2C2]">Link na stronie wizytówki</div>
                  <div className="text-[#C2C2C2]">Link w rankingu</div>
                  <div className="text-[#C2C2C2]">Przedłużenie wizytówki<br/>na następny rok: <span className="text-white">420 zł</span></div>
                  <button className="text-[#7B61FF] mt-4">Zobacz przykład</button>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>

        {/* Publikacja artykułów */}
        <div className="rounded-t-[24px] border-t border-r border-l border-[#72787E] bg-black mt-[-20px] p-[48px] pb-[68px]">
          <div 
            onClick={() => setExpandedSection(expandedSection === 2 ? null : 2)}
            className="flex items-center justify-between cursor-pointer">
            <div className="flex items-center gap-4">
              <button className={`cursor-pointer transition-transform duration-300 ${expandedSection === 2 ? "" : "rotate-180"}`}>
                <img src={arrowDown2} alt="Expand" className="w-6 h-6" />
              </button>
              <h3 className="text-[20px] font-light text-white">Publikacja artykułów</h3>
            </div>
            <span className="text-[20px] font-light text-white">od 120 zł</span>
          </div>
          <p className="mt-4 text-[#C2C2C2] text-base font-light leading-[22px] ml-12">
            Wypromuj swoje artykuły u nas. Wszystkie artykuły oznaczane są nakładką graficzną Artykuł sponsorowany, zgodną z wymogami prawnymi.
          </p>
        </div>

        {/* Stworzenie artykułów */}
        <div className="rounded-t-[24px] rounded-b-[24px] border-t border-r border-l border-b border-[#72787E] bg-black mt-[-20px] p-[48px] ">
          <div 
            onClick={() => setExpandedSection(expandedSection === 3 ? null : 3)}
            className="flex items-center justify-between cursor-pointer">
            <div className="flex items-center gap-4">
              <button className={`cursor-pointer transition-transform duration-300 ${expandedSection === 3 ? "" : "rotate-180"}`}>
                <img src={arrowDown3} alt="Expand" className="w-6 h-6" />
              </button>
              <h3 className="text-[20px] font-light text-white">Stworzenie artykułów</h3>
            </div>
            <span className="text-[20px] font-light text-white">od 60 zł</span>
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-col sm:flex-row items-center justify-between">
        <p className="text-white text-[20px] font-light mb-4 sm:mb-0">
          Skontaktuj się po więcej konkretów. Bez zobowiązań.
        </p>
        <button className="bg-[#7B61FF] hover:bg-[#6B51EF] transition-colors rounded-full py-4 px-8 text-white">
          Odbierz darmową ofertę
        </button>
      </div>
    </div>
  );
}
