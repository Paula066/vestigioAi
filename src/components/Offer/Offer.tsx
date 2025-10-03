import arrowDown1 from '../../assets/arrowDown1.svg';
import arrowDown2 from '../../assets/arrowDown2.svg';
import arrowDown3 from '../../assets/arrowDown3.svg';

import { useState } from 'react';

interface GradientTextProps {
  children: React.ReactNode;
}

const GradientText = ({ children }: GradientTextProps) => (
  <span className="bg-gradient-to-r from-[#9B7FEF] to-[#48DEEE] bg-clip-text text-transparent font-inter text-[15.8px] font-normal leading-[22.69px] font-medium">
    {children}
  </span>
);

interface PricingBoxProps {
  isExpanded: boolean;
  onToggle: () => void;
  title: string;
  price: string;
  arrowIcon: string;
  isGradient?: boolean;
  className?: string;
}

function PricingBox({ isExpanded, onToggle, title, price, arrowIcon, isGradient, className = '' }: PricingBoxProps) {
  const titleClasses = isGradient 
    ? "text-[20px] font-light bg-gradient-to-r from-[rgba(155,127,239,1)] to-[rgba(72,222,238,1)] bg-clip-text text-transparent"
    : "text-[20px] font-light text-white";

  const priceClasses = isGradient 
    ? "text-[20px] font-light bg-gradient-to-r from-[rgba(155,127,239,1)] to-[rgba(72,222,238,1)] bg-clip-text text-transparent"
    : "text-[20px] font-light text-white";

  return (
    <div className={`rounded-t-[24px] border-t border-r border-l border-[#72787E] bg-black mt-[-20px] p-[48px] pb-[68px] ${className}`}>
      <div 
        onClick={onToggle}
        className="flex items-center justify-between cursor-pointer">
        <div className="flex items-center gap-4">
          <button 
            className={`cursor-pointer transition-transform duration-300 ${isExpanded ? "" : "rotate-180"}`}
          >
            <img src={arrowIcon} alt="Expand" className="w-6 h-6" />
          </button>
          <h3 className={titleClasses}>{title}</h3>
        </div>
        <span className={priceClasses}>{price}</span>
      </div>
      <div className={`grid grid-rows-[0fr] transition-all duration-300 ease-in-out ${isExpanded ? 'grid-rows-[1fr] mt-8' : ''}`}>
        <div className="overflow-hidden">
          <div className="mt-8 grid grid-cols-2 gap-8">
            <div className="rounded-[12px] border border-[rgba(217,217,217,0.24)] bg-[rgba(255,255,255,0.08)] p-6">
              <h4 className="text-white text-[24px]">Standard</h4>
              <div className="text-[34px] font-light text-white mb-6 mt-3">240 zł <span className="text-[24px] font-light">netto / rok</span></div>
              <div className="space-y-6">
                <div className="text-[#C2C2C2]">Obecność w sekcji: <GradientText>Więcej firm z kategorii</GradientText></div>
                <div className="text-[#C2C2C2]">Link na stronie wizytówki</div>
                <div className="text-[#C2C2C2]">Przedłużenie wizytówki<br/>na następny rok: <span className="text-white">192 zł</span></div>
                <button className="text-[#ffffffcc] mt-[95px]">Zobacz przykład</button>
              </div>
            </div>
            <div className="rounded-[12px] bg-[rgba(255,255,255,0.08)] p-6 relative after:absolute after:inset-0 after:rounded-[12px] after:border-2 after:border-[rgba(155,127,239,1)] after:border-r-[rgba(72,222,238,1)] after:border-b-[rgba(72,222,238,1)]">
              <h4 className="text-white text-[24px]">Premium</h4>
              <div className="text-[34px] font-light text-white mb-6">600 <span className="text-[24px] font-light">zł netto / rok</span></div>
              <div className="space-y-6">
                <div className="text-[#C2C2C2]">Wyższa pozycja: <GradientText>Promowane firmy z kategorii</GradientText></div>
                <div className="text-[#C2C2C2]">Link na stronie wizytówki</div>
                <div className="text-[#C2C2C2]">Link w rankingu</div>
                <div className="text-[#C2C2C2]">Przedłużenie wizytówki<br/>na następny rok: <span className="text-white">420 zł</span></div>
                <button className="text-[#ffffffcc] mt-[95px]">Zobacz przykład</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Offer() {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-[166px]">
      <h2 className="text-[44px] font-light leading-[57px] tracking-[-1.76px] text-white mb-[54px]">
        Poznaj naszą ofertę
      </h2>

      <div className="flex flex-col">
        <PricingBox
          isExpanded={expandedSection === 1}
          onToggle={() => setExpandedSection(expandedSection === 1 ? null : 1)}
          title="Wizytówka dla Twojej firmy"
          price="od 240 zł"
          arrowIcon={arrowDown1}
          isGradient
        />
        <PricingBox
          isExpanded={expandedSection === 2}
          onToggle={() => setExpandedSection(expandedSection === 2 ? null : 2)}
          title="Publikacja artykułów"
          price="od 120 zł"
          arrowIcon={arrowDown2}
        />
        <PricingBox
          isExpanded={expandedSection === 3}
          onToggle={() => setExpandedSection(expandedSection === 3 ? null : 3)}
          title="Stworzenie artykułów"
          price="od 60 zł"
          arrowIcon={arrowDown3}
          className="border-b border-[#72787E] rounded-b-[24px] !pb-[48px]"
        />
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
