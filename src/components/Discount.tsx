import checkedIcon from '../assets/checkedIcon2.svg';

export default function Discount() {
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
    </div>
  );
}
