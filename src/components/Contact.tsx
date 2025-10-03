import React, { useState } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  position: string;
  phone: string;
  email: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    position: '',
    phone: '',
    email: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <section className=" bg-black md:py-12 md:py-24">
      <div className="container px-4 md:px-6">
      <h2 className="text-[32px] md:text-[44px] font-light leading-[42px] md:leading-[57px] text-white mb-8  md:text-left">
              Odbierz darmową ofertę
            </h2>
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-24">
          
          {/* Left Column - Form */}
          <div className="flex-1 flex justify-center md:justify-start">
           
            <form onSubmit={handleSubmit} className="space-y-4 border border-white/[0.24] rounded-[24px] px-6 py-8 md:p-[48px] md:pt-[40px] w-full max-w-[655px]">
              <div className="text-white text-[15px] sm:text-[16px] md:text-[18px] font-light mb-4 sm:mb-6">
                Twoje dane
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Imię"
                  className="bg-transparent border border-[#333333] rounded-full px-4 sm:px-6 h-[36px] sm:h-[38px] md:h-[40px] text-[14px] sm:text-[15px] md:text-[16px] text-white placeholder-[#72787E] focus:outline-none transition-all input-gradient-focus"
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Nazwisko"
                  className="bg-transparent border border-[#333333] rounded-full px-4 sm:px-6 h-[36px] sm:h-[38px] md:h-[40px] text-[14px] sm:text-[15px] md:text-[16px] text-white placeholder-[#72787E] focus:outline-none transition-all input-gradient-focus"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  placeholder="Stanowisko"
                  className="bg-transparent border border-[#333333] rounded-full px-4 sm:px-6 h-[36px] sm:h-[38px] md:h-[40px] text-[14px] sm:text-[15px] md:text-[16px] text-white placeholder-[#72787E] focus:outline-none transition-all input-gradient-focus"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Numer telefonu (opcjonalny)"
                  className="bg-transparent border border-[#333333] rounded-full px-4 sm:px-6 h-[36px] sm:h-[38px] md:h-[40px] text-[14px] sm:text-[15px] md:text-[16px] text-white placeholder-[#72787E] focus:outline-none transition-all input-gradient-focus"
                />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Mail"
                className="w-full bg-transparent border border-[#333333] rounded-full px-6 h-[40px] text-[16px] text-white placeholder-[#72787E] focus:outline-none transition-all input-gradient-focus mb-4"
              />
              <button
                type="submit"
                className="w-full mt-6 py-3 md:py-4 px-6 md:px-8 rounded-full text-black text-[15px] md:text-base font-medium hover:opacity-90 transition-opacity button-animate cursor-pointer"
              >
                Odbieram darmową ofertę
              </button>
            </form>
          </div>

          {/* Right Column - Contact Info */}
          <div className="flex-1 flex justify-center md:justify-start">
            <div className="flex flex-col items-center md:items-start w-full md:w-auto">
              <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-6 md:gap-10 mb-1">
                <div className="flex flex-col gap-3 items-center md:items-start text-center md:text-left">
                <div className="flex flex-col">
                  <h3 className="text-white text-[18px] sm:text-[20px] md:text-[23.6px] font-normal leading-[24px] sm:leading-[26px] md:leading-[29.53px] mb-2">
                    Sara Gamrot
                  </h3>
                  <p className="text-[#C2C2C2] text-[14px] sm:text-[15px] md:text-[16px] font-extralight leading-[20px] sm:leading-[21px] md:leading-[22px] mb-2 sm:mb-3">
                    Project Manager
                  </p>
                </div>
                <div className="mb-[30px]">
                <a
                  href="mailto:s.gamrot@vestigio.ai"
                  className="text-white text-[18px] md:text-[20px] font-extralight leading-[28px] tracking-[0.4px] hover:text-[#48DEEE] transition-colors block"
                >
                  s.gamrot@vestigio.ai
                </a>
                <div className="text-white text-[18px] md:text-[20px] font-extralight leading-[28px] tracking-[0.4px]">
                  514 019 528
                </div>
              </div>
                </div>
                <div 
                  className="w-[120px] h-[120px] md:w-[140px] md:h-[140px] rounded-full overflow-hidden"
                  style={{
                    border: '2px solid transparent',
                    backgroundImage: 'linear-gradient(#000, #000), linear-gradient(90deg, #EF7FA3, #F3B4A0, #48DEEE)',
                    backgroundOrigin: 'border-box',
                    backgroundClip: 'padding-box, border-box'
                  }}
                >
                  <img
                    src="/pm.png"
                    alt="Sara Gamrot"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              

              <div className="mb-6 text-center md:text-left max-w-[400px] md:max-w-none">
                <h4 className="text-white text-[18px] sm:text-[20px] md:text-[23.6px] font-normal leading-[24px] sm:leading-[26px] md:leading-[29.53px] mb-3 sm:mb-4">
                  Konsultacja
                </h4>
                <p className="text-white text-[14px] sm:text-[15px] md:text-[15.8px] font-light leading-[20px] sm:leading-[21px] md:leading-[22.69px] mb-4 sm:mb-6">
                  Możesz też od razu zarezerwować 15-minutową, bezpłatną konsultację. Konkretnie i bez zobowiązań.
                </p>
                <a
                  href="#konsultacja"
                  className="relative inline-block text-white text-[16px] md:text-[18px] hover:text-[#48DEEE] transition-colors before:content-[''] before:absolute before:bottom-[-4px] before:left-0 before:w-full before:h-[2px] before:bg-white"
                >
                  Umawiam się na konsultację
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
