import React from 'react'
import { useRef, useEffect } from 'react';

const CompaniesContainer = () => {

  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const containerTop = document.getElementById("companies-container").offsetTop;
      const relativeScroll = scrollY - containerTop;

      // Adjust scroll speed factor as needed
      const speed1 = 0.13;
      const speed2 = -0.15;
      const speed3 = 0.13;

      if (line1Ref.current) {
        line1Ref.current.style.transform = `translateX(${relativeScroll * speed1}px)`;
      }
      if (line2Ref.current) {
        line2Ref.current.style.transform = `translateX(${relativeScroll * speed2}px)`;
      }
      if (line3Ref.current) {
        line3Ref.current.style.transform = `translateX(${relativeScroll * speed3}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="companies-container" className="flex flex-col gap-8">
        <div id="companies-title" className="flex justify-center gap-2">
              <img src="assets/asset 2.svg" alt="down-arrow" className="translate-y-2"></img>
              <span>APPS POWERED BY TODESKTOP</span>
              <img src="assets/asset 2.svg" alt="down-arrow" className="translate-y-2 -scale-x-100"></img>
        </div>

        {/* companies group */}
        <div id="lines-group" className="flex flex-col gap-4">
            {/* line 1 */}
            <div id="line-1" ref={line1Ref} className="flex gap-4 w-screen -translate-x-48 " >
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white border border-gray-300 rounded-xl md:min-h-32 md:min-w-32">
                  <img src="assets/asset 3.png" alt="" className="w-12 h-12 md:h-16 md:w-16"></img>
                  <span className="text-[12px] md:text-[16px] font-semibold">Unbounce 1</span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white border border-gray-300 rounded-xl md:min-h-32 md:min-w-32">
                  <img src="assets/asset 4.png" alt="" className="w-12 h-12 md:h-16 md:w-16"></img>
                  <span className="text-[12px] md:text-[16px] font-semibold">LifeAt</span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white border border-gray-300 rounded-xl md:min-h-32 md:min-w-32">
                  <img src="assets/asset 5.png" alt="" className="w-12 h-12 md:h-16 md:w-16"></img>
                  <span className="text-[12px] md:text-[16px] font-semibold">Convy</span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white border border-gray-300 rounded-xl md:min-h-32 md:min-w-32">
                  <img src="assets/asset 6.png" alt="" className="w-12 h-12 md:h-16 md:w-16"></img>
                  <span className="text-[12px] md:text-[16px] font-semibold">Morgen</span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white border border-gray-300 rounded-xl md:min-h-32 md:min-w-32">
                  <img src="assets/asset 7.png" alt="" className="w-12 h-12 md:h-16 md:w-16"></img>
                  <span className="text-[12px] md:text-[16px] font-semibold">Campsite</span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white border border-gray-300 rounded-xl md:min-h-32 md:min-w-32">
                  <img src="assets/asset 8.png" alt="" className="w-12 h-12 md:h-16 md:w-16"></img>
                  <span className="text-[12px] md:text-[16px] font-semibold">Rise</span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white border border-gray-300 rounded-xl md:min-h-32 md:min-w-32">
                  <img src="assets/asset 9.png" alt="" className="w-12 h-12 md:h-16 md:w-16"></img>
                  <span className="text-[12px] md:text-[16px] font-semibold">ClickUp</span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white border border-gray-300 rounded-xl md:min-h-32 md:min-w-32">
                  <img src="assets/asset 10.png" alt="" className="w-12 h-12 md:h-16 md:w-16"></img>
                  <span className="text-[12px] md:text-[16px] font-semibold">Notion</span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white border border-gray-300 rounded-xl md:min-h-32 md:min-w-32">
                  <img src="assets/asset 11.png" alt="" className="w-12 h-12 md:h-16 md:w-16"></img>
                  <span className="text-[12px] md:text-[16px] font-semibold">Sunsama</span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white border border-gray-300 rounded-xl md:min-h-32 md:min-w-32">
                  <img src="assets/asset 12.png" alt="" className="w-12 h-12 md:h-16 md:w-16"></img>
                  <span className="text-[12px] md:text-[16px] font-semibold">Beeper</span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white border border-gray-300 rounded-xl md:min-h-32 md:min-w-32">
                  <img src="assets/asset 13.png" alt="" className="w-12 h-12 md:h-16 md:w-16"></img>
                  <span className="text-[12px] md:text-[16px] font-semibold">Unbounce 2</span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white border border-gray-300 rounded-xl md:min-h-32 md:min-w-32">
                  <img src="assets/asset 14.png" alt="" className="w-12 h-12 md:h-16 md:w-16"></img>
                  <span className="text-[12px] md:text-[16px] font-semibold">Unbound</span>
                </div> 
            </div>

            {/* line 2 */}
            <div id="line-2" ref={line2Ref} className="flex gap-4 w-screen -translate-x-36">
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white border border-gray-300 rounded-xl md:min-h-32 md:min-w-32">
                  <img src="assets/asset 10.png" alt="" className="w-12 h-12 md:h-16 md:w-16"></img>
                  <span className="text-[12px] md:text-[16px] font-semibold">Notion</span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white border border-gray-300 rounded-xl md:min-h-32 md:min-w-32">
                  <img src="assets/asset 11.png" alt="" className="w-12 h-12 md:h-16 md:w-16"></img>
                  <span className="text-[12px] md:text-[16px] font-semibold">Sunsama</span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white border border-gray-300 rounded-xl md:min-h-32 md:min-w-32">
                  <img src="assets/asset 12.png" alt="" className="w-12 h-12 md:h-16 md:w-16"></img>
                  <span className="text-[12px] md:text-[16px] font-semibold">Beeper</span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white border border-gray-300 rounded-xl md:min-h-32 md:min-w-32">
                  <img src="assets/asset 13.png" alt="" className="w-12 h-12 md:h-16 md:w-16"></img>
                  <span className="text-[12px] md:text-[16px] font-semibold">Unbounce 2</span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white border border-gray-300 rounded-xl md:min-h-32 md:min-w-32">
                  <img src="assets/asset 14.png" alt="" className="w-12 h-12 md:h-16 md:w-16"></img>
                  <span className="text-[12px] md:text-[16px] font-semibold">Unbound</span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white border border-gray-300 rounded-xl md:min-h-32 md:min-w-32">
                  <img src="assets/asset 15.png" alt="" className="w-12 h-12 md:h-16 md:w-16"></img>
                  <span className="text-[12px] md:text-[16px] font-semibold">Moises</span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white border border-gray-300 rounded-xl md:min-h-32 md:min-w-32">
                  <img src="assets/asset 16.png" alt="" className="w-12 h-12 md:h-16 md:w-16"></img>
                  <span className="text-[12px] md:text-[16px] font-semibold">BaseDash</span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white border border-gray-300 rounded-xl md:min-h-32 md:min-w-32">
                  <img src="assets/asset 17.png" alt="" className="w-12 h-12 md:h-16 md:w-16"></img>
                  <span className="text-[12px] md:text-[16px] font-semibold">Davids</span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white border border-gray-300 rounded-xl md:min-h-32 md:min-w-32">
                  <img src="assets/asset 18.png" alt="" className="w-12 h-12 md:h-16 md:w-16"></img>
                  <span className="text-[12px] md:text-[16px] font-semibold">Balm</span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white border border-gray-300 rounded-xl md:min-h-32 md:min-w-32">
                  <img src="assets/asset 19.png" alt="" className="w-12 h-12 md:h-16 md:w-16"></img>
                  <span className="text-[12px] md:text-[16px] font-semibold">Morgen</span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white border border-gray-300 rounded-xl md:min-h-32 md:min-w-32">
                  <img src="assets/asset 20.png" alt="" className="w-12 h-12 md:h-16 md:w-16"></img>
                  <span className="text-[12px] md:text-[16px] font-semibold">Potatoe</span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white border border-gray-300 rounded-xl md:min-h-32 md:min-w-32">
                  <img src="assets/asset 21.png" alt="" className="w-12 h-12 md:h-16 md:w-16"></img>
                  <span className="text-[12px] md:text-[16px] font-semibold">Harley</span>
                </div>
            </div>

            {/* line 3 */}
            <div id="line-3" ref={line3Ref} className="flex md:hidden gap-4 w-screen -translate-x-48">
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white border border-gray-300 rounded-xl md:min-h-32 md:min-w-32">
                  <img src="assets/asset 14.png" alt="" className="w-12 h-12 md:h-16 md:w-16"></img>
                  <span className="text-[12px] md:text-[16px] font-semibold">Unbound</span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white border border-gray-300 rounded-xl md:min-h-32 md:min-w-32">
                  <img src="assets/asset 15.png" alt="" className="w-12 h-12 md:h-16 md:w-16"></img>
                  <span className="text-[12px] md:text-[16px] font-semibold">Moises</span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white border border-gray-300 rounded-xl md:min-h-32 md:min-w-32">
                  <img src="assets/asset 16.png" alt="" className="w-12 h-12 md:h-16 md:w-16"></img>
                  <span className="text-[12px] md:text-[16px] font-semibold">BaseDash</span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white border border-gray-300 rounded-xl md:min-h-32 md:min-w-32">
                  <img src="assets/asset 17.png" alt="" className="w-12 h-12 md:h-16 md:w-16"></img>
                  <span className="text-[12px] md:text-[16px] font-semibold">Davids</span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white border border-gray-300 rounded-xl md:min-h-32 md:min-w-32">
                  <img src="assets/asset 18.png" alt="" className="w-12 h-12 md:h-16 md:w-16"></img>
                  <span className="text-[12px] md:text-[16px] font-semibold">Balm</span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white border border-gray-300 rounded-xl md:min-h-32 md:min-w-32">
                  <img src="assets/asset 19.png" alt="" className="w-12 h-12 md:h-16 md:w-16"></img>
                  <span className="text-[12px] md:text-[16px] font-semibold">Morgen</span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white border border-gray-300 rounded-xl md:min-h-32 md:min-w-32">
                  <img src="assets/asset 20.png" alt="" className="w-12 h-12 md:h-16 md:w-16"></img>
                  <span className="text-[12px] md:text-[16px] font-semibold">Potatoe</span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white border border-gray-300 rounded-xl md:min-h-32 md:min-w-32">
                  <img src="assets/asset 21.png" alt="" className="w-12 h-12 md:h-16 md:w-16"></img>
                  <span className="text-[12px] md:text-[16px] font-semibold">Harley</span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white border border-gray-300 rounded-xl md:min-h-32 md:min-w-32">
                  <img src="assets/asset 22.png" alt="" className="w-12 h-12 md:h-16 md:w-16"></img>
                  <span className="text-[12px] md:text-[16px] font-semibold">Madison</span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white border border-gray-300 rounded-xl md:min-h-32 md:min-w-32">
                  <img src="assets/asset 23.png" alt="" className="w-12 h-12 md:h-16 md:w-16"></img>
                  <span className="text-[12px] md:text-[16px] font-semibold">Bamam</span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white border border-gray-300 rounded-xl md:min-h-32 md:min-w-32">
                  <img src="assets/asset 24.png" alt="" className="w-12 h-12 md:h-16 md:w-16"></img>
                  <span className="text-[12px] md:text-[16px] font-semibold">Chalrie</span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white border border-gray-300 rounded-xl md:min-h-32 md:min-w-32">
                  <img src="assets/asset 25.png" alt="" className="w-12 h-12 md:h-16 md:w-16"></img>
                  <span className="text-[12px] md:text-[16px] font-semibold">Valients</span>
                </div>
            </div>

        </div>
    </div>
  )
}

export default CompaniesContainer
