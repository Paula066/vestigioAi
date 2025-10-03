
import foundersBg from '../assets/foundersBg.svg';
import gradient from '../assets/gradient.svg';
import effect from '../assets/effect.svg';
import visibility from '../assets/visibility.svg';
import grow from '../assets/grow.svg';
import elastic from '../assets/elastic.svg';
import graphic1 from '../assets/graphic1.svg';
import graphic2 from '../assets/graphic2.svg';

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
    <section className="relative py-8 md:py-20">
      <style>
        {`
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            100% { background-position: 200% 50%; }
          }
        `}
      </style>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="">
          <h1 className="font-['Inter'] text-[28px] md:text-[44px] leading-[36px] md:leading-[57px] font-normal tracking-[-1.12px] md:tracking-[-1.76px]">
            <span style={gradientStyle}>
              Vestigio Media to
            </span>
            {' '}
            sieć lokalnych portali i rankingów firm,
            {' '}
            <span style={gradientStyle}>
              która łączy Twoją markę z realnymi odbiorcami i daje 
            </span>
            <span className="text-white pl-3">
              maksymalną widoczność w
            </span>
            {' '}
            <span style={gradientStyle}>
              Google, social mediach i AI.
            </span>
          </h1>
        </div>

        <div className="mt-8 md:mt-16 flex flex-col md:flex-row justify-center">
          <div className='w-full md:flex-1 relative mb-8 md:mb-0'>
            <div className="relative z-10">
              <img 
                src="/founders.png" 
                alt="Founders of Vestigio Media" 
                className="mx-auto max-w-full h-[285px] md:h-auto rounded-lg shadow-lg object-cover"
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
         <div className='w-full md:flex-1 flex flex-col md:ml-[60px] px-4 md:px-0'>
            <div className='flex flex-col md:flex-row gap-6 md:gap-8'>
                <div className="h-fit flex-1 flex-col">
                    <img src={effect} alt="Realni odbiorcy" className="w-10 h-10 mb-[15px]" />
                    <h3 className="text-white text-xl font-medium mb-4">Realni odbiorcy, prawdziwe efekty</h3>
                    <p className="text-gray-400">docierasz do osób aktywnie poszukujących informacji w Google, social mediach i na portalach lokalnych.</p>
                </div>
            
                <div className="h-fit flex-1 flex-col">
                    <img src={visibility} alt="Widoczność" className="w-10 h-10 mb-[15px]" />
                    <h3 className="text-white text-xl font-medium mb-4">Widoczność tam, gdzie decyduje klient</h3>
                    <p className="text-gray-400">codzienne newsy, angażujące fanpage i rankingi firm, które budują Twoją wiarygodność.</p>
                </div>
            </div>
            <div className='flex flex-col md:flex-row gap-6 md:gap-8 mt-6 md:mt-8'>
                <div className="h-fit flex-1 flex-col">
                <img src={grow} alt="Wzrost w Google" className="w-10 h-10 mb-[15px]" />
                <h3 className="text-white text-xl font-medium mb-4">Wzrost w Google i LLM</h3>
                <p className="text-gray-400">mocne linki dofollow, trwałe publikacje i widoczność w rankingach, co wpływa na częstsze cytowania Twojego biznesu w ChatGPT, Claude, Google.</p>
                </div>
            
                <div className="h-fit flex-1 flex-col">
                <img src={elastic} alt="Elastyczność" className="w-10 h-10 mb-[15px]" />
                <h3 className="text-white text-xl font-medium mb-4">Elastyczność bez dodatkowych kosztów</h3>
                <p className="text-gray-400">działaj lokalnie albo ogólnopolsko w oparciu o jedną, skalowalną infrastrukturę.</p>
                </div>
            </div>
         </div>
        </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-12 md:mt-16">
           <div className="flex flex-row items-center rounded-[12px] overflow-hidden" style={{
            backgroundImage: 'url("/blue-gradient.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '254px'
          }}>
            <div className='pl-2 py-2 md:px-8 md:py-6'>
                 <div className="text-[18px] leading-[28px] md:text-[32px] md:text-[52px] font-medium md:leading-[32px] md:leading-[60px] font-light mb-2 md:mb-2 text-black">365</div>
                 <div className="text-[14px] leading-[18px] md:text-[16px] md:text-[18px] font-medium md:leading-[20px] mb-[12px] md:mb-[18px] text-black">lokalnych portali w całej Polsce, w których pojawi się Twoja firma.</div>
                 <div className="text-[12px] leading-[16px] md:text-[14px] md:text-base font-light  md:leading-[20px] text-black">Portale obejmują swoim zasięgiem <br /> aż 365 miejscowości.</div>
            </div>

                <img src={graphic1} alt="Bg" className="w-full md:w-auto h-[180px] md:h-auto object-cover" />

          </div>
          <div className="flex flex-row items-center rounded-[12px] overflow-hidden" style={{
            backgroundImage: 'url("/pink-gradient.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '254px'
          }}>
            <div className='pl-2 py-2 md:px-8 md:py-6'>
                 <div className="text-[18px] leading-[28px] md:text-[32px] md:text-[52px] font-medium md:leading-[32px] md:leading-[60px] font-light mb-2 md:mb-2 text-black">87 174</div>
                 <div className="text-[14px] leading-[18px] md:text-[16px] md:text-[18px] font-medium md:leading-[20px] mb-[12px] md:mb-[18px] text-black">lokalnych rankingów firm w całej Polsce, a Ty możesz być wśród nich.</div>
                 <div className="text-[12px] leading-[16px] md:text-[14px] md:text-base font-light  md:leading-[20px] text-black">Rankingi to doskonałe miejsce na zaprezentowanie swojej firmy.</div>
            </div>

                <img src={graphic2} alt="Bg" className="w-full md:w-auto h-[180px] md:h-auto object-cover" />

          </div>
        </div>
      </div>
    </section>
  );
}