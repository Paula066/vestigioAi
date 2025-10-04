import React, { useState } from 'react';
import questionIcon from '../assets/question.svg';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Jak długo ważne są środki z pakietu prepaid?",
    answer: "Środki z pakietu prepaid są ważne przez 16 miesięcy od momentu zakupu. To daje Ci komfort planowania działań marketingowych w dłuższej perspektywie, bez presji czasowej."
  },
  {
    question: "Kto przygotowuje artykuły sponsorowane?",
    answer: "Masz wybór:\n\n• możesz dostarczyć własny artykuł zgodny z wytycznymi technicznymi.\n\n• możesz zlecić jego przygotowanie — treść tworzymy w autorskim procesie z wykorzystaniem AI, uwzględniając słowa kluczowe i intencje informacyjne. Gotowy materiał jest kompletny i gotowy do publikacji."
  },
  {
    question: "Kto dostarcza materiały do wizytówek firm?",
    answer: "Wszystkie treści, dane kontaktowe oraz grafiki do wizytówek dostarcza klient. Dzięki temu masz pełną kontrolę nad tym, jak prezentuje się Twoja firma w lokalnych rankingach."
  },
  {
    question: "Jak wygląda realizacja zamówień?",
    answer: "Zamówienia realizowane są w formacie współpracy mailowej."
  },
  {
    question: "Na jakich warunkach działa współpraca?",
    answer: "Współpraca odbywa się w klasycznym modelu składania zamówienia lub modelu prepaid – budżet opłacany z góry. Dzięki temu otrzymujesz gwarancję stałej zniżki na wszystkie działania, zgodnie z aktualnym cennikiem rynkowym. Brak ukrytych kosztów, pełna przejrzystość."
  },

];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-black py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-medium leading-[36px] sm:leading-[42px] md:leading-[57px] text-white mb-6 sm:mb-8 md:mb-12">
          Najczęściej zadawane pytania
        </h2>
        
        <div className="space-y-0">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className="border-b border-white/[0.12]"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full flex items-center justify-between py-3 md:py-4 text-left opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
              >
                <span className="text-white text-[16px] sm:text-[18px] md:text-[20px] font-light pr-4">
                  {item.question}
                </span>
                <img 
                  src={questionIcon} 
                  alt="toggle" 
                  className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div 
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-white text-[13px] sm:text-[14px] md:text-[16px] font-light leading-[19px] sm:leading-[20px] md:leading-[24px] pb-4 sm:pb-6 md:pb-8 whitespace-pre-line">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

