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
  min: 0,
  max: 50000,
  step: 100,
  initialValue: 0
} as const;

export default function Discount() {
  const [value, setValue] = React.useState<number>(SLIDER_CONFIG.initialValue);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };

  const calculateProgress = () => {
    return ((value - SLIDER_CONFIG.min) / (SLIDER_CONFIG.max - SLIDER_CONFIG.min)) * 100;
  };

  const calculateBubblePosition = () => {
    const progress = calculateProgress();
    // Ograniczamy pozycję dymku, aby nie wychodził poza kontener
    // Min 8% i max 92% zapobiega wychodzeniu poza brzegi
    return Math.max(8, Math.min(92, progress));
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
    <div className="container px-4 md:px-6 mb-12 md:mb-[100px]">
      <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-24">
        {/* Left Column */}
        <div className="flex-1">
          <h2 className="text-[32px] md:text-[44px] font-light leading-[42px] md:leading-[57px] tracking-[-1.76px] text-white mb-4 md:mb-6">
            Zdobądź swój rabat
          </h2>
          
          <div className="mb-6 md:mb-[36px]">
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
              <div className="text-[#9B7FEF] text-[32px] md:text-[44px] font-normal leading-[40px] md:leading-[60px]">rabaty od</div>
              <div className="bg-gradient-to-r from-[#9B7FEF] to-[#48DEEE] bg-clip-text text-transparent text-[48px] md:text-[72px] font-normal leading-[40px] md:leading-[60px]">
                1500 <span className="text-[32px] md:text-[44px]">zł</span>
              </div>
            </div>
            <div className="text-white text-[14px] md:text-[16px] font-normal leading-[18px] md:leading-[20px] mt-2">
              Im więcej kupisz tym mniej wydasz!
            </div>
          </div>

          <div className="mb-6 md:mb-8">
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
              <div className="text-[#9B7FEF] text-[32px] md:text-[44px] font-normal leading-[40px] md:leading-[60px]">do</div>
              <div className="bg-gradient-to-r from-[#9B7FEF] to-[#48DEEE] bg-clip-text text-transparent text-[48px] md:text-[72px] font-normal leading-[40px] md:leading-[60px]">
                40<span className="text-[32px] md:text-[44px]">% rabatu</span>
              </div>
            </div>
            <div className="text-white text-[14px] md:text-[16px] font-normal leading-[18px] md:leading-[20px] mt-2">
              Więcej się opłaca!
            </div>
          </div>

          {/* Slider Section - Moved up on mobile */}
          <div className="block lg:hidden mt-8">
            <div className="flex flex-col items-center pt-4 pb-6 px-4 rounded-2xl border border-[#72787E] bg-black">
              <h3 className="text-white text-[22px] font-light pb-[80px] leading-[26px] text-center">
                Sprawdź budżet <br /> i rabat
              </h3>
              
              <div className="relative flex-1 w-full mb-6">
                <div className="relative p-2 py-1 flex-1 bg-[#363645] rounded-[999px] h-[36px] md:h-[29px] max-w-full">
                  <div className="slider-container">
                    <input
                      type="range"
                      min={SLIDER_CONFIG.min}
                      max={SLIDER_CONFIG.max}
                      step={SLIDER_CONFIG.step}
                      value={value}
                      onChange={handleChange}
                      className="w-full slider-input"
                      style={{ 
                        '--progress': `${calculateProgress()}%`,
                        '--thumb-position': `${calculateProgress()}`
                      } as React.CSSProperties}
                    />
                    <output 
                      className="slider-bubble"
                      style={{ 
                        left: `calc(${calculateProgress()}% + (${12 - calculateProgress() * 0.24}px))`
                      } as React.CSSProperties}
                    >
                      <div className="relative">
                        <div className="bg-[#212125] text-[#52DCEA] text-[20px] font-normal px-2 py-1 rounded-[24px] whitespace-nowrap">
                          {value.toLocaleString()} zł
                        </div>
                        <img 
                          src={downIcon} 
                          alt="down" 
                          className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-3"
                        />
                      </div>
                    </output>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center gap-1 text-center">
                <span 
                  className="text-[36px] font-normal leading-[1]"
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
                  <div className="font-montserrat ml-3 text-[14px] font-medium leading-[18px]">
                    Tyle rabatu <br /> otrzymasz
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1">
          <h2 className="text-[32px] md:text-[44px] font-light leading-[42px] md:leading-[57px] tracking-[-1.76px] text-white mb-4 md:mb-6">
            Skorzystaj z opcji prepaid
          </h2>
          
          <p className="text-[#C2C2C2] text-[14px] md:text-[16px] font-normal leading-[20px] md:leading-[22px] mb-8 md:mb-12">
            Zarezerwuj większy budżet z góry i korzystaj z niego wtedy, kiedy chcesz.
            Im większy pakiet, tym wyższy rabat – a środki są ważne aż 16 miesięcy.
          </p>

          <div className="space-y-3 md:space-y-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 md:gap-3">
                <img src={checkedIcon} alt="check" className="w-3 h-3 md:w-4 md:h-4" />
                <div className="text-[14px] md:text-[16px] font-semibold leading-[20px] md:leading-[22px] bg-gradient-to-r from-[#9FCBA2] to-[#FAFADB] bg-clip-text text-transparent">{benefit}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slider Section - Desktop */}
      <div className="hidden lg:flex mt-[96px] flex-row items-center pt-4 pb-6 md:py-[51px] px-4 md:px-[48px] rounded-2xl md:rounded-[24px] border border-[#72787E] bg-black">
        <h3 className="text-white text-[36px] font-light leading-[40px] mb-0 mr-[60px] text-center">
          Sprawdź budżet <br /> i rabat
        </h3>
        
        <div className="relative flex-1 w-full mr-[48px] mb-0">
          <div className="relative p-2 py-1 flex-1 bg-[#363645] rounded-[999px] h-[29px] max-w-[370px]">
            <div className="slider-container">
              <input
                type="range"
                min={SLIDER_CONFIG.min}
                max={SLIDER_CONFIG.max}
                step={SLIDER_CONFIG.step}
                value={value}
                onChange={handleChange}
                className="w-full slider-input"
                style={{ 
                  '--progress': `${calculateProgress()}%`,
                  '--thumb-position': `${calculateProgress()}`
                } as React.CSSProperties}
              />
              <output 
                className="slider-bubble"
                style={{ 
                  left: `calc(${calculateProgress()}% + (${12 - calculateProgress() * 0.24}px))`
                } as React.CSSProperties}
              >
                <div className="relative">
                  <div className="bg-[#212125] text-[#52DCEA] text-[31px] font-normal px-3 py-[3px] rounded-[44px] whitespace-nowrap">
                    {value.toLocaleString()} zł
                  </div>
                  <img 
                    src={downIcon} 
                    alt="down" 
                    className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-auto"
                  />
                </div>
              </output>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center gap-2 text-center">
          <span 
            className="text-[72px] font-normal leading-[1]"
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
      <style>{`
        .slider-container {
          position: relative;
        }

        .slider-bubble {
          position: absolute;
          left: calc(var(--thumb-position) * 1%);
          top: -65px;
          transform: translateX(-50%);
          pointer-events: none;
          z-index: 10;
          will-change: left;
        }

        @media (min-width: 768px) {
          .slider-bubble {
            top: -72px;
          }
        }

        input[type="range"] {
          -webkit-appearance: none;
          width: 100%;
          height: 8px;
          background: rgba(192, 193, 224, 0.3);
          border-radius: 6px;
          outline: none;
          position: relative;
          padding: 0;
          margin: 0;
        }

        @media (min-width: 640px) {
          input[type="range"] {
            height: 10px;
            border-radius: 7px;
          }
        }

        @media (min-width: 768px) {
          input[type="range"] {
            height: 16px;
            border-radius: 8px;
          }
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
          width: 24px;
          height: 24px;
          background: #48DEEE;
          border: 4px solid #AAF7FE;
          border-radius: 50%;
          cursor: pointer;
          position: relative;
          z-index: 2;
          box-shadow: 0 0 15px rgba(72, 222, 238, 0.3);
        }

        @media (min-width: 640px) {
          input[type="range"]::-webkit-slider-thumb {
            width: 28px;
            height: 28px;
            border-width: 5px;
          }
        }

        @media (min-width: 768px) {
          input[type="range"]::-webkit-slider-thumb {
            width: 34px;
            height: 34px;
            border-width: 7px;
          }
        }

        input[type="range"]::-moz-range-thumb {
          width: 20px;
          height: 20px;
          background: #48DEEE;
          border: 4px solid #AAF7FE;
          border-radius: 50%;
          cursor: pointer;
          position: relative;
          z-index: 2;
          box-shadow: 0 0 15px rgba(72, 222, 238, 0.3);
        }

        @media (min-width: 640px) {
          input[type="range"]::-moz-range-thumb {
            width: 24px;
            height: 24px;
            border-width: 5px;
          }
        }

        @media (min-width: 768px) {
          input[type="range"]::-moz-range-thumb {
            width: 31px;
            height: 31px;
            border-width: 7px;
          }
        }
      `}</style>
    </div>
  );
}