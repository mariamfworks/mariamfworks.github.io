import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);
  const titleRef = useRef(null); //new

  useGSAP(() => {
    // Animation for the main section fade-in
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animation for "The Lab" title and description
    gsap.from(titleRef.current.children, {
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
      },
    });

    // Animations for each project card
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="projects" ref={sectionRef} className="app-showcase py-20">
      <div className="w-full max-w-7xl mx-auto px-5 md:px-20">
        
        {/* --- SECTION TITLE: THE LAB --- */}
        <div ref={titleRef} className="flex flex-col gap-4 mb-16">
          {/*<p className="hero-badge">Portfolio</p>*/}
          <h2 className="text-white font-bold md:text-6xl text-4xl">
            <center> Featured Projects - The <span className="text-blue-500">Lab</span> </center>
          </h2>
          {/*<p className="text-white-50 md:text-xl max-w-2xl">
            A showcase of specialized AI systems, IoT innovations, and data-driven 
            solutions designed to create a sustainable impact.
          </p>*/}
        </div>

        <div className="showcaselayout">
          {/* Project 1: Computer Vision (IIIT Hyderabad) */}
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img 
                src="/images/project1.gif" 
                alt="End-to-End Computer Vision Pipeline" 
              />
            </div>
            <div className="text-content">
              <h2 className="md:text-3xl text-2xl font-semibold text-white">
                Automated Video Intelligence: An End-to-End Computer Vision Pipeline
              </h2>
              <p className="text-white-50 md:text-xl mt-4">
                A robust system for real-time object detection and semantic segmentation, 
                reconstructing annotated videos with full audio integration using YOLO 
                and FFmpeg.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            {/* Project 2: IoT & ML (Heart Rate Monitoring) */}
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/project2.png"
                  alt="IoT Heart Rate Monitoring"
                />
              </div>
              <h2 className="text-xl font-medium text-white mt-4">
                Real-Time Arrhythmia Detection & IoT Health Monitoring
              </h2>
            </div>

            {/* Project 3: Email Spam Identification */}
            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img 
                  src="/images/project3.png" 
                  alt="Email Spam Classification" 
                />
              </div>
              <h2 className="text-xl font-medium text-white mt-4">
                Email Spam Classification using Machine Learning techniques
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;

