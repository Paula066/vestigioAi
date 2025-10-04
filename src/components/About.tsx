
import effect from '../assets/effect.svg';
import visibility from '../assets/visibility.svg';
import grow from '../assets/grow.svg';
import elastic from '../assets/elastic.svg';

const gradientStyle = {
  background: 'linear-gradient(90deg, #BEC5DE 0%, #8E9FC7 33.18%, #8BAECA 66.83%, #C7E3E3 100%, #BEC5DE 100%)',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundSize: '200% 100%',
  animation: 'gradient 8s linear infinite',
};

export default function About() {
  return (
    <section id="about" className="relative py-8">
      <style>
        {`
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            100% { background-position: 200% 50%; }
          }
        `}
      </style>
      <div className="container px-4 md:px-6">
        <div className="">
          <h1 className="font-['Inter'] text-[24px] sm:text-[28px] md:text-[44px] leading-[32px] sm:leading-[36px] md:leading-[57px] font-normal tracking-[-0.96px] sm:tracking-[-1.12px] md:tracking-[-1.76px]">
            <span style={gradientStyle}>
              Vestigio Media 
            </span>
            {' '}
            to sieć lokalnych portali informacyjnych, która
            {' '}
            <span style={gradientStyle}>
             wspiera Twoją widoczność 
            
            </span>
            <span className="text-white pl-3">
            w Google i AI.
            </span>
            {' '}
         
          </h1>
        </div>

        <div className="mt-8 md:mt-16 flex flex-col md:flex-row justify-center">
          <div className='w-full md:flex-1 relative mb-8 md:mb-0'>
            <div className="relative z-10">
              <img 
                src="/founders.jpg" 
                alt="Founders of Vestigio Media" 
                className="mx-auto max-w-full h-[285px] md:h-auto rounded-lg shadow-lg object-cover"
              />
            </div>     
          </div>
         <div className='w-full md:flex-1 flex flex-col md:ml-[60px] px-4 md:px-0'>
            <div className='flex flex-col md:flex-row gap-6 md:gap-8'>
                <div className="h-fit flex-1 flex-col">
                    <img src={effect} alt="Realni odbiorcy" className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 mb-3 sm:mb-4 md:mb-[15px]" />
                    <h3 className="text-white text-lg sm:text-xl font-medium mb-3 sm:mb-4">Realni odbiorcy, prawdziwe efekty</h3>
                    <p className="text-gray-400 text-sm sm:text-base">docierasz do osób aktywnie poszukujących informacji w Google, social mediach i na portalach lokalnych.</p>
                </div>
            
                <div className="h-fit flex-1 flex-col">
                    <img src={visibility} alt="Widoczność" className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 mb-3 sm:mb-4 md:mb-[15px]" />
                    <h3 className="text-white text-lg sm:text-xl font-medium mb-3 sm:mb-4">Widoczność tam, gdzie decyduje klient</h3>
                    <p className="text-gray-400 text-sm sm:text-base">codzienne newsy, angażujące fanpage i rankingi firm, które budują Twoją wiarygodność.</p>
                </div>
            </div>
            <div className='flex flex-col md:flex-row gap-6 md:gap-8 mt-6 md:mt-8'>
                <div className="h-fit flex-1 flex-col">
                <img src={grow} alt="Wzrost w Google" className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 mb-3 sm:mb-4 md:mb-[15px]" />
                <h3 className="text-white text-lg sm:text-xl font-medium mb-3 sm:mb-4">Wzrost w Google i LLM</h3>
                <p className="text-gray-400 text-sm sm:text-base">mocne linki dofollow, trwałe publikacje i widoczność w rankingach, co wpływa na częstsze cytowania Twojego biznesu w AI i widoczność w Google.</p>
                </div>
            
                <div className="h-fit flex-1 flex-col">
                <img src={elastic} alt="Elastyczność" className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 mb-3 sm:mb-4 md:mb-[15px]" />
                <h3 className="text-white text-lg sm:text-xl font-medium mb-3 sm:mb-4">Elastyczność bez dodatkowych kosztów</h3>
                <p className="text-gray-400 text-sm sm:text-base">działaj lokalnie albo ogólnopolsko w oparciu o jedną, skalowalną infrastrukturę.</p>
                </div>
            </div>
         </div>
        </div>


      </div>
    </section>
  );
}