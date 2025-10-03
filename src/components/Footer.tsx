import logo from '../assets/logo.svg';

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="container border-t border-[#72787E] py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-start  gap-8 md:gap-12">
          {/* Left Column - Company Info */}
          <div className="flex flex-col">
            <p className="text-white text-[20px] font-extralight leading-[28px] tracking-[0.4px]">
              Vestigio AI Sp. z o.o.
            </p>
            <p className="text-white text-[20px] font-extralight leading-[28px] tracking-[0.4px]">
              ul. Warszawska 40/2A
            </p>
            <p className="text-white text-[20px] font-extralight leading-[28px] tracking-[0.4px]">
              40-008 Katowice
            </p>
          </div>

          {/* Middle Column - Contact */}
          <div className="flex flex-col gap-2">
            <div className="flex flex-col">
            <a 
              href="https://www.vestigio.media" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white text-[20px] font-extralight leading-[28px] tracking-[0.4px] hover:text-[#48DEEE] transition-colors"
            >
              www.vestigio.media
            </a>
            <a 
              href="tel:503678757"
              className="text-white text-[20px] font-extralight leading-[28px] tracking-[0.4px] hover:text-[#48DEEE] transition-colors"
            >
              503 678 757
            </a>
            </div>
           
            <a 
              href="https://www.linkedin.com/company/vestigio-media" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative text-white text-[20px] font-extralight leading-[28px] tracking-[0.4px] hover:text-[#48DEEE] transition-colors before:content-[''] before:absolute before:bottom-[-2px] before:left-0 before:w-full before:h-[2px] before:bg-white w-fit"
            >
              Linkedin
            </a>
          </div>

          {/* Right Column - Logo */}
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="Vestigio Media" 
              className="h-8 md:h-10 w-auto"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

