import React from 'react';

export default function About() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed">
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
              która łączy Twoją markę z realnymi odbiorcami i daje maksymalną widoczność w Google, social mediach i AI.
            </span>
          </h1>
        </div>
        <div className="mt-16 flex justify-center">
            <div className='flex-1'>
            <img 
            src="/founders.png" 
            alt="Founders of Vestigio Media" 
            className="mx-auto max-w-full h-auto rounded-lg shadow-lg"
          />
            </div>
         <div className='flex-1'>
            elo
         </div>
        </div>
      </div>
    </section>
  );
}
