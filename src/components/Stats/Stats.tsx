import graphic1 from '../../assets/graphic1.svg';
import graphic2 from '../../assets/graphic2.svg';

export default function Stats() {
  return (
    <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="flex flex-row items-center rounded-[12px] overflow-hidden md:h-[254px]" style={{
            backgroundImage: 'url("/blue-gradient.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',

          }}>
            <div className='py-4 pl-2 md:pl-8 md:py-2 md:px-8 md:py-6'>
              <div className="text-[32px] leading-[28px] md:text-[32px] md:text-[52px] font-medium md:leading-[32px] md:leading-[60px] font-light mb-2 md:mb-2 text-black">365</div>
              <div className="text-[14px] leading-[18px] md:text-[16px] md:text-[18px] font-medium md:leading-[20px] mb-[12px] md:mb-[18px] text-black">lokalnych portali w całej Polsce, w których pojawi się Twoja firma.</div>
              <div className="text-[12px] leading-[16px] md:text-[14px] md:text-base font-light md:leading-[20px] text-black">Portale obejmują swoim zasięgiem <br /> aż 340 miejscowości.</div>
            </div>

            <img src={graphic1} alt="Bg" className="w-full hidden md:block md:w-auto h-[180px] md:h-auto object-cover" />
          </div>

          <div className="flex flex-row items-center rounded-[12px] overflow-hidden md:h-[254px]" style={{
            backgroundImage: 'url("/pink-gradient.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',

          }}>
            <div className='py-4 pl-2 md:pl-8 md:py-2 md:px-8 md:py-6'>
              <div className="text-[32px] leading-[28px] md:text-[32px] md:text-[52px] font-medium md:leading-[32px] md:leading-[60px] font-light mb-2 md:mb-2 text-black">87 174</div>
              <div className="text-[14px] leading-[18px] md:text-[16px] md:text-[18px] font-medium md:leading-[20px] mb-[12px] md:mb-[18px] text-black">lokalnych rankingów firm w całej Polsce, a Ty możesz być wśród nich.</div>
              <div className="text-[12px] leading-[16px] md:text-[14px] md:text-base font-light md:leading-[20px] text-black">Rankingi to doskonałe miejsce na zaprezentowanie swojej firmy.</div>
            </div>

            <img src={graphic2} alt="Bg" className="w-full hidden md:block md:w-auto h-[180px] md:h-auto object-cover" />
          </div>
        </div>
      </div>
  );
}
