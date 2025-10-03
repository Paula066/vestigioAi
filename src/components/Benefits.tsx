import links from '../assets/links.svg';
import proffesionalArt from '../assets/proffesionalArt.svg';
import maxPublic from '../assets/maxPublic.svg';
import saveMoney from '../assets/saveMoney.svg';
import redutantWork from '../assets/redutantWork.svg';

export default function Benefits() {
  const benefits = [
    {
      icon: links,
      title: 'Linki SEO z wysokiej jakości domen',
      description: 'Ty wybierasz portale, my dbamy o efekty. Nasze portale miesięcznie odwiedza ponad 450 tys. unikalnych użytkowników.'
    },
    {
      icon: proffesionalArt,
      title: 'Profesjonalne artykuły sponsorowane',
      description: 'Tworzone w autorskim procesie z wykorzystaniem AI, zgodne z SEO i przepisami prawa.'
    },
    {
      icon: maxPublic,
      title: 'Publikacje z maksymalną ekspozycją',
      description: 'Na stronach głównych i w social mediach, bez Twojego dodatkowego wysiłku.'
    },
    {
      icon: saveMoney,
      title: 'Oszczędność i swoboda',
      description: 'Elastyczne pakiety prepaid z rabatami, ważne aż 16 miesięcy.'
    },
    {
      icon: redutantWork,
      title: 'Zero zbędnej pracy po Twojej stronie',
      description: 'Automatyzacja, gotowe treści i minimum zaangażowania zespołu.'
    }
  ];

  return (
    <div className="container mb-[166px]">
      <h2 className="text-[44px] font-light leading-[57px] text-white mb-[54px]">
        Co zyskujesz z Vestigio Media?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-y-12 lg:gap-x-6">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex flex-col items-start">
            <div className="mb-6">
              <img src={benefit.icon} alt={benefit.title} className="w-10 h-10 sm:w-12 sm:h-12" />
            </div>
            <h3 className="text-white text-[19.7px] font-medium leading-[24.61px] tracking-[-0.197px] mb-3 max-w-[280px]">
              {benefit.title}
            </h3>
            <p className="text-[#C2C2C2] font-inter text-[16px] font-normal leading-[22px] max-w-[280px]">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
