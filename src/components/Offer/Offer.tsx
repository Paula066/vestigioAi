import arrowDown1 from '../../assets/arrowDown1.svg';
import arrowDown2 from '../../assets/arrowDown2.svg';
import arrowDown3 from '../../assets/arrowDown3.svg';
import publicationMap from '../../assets/publicationMap.svg';

import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import check from '../../assets/checked.svg';

interface GradientTextProps {
  children: React.ReactNode;
}

const GradientText = ({ children }: GradientTextProps) => (
  <span className="bg-gradient-to-r from-[#9B7FEF] to-[#48DEEE] bg-clip-text text-transparent font-inter text-[14px] sm:text-[15.8px] font-normal leading-[20px] sm:leading-[22.69px] font-medium">
    {children}
  </span>
);

interface ExpandedContentProps {
  type: 'pricing' | 'publication' | 'creation';
}

const ExpandedContent = ({ type }: ExpandedContentProps) => {
  if (type === 'pricing') {
    return (
      <div className="md:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        <div className="rounded-[12px] border border-[rgba(217,217,217,0.24)] bg-[rgba(255,255,255,0.08)] p-6">
          <h4 className="text-white text-[20px] sm:text-[24px]">Standard</h4>
          <div className="text-[28px] sm:text-[34px] font-light text-white mb-4 sm:mb-6 mt-2 sm:mt-3">240 zł <span className="text-[20px] sm:text-[24px] font-light">netto / rok</span></div>
          <div className="space-y-6">
            <div className="text-[#C2C2C2]">Obecność w sekcji: <GradientText>Więcej firm z kategorii</GradientText></div>
            <div className="text-[#C2C2C2]">Link na stronie wizytówki</div>
            <div className="text-[#C2C2C2]">Przedłużenie wizytówki<br/>na następny rok: <span className="text-white">192 zł</span></div>
            <button className="text-[#ffffffcc] mt-[60px] sm:mt-[95px] cursor-pointer">Zobacz przykład</button>
          </div>
        </div>
        <div className="rounded-[12px] p-[2px] relative bg-gradient-to-r from-[#9B7FEF] to-[#48DEEE]">
          <div className="relative bg-black rounded-[10px] p-6">
            <h4 className="text-white text-[20px] sm:text-[24px]">Premium</h4>
            <div className="text-[28px] sm:text-[34px] font-light text-white mb-4 sm:mb-6 mt-2 sm:mt-3">600 zł <span className="text-[20px] sm:text-[24px] font-light">netto / rok</span></div>
            <div className="space-y-6">
              <div className="text-[#C2C2C2]">Wyższa pozycja: <GradientText>Promowane firmy z kategorii</GradientText></div>
              <div className="text-[#C2C2C2]">Link na stronie wizytówki</div>
              <div className="text-[#C2C2C2]">Link w rankingu</div>
              <div className="text-[#C2C2C2]">Przedłużenie wizytówki<br/>na następny rok: <span className="text-white">420 zł</span></div>
              <button className="text-[#ffffffcc] mt-[60px] sm:mt-[46px] cursor-pointer">Zobacz przykład</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  if (type === 'publication') {
    return (
      <div className="gap-6 sm:gap-8">
        <div className="text-[#C2C2C2] text-[14px] sm:text-base mb-8 md:max-w-[870px]">
          Wypromuj swoje artykuły u nas. Wszystkie artykuły oznaczane są nakładką  graficzną Artykuł sponsorowany, zgodną z wymogami prawnymi.
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-8 sm:gap-0">
          <div className="w-full sm:flex-1 flex items-center justify-center">
            <img src={publicationMap} alt="Publication Map" className="w-full max-w-[280px] sm:max-w-[400px]" />
          </div>
          <div className="w-full sm:flex-1">
            <div className="rounded-[12px] border border-[rgba(217,217,217,0.24)] bg-[rgba(255,255,255,0.08)] p-6">
              <h4 className="font-inter text-[32px] sm:text-[44px] font-normal leading-[38px] sm:leading-[57px] tracking-[-1.28px] sm:tracking-[-1.76px] text-white mb-[20px]">Artykuł sponsorowany</h4>
              <div className="font-inter text-[20px] font-medium leading-[28px] bg-gradient-to-r from-[#9FCBA2] via-[#FAFADB] to-[#FAFADB] bg-clip-text text-transparent mb-4">120 - 179 zł</div>
              <div className="space-y-4 text-[#C2C2C2] font-inter text-[16px] font-normal leading-[22px]">
                <div>Czas emisji artykułu: 12 miesięcy</div>
                <div>Ilość linków w artykule: max 3</div>
                <div className="flex items-center gap-2">Linki dofollow mające wpływ na Twoje SEO: <img src={check} alt="Check" className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4" /></div>
                <div>Promocja na stronie głównej przez 7 dni</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

    return (
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
        <div className="flex-1">
          <div className="rounded-[12px] border border-[rgba(217,217,217,0.24)] bg-[rgba(255,255,255,0.08)] pt-[28px] px-[24px] pb-[40px] min-h-[230px]">
            <h4 className="text-[24px] font-normal leading-[28px] tracking-[-1.2px] text-white mb-[12px]">Mam swój artykuł</h4>
            <div className="text-[#C2C2C2] font-inter text-[15.8px] font-light leading-[22.69px] mb-6">
              Artykuł musi spełniać wymagania: min. 2500 zzs, zdjęcie główne + max 3 zdjęcia w treści, max 3 linki, tematyka zgodna z Polskim prawem
            </div>
            <div className="font-inter text-[36px] font-medium leading-[28px] tracking-[-1.8px] text-white">0 zł</div>
          </div>
        </div>
        <div className="flex-1">
          <div className="rounded-[12px] p-[2px] relative bg-gradient-to-r from-[#EF7FA3] via-[#F3B4A0] to-[#48DEEE]">
            <div className="relative bg-black rounded-[10px] pt-[28px] px-[24px] pb-[40px] min-h-[230px]">
            <h4 className="text-[24px] font-normal leading-[28px] tracking-[-1.2px] text-white mb-[12px]">Chcę zamówić artykuł</h4>
            <div className="text-[#C2C2C2] font-inter text-[15.8px] font-light leading-[22.69px] mb-6">
              Tworzony w autorskim procesie z AI + słowa kluczowe Twojej branży. Gotowy do publikacji: pełna treść, miniaturka, zdjęcie.
            </div>
            <div className="font-inter text-[36px] mt-[37px] font-medium leading-[28px] tracking-[-1.8px] text-white">
              60 <span className="text-[24px] font-medium leading-[28px] tracking-[-1.2px]">zł / artykuł</span>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
};

interface PricingBoxProps {
  isExpanded: boolean;
  onToggle: () => void;
  title: string;
  price: string;
  arrowIcon: string;
  gradientType?: 'purple' | 'green' | 'purple-cream' | null;
  expandedContentType?: 'pricing' | 'publication' | 'creation';
  className?: string;
}

function PricingBox({ isExpanded, onToggle, title, price, arrowIcon, gradientType = null, expandedContentType, className = '' }: PricingBoxProps) {
  const getGradientClasses = () => {
    switch (gradientType) {
      case 'purple':
        return "bg-gradient-to-r from-[#9B7FEF] to-[#48DEEE] bg-clip-text text-transparent";
      case 'green':
        return "bg-gradient-to-r from-[#9FCBA2] to-[#FAFADB] bg-clip-text text-transparent";
      case 'purple-cream':
        return "bg-gradient-to-r from-[#FAFADB] to-[#EFACBB] bg-clip-text text-transparent";
      default:
        return "text-[#C2C2C2]";
    }
  };

  const titleClasses = `text-[15px] sm:text-[24px] md:text-[32px] font-light ${getGradientClasses()}`;
  const priceClasses = `text-[15px] sm:text-[18px] md:text-[20px] font-light text-[#C2C2C2] md:text-transparent md:bg-clip-text ${gradientType ? 'md:bg-gradient-to-r md:from-[#9B7FEF] md:to-[#48DEEE]' : ''} ${gradientType === 'green' ? 'md:from-[#9FCBA2] md:to-[#FAFADB]' : ''} ${gradientType === 'purple-cream' ? 'md:from-[#FAFADB] md:to-[#EFACBB]' : ''}`;

  return (
    <div 
      onClick={onToggle}
      className={`rounded-t-[24px] border-t border-r border-l border-[#72787E] bg-black mt-[-20px] p-[16px] sm:p-[48px] pb-[30px] sm:pb-[68px] hover:shadow-[inset_0_60px_40px_-8px_rgba(255,255,255,0.15)] transition-shadow cursor-pointer ${className}`}
    >
      <div className="flex items-center justify-between hover:opacity-80 transition-opacity">
        <div className="flex items-center gap-2 sm:gap-4">
          <button 
            className={`hidden sm:block cursor-pointer transition-transform duration-300 ${isExpanded ? "" : "rotate-180"}`}
          >
            <img src={arrowIcon} alt="Expand" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>
          <h3 className={twMerge(titleClasses)}>{title}</h3>
        </div>
        <span className={priceClasses}>{price}</span>
      </div>
      <div className={`grid grid-rows-[0fr] transition-all duration-300 ease-in-out ${isExpanded ? 'grid-rows-[1fr] mt-8' : ''}`}>
        <div className="overflow-hidden">
          {expandedContentType && <ExpandedContent type={expandedContentType} />}
        </div>
      </div>
    </div>
  );
}

export default function Offer() {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);
  return (
    <div className="container px-4 md:px-6 mb-[60px] md:mb-[166px]">
      <h2 className="text-[32px] md:text-[44px] font-light leading-[42px] md:leading-[57px] tracking-[-1.28px] md:tracking-[-1.76px] text-white mb-[40px] md:mb-8 md:mb-[54px]">
        Poznaj naszą ofertę
      </h2>

      <div className="flex flex-col">
        <PricingBox
          isExpanded={expandedSection === 1}
          onToggle={() => setExpandedSection(expandedSection === 1 ? null : 1)}
          title="Wizytówka dla Twojej firmy"
          price="od 240 zł"
          arrowIcon={arrowDown1}
          gradientType="purple"
          expandedContentType="pricing"
        />
        <PricingBox
          isExpanded={expandedSection === 2}
          onToggle={() => setExpandedSection(expandedSection === 2 ? null : 2)}
          title="Publikacja artykułów"
          price="od 120 zł"
          arrowIcon={arrowDown2}
          gradientType="green"
          expandedContentType="publication"
        />
        <PricingBox
          isExpanded={expandedSection === 3}
          onToggle={() => setExpandedSection(expandedSection === 3 ? null : 3)}
          title="Stworzenie artykułów"
          price="od 60 zł"
          arrowIcon={arrowDown3}
          gradientType="purple-cream"
          expandedContentType="creation"
          className="border-b border-[#72787E] rounded-b-[24px] !pb-4 sm:!pb-[48px]"
        />
      </div>

      <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white text-[20px] sm:text-[24px] font-light leading-[24px] sm:leading-[28px] tracking-[-1px] sm:tracking-[-1.2px] text-center sm:text-left">
          Skontaktuj się po więcej konkretów. Bez zobowiązań.
        </p>
        <button className="w-full sm:w-auto inline-block rounded-full px-[32px] sm:px-[48px] py-3 text-base font-bold text-black hover:opacity-90 transition-opacity button-animate cursor-pointer">
          Odbierz darmową ofertę
        </button>
      </div>
    </div>
  );
}
