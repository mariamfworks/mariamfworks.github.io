import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { achievementscards } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const Achievements = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useGSAP(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      { translateX: 0 },
      {
        translateX: "-500vw", // Total width (5 slides) minus 1 visible slide
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
        },
      }
    );
    return () => pin.kill();
  }, []);

  return (
    <section id="achievements">
      <div className="overflow-hidden">
        <div ref={triggerRef}>
          {/* 🔴 REMOVE w-[600vw] and add dynamic inline styling instead */}
          <div 
            ref={sectionRef} 
            style={{ width: "600vw" }} 
            className="h-screen flex flex-row relative bg-black-100"
          >
            
            {/* Intro Slide */}
            <div className="h-screen w-screen flex flex-col justify-center px-20">
              <h2 className="text-white font-bold md:text-8xl text-5xl">
                The <span className="text-blue-500">Archive</span>
              </h2>
              <p className="text-white-50 mt-4 text-xl">Scroll to roll the film...</p>
            </div>

            {/* Achievement Reels */}
            {achievementscards.map((ach, index) => (
              <div key={index} className="h-screen w-screen flex items-center justify-center p-5 md:p-20">
                <div className="relative group overflow-hidden border-l-4 border-r-4 border-white/10 w-full max-w-6xl h-[75vh] flex flex-col md:flex-row bg-zinc-900/50 rounded-xl">
                  
                  {/* Movie Reel Holes (Top) */}
                  <div className="absolute top-0 left-0 w-full h-8 flex justify-around opacity-20 z-20">
                    {[...Array(12)].map((_, i) => <div key={i} className="w-5 h-5 bg-white rounded-sm mt-1" />)}
                  </div>

                  {/* Left Side: Image */}
                  <div className="md:w-1/2 w-full h-1/2 md:h-full relative overflow-hidden">
                    <img 
                      src={ach.img} 
                      alt={ach.title} 
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-transparent to-zinc-900" />
                  </div>

                  {/* Right Side: Content */}
                  <div className="md:w-1/2 w-full p-8 md:p-12 flex flex-col justify-center relative z-10">
                    <span className="text-blue-500 font-mono mb-2 text-lg tracking-widest">{ach.date}</span>
                    <h3 className="text-white md:text-4xl text-2xl font-bold mb-4 leading-tight">
                      {ach.title}
                    </h3>
                    <p className="text-blue-400 text-lg font-medium mb-4">{ach.org}</p>
                    <p className="text-white-50 md:text-xl text-base leading-relaxed">
                      {ach.desc}
                    </p>
                  </div>

                  {/* Movie Reel Holes (Bottom) */}
                  <div className="absolute bottom-0 left-0 w-full h-8 flex justify-around opacity-20 z-20">
                    {[...Array(12)].map((_, i) => <div key={i} className="w-5 h-5 bg-white rounded-sm mb-1" />)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default Achievements;