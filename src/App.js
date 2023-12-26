import React from 'react';
import image from './assets/images/img1.jpg';
import image1 from './assets/images/img2.png';
import image2 from './assets/images/img3.jpg';

function App() {
  const divStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    width: 'screen', 
    height: '763px',
    position: 'relative',
  };

  return (
    <div className='bodystart'>
      <div className="body" style={divStyle}>
        <div className="w-full md:w-[630px] h-[306px] px-4 md:px-10 pt-6 pb-8 bg-gradient-to-l from-cyan-500 to-green-400 flex-col justify-start items-start gap-5 inline-flex md:mt-14 md:ml-14">
          <div className="w-full md:w-[556px] text-white text-5xl font-bold font-['Inter'] capitalize leading-[48px]">
            We crush your competitors, goals, and sales records - without the B.S.
          </div>
          <div className="px-5 py-3 bg-orange-400 rounded justify-start items-start gap-2 inline-flex">
            <div className="text-white text-sm font-bold font-['Inter'] uppercase leading-[14px]">
              Get free consultation
            </div>
          </div>
        </div>
      </div>

      <div className="bodycontent md:ml-24">
        <div className="w-full md:w-[1064px] h-[414px] flex-col md:flex-row justify-start items-center gap-[108px] mx-auto inline-flex">
          <img className="w-full md:w-[414px] h-[414px] md:mr-6" src={image2} alt="image" />
          <div className="w-full md:w-[542px] flex-col justify-start items-start gap-5 mx-auto">
            <div className="flex-col justify-start items-start gap-3 flex">
              <div className="w-full md:w-[507px] text-violet-700 text-[27px] font-semibold font-['Poppins'] leading-[33px] tracking-wide">
                Web & Mobile App Development
              </div>
            </div>
            <div className="self-stretch text-black text-base font-normal font-['Inter']">
              Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content
              and engagement methods to respond to different intents shown by your potential customers who interact with your
              business online.
            </div>
            <div className="px-5 py-3 bg-orange-400 rounded justify-start items-start gap-2 inline-flex">
              <div className="text-white text-sm font-bold font-['Inter'] uppercase leading-[14px]">LEARN MORE</div>
            </div>
          </div>
        </div>
      </div>

      <div className="centerddetails md:ml-24">
        <div className="w-full md:w-[1064px] h-[416px] flex-col md:flex-row justify-start items-center gap-[108px] mx-auto inline-flex">
          <div className="w-full md:w-[542px] flex-col justify-start items-start gap-5 mx-auto">
            <div className="flex-col justify-start items-start gap-3 flex">
              <div className="w-full md:w-[507px] text-violet-700 text-[27px] font-semibold font-['Poppins'] leading-[33px] tracking-wide">
                Digital Strategy Consulting
              </div>
            </div>
            <div className="self-stretch text-black text-base font-normal font-['Inter']">
              Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each
              component will never work in isolation and every business needs a different mix. We provide a clear concept and
              strategic overview to find the most efficient model for your business.
            </div>
            <div className="px-5 py-3 bg-orange-400 rounded justify-start items-start gap-2 inline-flex">
              <div className="text-white text-sm font-bold font-['Inter'] uppercase leading-[14px]">LEARN MORE</div>
            </div>
          </div>
          <img className="w-full md:w-[414px] h-[414px] md:ml-6" src={image1} alt="image" />
        </div>
      </div>

      
    </div>
  );
}

export default App;
