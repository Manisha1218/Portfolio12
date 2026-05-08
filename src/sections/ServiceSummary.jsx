import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import ScrollTrigger from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function ServiceSummary() {

    useGSAP(() => {
      gsap.to("#title-service-1", {
       xPercent: 20,
       scrollTrigger: {
        target: "#title-service-1",
        scrub: true,
       }
      });

       gsap.to("#title-service-2", {
      xPercent: -30,
      scrollTrigger: {
        target: "#title-service-2",
        scrub: true,
      },
    });
    gsap.to("#title-service-3", {
      xPercent: 100,
      scrollTrigger: {
        target: "#title-service-3",
        scrub: true,
      },
    });
    gsap.to("#title-service-4", {
      xPercent: -100,
      scrollTrigger: {
        target: "#title-service-4",
        scrub: true,
      },
    });
    });

  return (
    <section className="relative mt-20 overflow-hidden font-light leading-snug text-center mb-42 text-2xl md:text-4xl lg:text-6xl service-gradient service-spotlight">
     <div className="absolute inset-0 service-grid"></div>
     <div id="title-service-1">
        <p>Architecture</p>
     </div>

     <div id="title-service-2" className="flex items-center justify-center gap-1 md:gap-3 md:translate-x-16">
        <p className="font-normal">Development</p>
        <div className="w-6 h-1 md:w-10 md:h-1 bg-amber-500 mt-2 md:mt-4" />
        <p>Deployment</p>
     </div>

      <div id="title-service-3" className="flex items-center justify-center gap-1 md:gap-3 md:-translate-x-48">
        <p>APIs</p>
        <div className="w-6 h-1 md:w-10 md:h-1 bg-amber-500 mt-2 md:mt-4" />
        <p>Frontends</p>
        <div className="w-6 h-1 md:w-10 md:h-1 bg-amber-500 mt-2 md:mt-4" />
        <p>Backends</p>
     </div>

     <div id="title-service-4" className="md:translate-x-48">
        <p>Databases</p>
     </div>
    </section>
  )
}

export default ServiceSummary
