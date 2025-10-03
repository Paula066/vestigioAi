import checkedIcon from '../assets/checkedIcon2.svg';
import downIcon from '../assets/down.svg';
import React from 'react';

const DISCOUNT_TIERS = [
  { value: 1500, discount: 5 },
  { value: 5000, discount: 10 },
  { value: 10000, discount: 15 },
  { value: 20000, discount: 25 },
  { value: 30000, discount: 30 },
  { value: 50000, discount: 40 }
] as const;

const SLIDER_CONFIG = {
  min: 1500,
  max: 50000,
  step: 100,
  initialValue: 3000
} as const;

export default function Discount() {
  const [value, setValue] = React.useState(SLIDER_CONFIG.initialValue);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };

  const calculateProgress = () => {
    return ((value - SLIDER_CONFIG.min) / (SLIDER_CONFIG.max - SLIDER_CONFIG.min)) * 100;
  };

  const calculateDiscount = () => {
    for (let i = DISCOUNT_TIERS.length - 1; i >= 0; i--) {
      if (value >= DISCOUNT_TIERS[i].value) {
        return DISCOUNT_TIERS[i].discount;
      }
    }
    return 0;
  };

  const benefits = [
    'Start od 5 000 zł netto',
    'Zero presji – publikujesz, kiedy chcesz',
    'Rabaty nawet do 35%',
    'Pełna obsługa i wsparcie'
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-[100px]">
      <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-24">
        {/* Left Column */}
        <div className="flex-1">
          <h2 className="text-[44px] font-light leading-[57px] tracking-[-1.76px] text-white mb-6">
            Zdobądź swój rabat
          </h2>
          
          <div className="mb-[36px]">
            <div className="flex items-center gap-4">
              <div className="text-[#9B7FEF] text-[44px] font-normal leading-[60px]">rabaty od</div>
              <div className="bg-gradient-to-r from-[#9B7FEF] to-[#48DEEE] bg-clip-text text-transparent text-[72px] font-normal leading-[60px]">
                1500 <span className="text-[44px]">zł</span>
              </div>
            </div>
            <div className="text-white text-[16px] font-normal leading-[20px]">
              Im więcej kupisz tym mniej wydasz!
            </div>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-4">
              <div className="text-[#9B7FEF] text-[44px] font-normal leading-[60px]">do</div>
              <div className="bg-gradient-to-r from-[#9B7FEF] to-[#48DEEE] bg-clip-text text-transparent text-[72px] font-normal leading-[60px]">
                45<span className="text-[44px]">% rabatu</span>
              </div>
            </div>
            <div className="text-white text-[16px] font-normal leading-[20px]">
              Więcej się opłaca!
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1">
          <h2 className="text-[44px] font-light leading-[57px] tracking-[-1.76px] text-white mb-6">
            Skorzystaj z opcji prepaid
          </h2>
          
          <p className="text-[#C2C2C2] text-[16px] font-normal leading-[22px] mb-12">
            Zarezerwuj większy budżet z góry i korzystaj z niego wtedy, kiedy chcesz.
            Im większy pakiet, tym wyższy rabat – a środki są ważne aż 16 miesięcy.
          </p>

          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <img src={checkedIcon} alt="check" className="w-4 h-4" />
                <div className="text-[16px] font-semibold leading-[22px] bg-gradient-to-r from-[#9FCBA2] to-[#FAFADB] bg-clip-text text-transparent">{benefit}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slider Section */}
      <div className="mt-[170px] flex items-center py-[41px] px-[48px] rounded-[24px] border border-[#72787E] bg-black">
        <h3 className="text-white text-[44px] font-light leading-[57px] mr-[60px]">
          Sprawdź budżet <br /> i rabat
        </h3>
        
        <div className="relative flex-1 mr-[48px]">
          <div className="relative p-2 py-1 flex-1 bg-[#363645] rounded-[999px] h-[29px] max-w-[370px]">
            <div 
              className="absolute"
              style={{ 
                left: `${calculateProgress()}%`,
                top: '-80px',
                transform: 'translateX(-50%)'
              }}
            >
              <div className="relative">
                <div className="bg-[#212125] text-[#52DCEA] text-[31px] font-normal px-4 py-[6px] rounded-[44px] whitespace-nowrap">
                  {value.toLocaleString()} zł
                </div>
                <img 
                  src={downIcon} 
                  alt="down" 
                  className="absolute left-1/2 -translate-x-1/2 -bottom-2"
                />
              </div>
            </div>
            <style jsx>{`
              input[type="range"] {
                -webkit-appearance: none;
                width: 100%;
                height: 16px;
                background: #333333;
                border-radius: 8px;
                outline: none;
                position: relative;
              }

              input[type="range"]::before {
                content: '';
                position: absolute;
                height: 100%;
                left: 0;
                width: var(--progress);
                background: linear-gradient(90deg, #9B7FEF, #48DEEE);
                border-radius: 8px;
              }

              input[type="range"]::-webkit-slider-thumb {
                -webkit-appearance: none;
                appearance: none;
                width: 32px;
                height: 32px;
                background: #48DEEE;
                border-radius: 50%;
                cursor: pointer;
                position: relative;
                z-index: 2;
                box-shadow: 0 0 20px rgba(72, 222, 238, 0.5);
              }
            `}</style>
            <input
              type="range"
              min={SLIDER_CONFIG.min}
              max={SLIDER_CONFIG.max}
              step={SLIDER_CONFIG.step}
              value={value}
              onChange={handleChange}
              className="w-full"
              style={{ 
                '--progress': `${calculateProgress()}%`
              } as React.CSSProperties}
            />
          </div>

         
        </div>
        <div className="flex flex-1 items-center gap-2">
            <span 
              className="text-[72px] font-normal"
              style={{
                background: 'linear-gradient(90deg, #9B7FEF 0%, #48DEEE 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              {calculateDiscount() + '%'}
            </span>
            <div className="text-white">

              <div className="font-montserrat text-[18.96px] font-medium leading-[23.628px]">
                Tyle rabatu <br /> otrzymasz
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}