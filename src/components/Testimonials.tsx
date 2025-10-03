import React from 'react';
import quotesIcon from '../assets/quotes.svg';

interface TestimonialProps {
  text: string;
  author: string;
  position: string;
  img: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ text, author, position, img }) => (
  <div className="flex flex-col bg-black/30 rounded-2xl backdrop-blur-sm">
    <img src={quotesIcon} alt="quote" className="w-6 h-6 md:w-8 md:h-8 mb-3 md:mb-4" />
    <p className="text-white text-[14px] sm:text-[15px] md:text-[18px] font-light leading-[20px] sm:leading-[22px] md:leading-[26px] mb-4 sm:mb-6 md:mb-8">{text}</p>
    <div className="flex items-center gap-3 md:gap-4">
      <div className="w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] md:w-[47px] md:h-[47px] rounded-full relative">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#EF7FA3] via-[#F3B4A0] to-[#48DEEE] p-[2px]">
          <div className="w-full h-full rounded-full !bg-black">
            <img src={`/${img === 'people1.svg' ? 'p1' : img === 'people2.svg' ? 'p2' : 'p3'}.png`} alt={author} className="w-full h-full rounded-full object-cover" />
          </div>
        </div>
      </div>
      <div>
        <div className="text-white text-[14px] sm:text-[15px] md:text-[18px] font-light">{author}</div>
        <div className="text-[#72787E] text-[13px] sm:text-[14px] md:text-[16px]">{position}</div>
      </div>
    </div>
  </div>
);

export default function Testimonials() {
  const testimonials = [
    {
      text: "Vestigio Media to połączenie technologii AI, kompetencji SEO i ciekawych pomysłów na budowanie wartości w portalach informacyjnych. Dodając do tego odpowiednią obsługę mamy przepis na idealnego partnera mediowego. Polecam!",
      author: "Michał Łyko",
      position: "Linko.io",
      img: 'people2.svg'
    },
    {
      text: "Vestigio Media dostarcza serwisy o świetnych parametrach, bazujące na nowoczesnej technologii, która robi różnicę. Publikacje są realizowane błyskawicznie, a część portali nie jest dostępna publicznie, co daje nam ogromną przewagę w działaniach off-site.",
      author: "Michał Rochwerger",
      position: "CEO & Founder Trust Luna",
      img: 'people1.svg'
    },
    {
      text: "Współpraca z Vestigio Media to synonim profesjonalizmu. Rzetelność, terminowość i świetna komunikacja sprawiają, że są godnym zaufania partnerem. Jako innowatorzy na rynku, z odwagą wyznaczają nowe standardy, skutecznie łącząc technologię i dane.",
      author: "Bartosz Kastelik",
      position: "Whitepress",

      img: 'people3.svg'
    }
  ];

  return (
    <section className="md:py-12 md:pb-24 bg-black">
      <div className="container px-4 md:px-6">
        <h2 className="text-white text-[32px] md:text-[44px] font-light leading-[42px] md:leading-[57px] mb-8 md:mb-[48px]  md:text-left">
          Co mówią o nas nasi partnerzy
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
