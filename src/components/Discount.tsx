import checkedIcon from '../assets/checkedIcon2.svg';
import React from 'react';

export default function Discount() {
  const [value, setValue] = React.useState(3000);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };
  const benefits = [
    'Start od 5 000 zł netto',
    'Zero presji – publikujesz, kiedy chcesz',
    'Rabaty nawet do 35%',
    'Pełna obsługa i wsparcie'
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-[166px]">
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
      <div className="mt-[170px] flex">
        <h3 className="text-white text-[44px] font-normal leading-[57px] mb-8 mr-[60px]">
          Sprawdź budżet <br /> i rabat
        </h3>
        
          <div className="relative mb-12 flex-1">
            <div className="absolute left-1/2 -top-16 transform -translate-x-1/2">
              <div className="bg-[#212125] text-[#52DCEA] text-[31px] font-normal px-4 py-[6px] rounded-[44px] whitespace-nowrap">
                {value.toLocaleString()} zł
              </div>
            </div>

            <div className="relative p-2 flex-1 bg-[#363645] rounded-[999px]">
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
                  width: 48px;
                  height: 48px;
                  background: #48DEEE;
                  border-radius: 50%;
                  cursor: pointer;
                  box-shadow: 0 0 20px rgba(72, 222, 238, 0.5);
                  position: relative;
                  z-index: 2;
                }
              `}</style>
              <input
                type="range"
                min="1000"
                max="50000"
                value={value}
                onChange={handleChange}
                className="w-full"
                style={{ 
                  '--progress': `${((value - 1000) / (50000 - 1000)) * 100}%`
                } as React.CSSProperties}
              />
            </div>
          </div>

          <div className="flex flex-1 justify-end items-center gap-2">
            <span className="text-[#48DEEE] text-[72px] font-normal">
              {Math.round((value / 50000) * 45)}
            </span>
            <div className="text-white">
              <span className="text-[44px] font-normal">%</span>
              <div className="text-[16px] leading-[20px]">Tyle rabatu otrzymasz</div>
            </div>
          </div>
      </div>
    </div>
  );
}