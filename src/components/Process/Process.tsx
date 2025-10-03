export default function Process() {
  return (
    <div className="container mb-[166px]">
        <h2 className="text-[44px] font-light leading-[57px] tracking-[-1.76px] text-white  mb-[54px]">
          Jak wygląda proces publikacji?
        </h2>
        
        <div className="flex flex-col md:flex-row  justify-between relative">
          
          {/* Punkt 1 */}
          <div className="flex relative flex-row md:flex-col items-start text-left md:text-center mb-8 md:mb-0 md:flex-1">
            <div className="flex items-center justify-center w-[60px] h-[60px] rounded-full border-[0.8px] border-gray-white bg-black text-white text-[16px] font-light mb-0 md:mb-6 mr-4 md:mr-0 shrink-0 before:absolute before:left-[60px] before:top-[30px] before:w-[calc(100%-30px)] before:h-[1px] before:bg-white before:hidden md:before:block">
              1
            </div>
            <div>
              <h3 className="text-white text-[20px] leading-[24px] text-left font-medium mb-3">Wybierasz formę promocji</h3>
              <p className="text-[#C2C2C2] text-left leading-[22px] font-light text-base max-w-[280px]">Artykuł sponsorowany <br /> lub wizytówka firmy na wybranym portalu.</p>
            </div>
          </div>

          {/* Punkt 2 */}
          <div className="flex relative flex-row md:flex-col items-start text-left md:text-center mb-8 md:mb-0 md:flex-1">
          <div className="flex items-center justify-center w-[60px] h-[60px] rounded-full border-[0.8px] border-gray-white bg-black text-white text-[16px] font-light mb-0 md:mb-6 mr-4 md:mr-0 shrink-0 before:absolute before:left-[60px] before:top-[30px] before:w-[calc(100%-30px)] before:h-[1px] before:bg-white before:hidden md:before:block">
              2
            </div>
            <div>
              <h3 className="text-white text-[20px] leading-[24px] text-left font-medium mb-3">Treść? Ty decydujesz</h3>
              <p className="text-[#C2C2C2] text-left leading-[22px] font-light text-base max-w-[280px]">Dostarczasz własny materiał lub zlecasz to nam – tworzymy treści w oparciu o AI i SEO.</p>
            </div>
          </div>

          {/* Punkt 3 */}
          <div className="flex relative flex-row md:flex-col items-start text-left md:text-center mb-8 md:mb-0 md:flex-1">
          <div className="flex items-center justify-center w-[60px] h-[60px] rounded-full border-[0.8px] border-gray-white bg-black text-white text-[16px] font-light mb-0 md:mb-6 mr-4 md:mr-0 shrink-0 before:absolute before:left-[60px] before:top-[30px] before:w-[calc(100%-60px)] before:h-[1px] before:bg-white before:hidden md:before:block">
              3
            </div>
            <div>
              <h3 className="text-white text-[20px] leading-[24px] text-left font-medium mb-3">Weryfikacja i akceptacja</h3>
              <p className="text-[#C2C2C2] text-left leading-[22px] font-light text-base max-w-[280px]">Sprawdzamy zgodność z regulaminem i jakość. W przypadku tekstu od nas – akceptujesz przed publikacją.</p>
            </div>
          </div>

          {/* Punkt 4 */}
          <div className="flex flex-row md:flex-col items-start text-left md:text-center md:flex-1">
            <div className="flex items-center justify-center w-[60px] h-[60px] rounded-full border-[0.8px] border-gray-white bg-black text-white text-[16px] font-light mb-0 md:mb-6 mr-4 md:mr-0 shrink-0">
              4
            </div>
            <div>
              <h3 className="text-white text-[20px] leading-[24px] text-left font-medium mb-3">Publikacja i wsparcie</h3>
              <p className="text-[#C2C2C2] text-left leading-[22px] font-light text-base max-w-[280px]">Artykuł trafia na portal, fanpage serwisu i stronę główną (min. 7 dni). Zawiera linki dofollow.</p>
            </div>
          </div>
        </div>
      </div>
  );
}
