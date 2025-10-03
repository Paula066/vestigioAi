import React from 'react';
import foundersBg from '../assets/foundersBg.svg';
import gradient from '../assets/gradient.svg';
import effect from '../assets/effect.svg';
import visibility from '../assets/visibility.svg';
import grow from '../assets/grow.svg';
import elastic from '../assets/elastic.svg';

export default function About() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="">
          <h1 style={{
            fontFamily: 'Inter',
            fontSize: '44px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '57px',
            letterSpacing: '-1.76px'
          }}>
            <span style={{
              background: 'linear-gradient(90deg, #BEC5DE 0%, #8E9FC7 33.18%, #8BAECA 66.83%, #C7E3E3 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Vestigio Media to
            </span>
            {' '}
            sieć lokalnych portali i rankingów firm,
            {' '}
            <span style={{
              background: 'linear-gradient(90deg, #BEC5DE 0%, #8E9FC7 33.18%, #8BAECA 66.83%, #C7E3E3 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              która łączy Twoją markę z realnymi odbiorcami i daje 
            </span>
            <span className="text-white pl-3">
              maksymalną widoczność w
            </span>
            {' '}
            <span style={{
              background: 'linear-gradient(90deg, #BEC5DE 0%, #8E9FC7 33.18%, #8BAECA 66.83%, #C7E3E3 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Google, social mediach i AI.
            </span>
          </h1>
        </div>
        <div className="mt-16 flex justify-center">
          <div className='flex-1 relative'>
            <div className="relative z-10">
              <img 
                src="/founders.png" 
                alt="Founders of Vestigio Media" 
                className="mx-auto max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="absolute inset-0 z-0" style={{ transform: 'translateY(20%)' }}>
              <img 
                src={foundersBg} 
                alt="" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute" style={{ 
                top: '232px',
                left: '19px',
                width: '100%',
                height: 'auto'
              }}>
              <img 
                src={gradient} 
                alt="" 
                className="w-full h-auto"
              />
            </div>
          </div>
         <div className='flex-1 flex flex-col ml-[60px]'>
            <div className='flex'>
                <div className="h-fit flex-1 flex-col">
                    <img src={effect} alt="Realni odbiorcy" className="w-10 h-10 mb-[15px]" />
                    <h3 className="text-white text-xl font-medium mb-4">Realni odbiorcy, <br /> prawdziwe efekty</h3>
                    <p className="text-gray-400">docierasz do osób aktywnie poszukujących informacji <br /> w Google, social mediach i na portalach lokalnych.</p>
                </div>
            
                <div className="h-fit flex-1 flex-col ml-[32px]">
                    <img src={visibility} alt="Widoczność" className="w-10 h-10 mb-[15px]" />
                    <h3 className="text-white text-xl font-medium mb-4">Widoczność tam, <br /> gdzie decyduje klient</h3>
                    <p className="text-gray-400">codzienne newsy, angażujące fanpage i rankingi firm, które budują Twoją wiarygodność.</p>
                </div>
            </div>
            <div className='flex mt-6'>
                <div className="h-fit flex-1 flex-col">
                <img src={grow} alt="Wzrost w Google" className="w-10 h-10 mb-[15px]" />
                <h3 className="text-white text-xl font-medium mb-4">Wzrost w Google <br /> i LLM</h3>
                <p className="text-gray-400">mocne linki dofollow, <br /> trwałe publikacje i widoczność w rankingach, co wpływa na częstsze cytowania Twojego biznesu w ChatGPT, Claude, Google.</p>
                </div>
            
                <div className="h-fit flex-1 flex-col ml-[32px]">
                <img src={elastic} alt="Elastyczność" className="w-10 h-10 mb-[15px]" />
                <h3 className="text-white text-xl font-medium mb-4">Elastyczność bez <br /> dodatkowych kosztów</h3>
                <p className="text-gray-400">działaj lokalnie albo ogólnopolsko w oparciu o jedną, skalowalną infrastrukturę.</p>
                </div>
            </div>
         </div>
        </div>
      </div>
    </section>
  );
}