import links from '../assets/links.svg';
import proffesionalArt from '../assets/proffesionalArt.svg';
import maxPublic from '../assets/maxPublic.svg';
import saveMoney from '../assets/saveMoney.svg';
import redutantWork from '../assets/redutantWork.svg';

export default function Benefits() {
  return (
    <div className="container px-4 md:px-6 mb-[60px] md:mb-[166px]">
      <h2 className="text-[32px] md:text-[44px] font-light leading-[42px] md:leading-[57px] text-white mb-8 md:mb-[54px]">
        Co zyskujesz z Vestigio Media?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-y-12 lg:gap-x-6">
        <div className="flex flex-col items-start">
          <div className="mb-6">
            <img src={links} alt="Linki SEO" className="w-10 h-10 sm:w-12 sm:h-12" />
          </div>
          <h3 className="text-white text-[16px] sm:text-[18px] md:text-[19.7px] font-medium leading-[20px] sm:leading-[22px] md:leading-[24.61px] tracking-[-0.197px] mb-2 sm:mb-3 max-w-[280px]">
            Linki SEO z wysokiej jakości domen
          </h3>
          <p className="text-[#C2C2C2] font-inter text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-[20px] sm:leading-[21px] md:leading-[22px] max-w-[280px]">
            Ty wybierasz portale, my dbamy o efekty. Nasze portale miesięcznie odwiedza ponad <span className="!font-bold !text-white">500 tys.</span> unikalnych użytkowników.
          </p>
        </div>

        <div className="flex flex-col items-start">
          <div className="mb-6">
            <img src={proffesionalArt} alt="Profesjonalne artykuły" className="w-10 h-10 sm:w-12 sm:h-12" />
          </div>
          <h3 className="text-white text-[16px] sm:text-[18px] md:text-[19.7px] font-medium leading-[20px] sm:leading-[22px] md:leading-[24.61px] tracking-[-0.197px] mb-2 sm:mb-3 max-w-[280px]">
            Profesjonalne artykuły sponsorowane
          </h3>
          <p className="text-[#C2C2C2] font-inter text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-[20px] sm:leading-[21px] md:leading-[22px] max-w-[280px]">
            Tworzone w autorskim procesie z wykorzystaniem AI zgodnie z <span className="font-bold text-white">najlepszymi praktykami </span>SEO.
          </p>
        </div>

        <div className="flex flex-col items-start">
          <div className="mb-6">
            <img src={maxPublic} alt="Maksymalna ekspozycja" className="w-10 h-10 sm:w-12 sm:h-12" />
          </div>
          <h3 className="text-white text-[16px] sm:text-[18px] md:text-[19.7px] font-medium leading-[20px] sm:leading-[22px] md:leading-[24.61px] tracking-[-0.197px] mb-2 sm:mb-3 max-w-[280px]">
            Publikacje z maksymalną ekspozycją
          </h3>
          <p className="text-[#C2C2C2] font-inter text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-[20px] sm:leading-[21px] md:leading-[22px] max-w-[280px]">
          Na stronach głównych, social mediach i zbliżonych tematycznie artykułach.
          </p>
        </div>

        <div className="flex flex-col items-start">
          <div className="mb-6">
            <img src={saveMoney} alt="Oszczędność" className="w-10 h-10 sm:w-12 sm:h-12" />
          </div>
          <h3 className="text-white text-[16px] sm:text-[18px] md:text-[19.7px] font-medium leading-[20px] sm:leading-[22px] md:leading-[24.61px] tracking-[-0.197px] mb-2 sm:mb-3 max-w-[280px]">
            Oszczędność i swoboda
          </h3>
          <p className="text-[#C2C2C2] font-inter text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-[20px] sm:leading-[21px] md:leading-[22px] max-w-[280px]">
            Elastyczne pakiety prepaid z rabatami, ważne aż 16 miesięcy.
          </p>
        </div>

        <div className="flex flex-col items-start">
          <div className="mb-6">
            <img src={redutantWork} alt="Zero zbędnej pracy" className="w-10 h-10 sm:w-12 sm:h-12" />
          </div>
          <h3 className="text-white text-[16px] sm:text-[18px] md:text-[19.7px] font-medium leading-[20px] sm:leading-[22px] md:leading-[24.61px] tracking-[-0.197px] mb-2 sm:mb-3 max-w-[280px]">
            Zero zbędnej pracy po Twojej stronie
          </h3>
          <p className="text-[#C2C2C2] font-inter text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-[20px] sm:leading-[21px] md:leading-[22px] max-w-[280px]">
            Automatyzacja, gotowe treści i <span className="font-bold text-white">minimum zaangażowania </span>zespołu.
          </p>
        </div>
      </div>
    </div>
  );
}
