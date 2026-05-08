import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { servicesData } from "../constants";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Services = () => {
  const text = `I build secure, high-performance full-stack webs
    with smooth UX to drive growth 
    not headaches.`;
  const serviceRefs = useRef([]);
  const isDesktop = useMediaQuery({ minWidth: "48rem" }); //768px
  
  useGSAP(() => {
    serviceRefs.current.forEach((el) => {
      if (!el) return;

      gsap.from(el, {
        y: 200,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
        duration: 1,
        ease: "circ.out",
      });
    });
  }, []);

  return (
    <section id="services" className="min-h-screen bg-black rounded-t-4xl">
      <AnimatedHeaderSection
        subTitle={"Behind the scene, Beyond the screen"}
        title={"Service"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      {servicesData.map((service, index) => (
        <div
          ref={(el) => (serviceRefs.current[index] = el)}
          key={index}
          className="sticky px-4 sm:px-6 md:px-8 lg:px-10 pt-4 sm:pt-6 pb-8 sm:pb-12 text-white bg-black border-t-2 border-white/30"
          style={
            isDesktop
              ? {
                  top: `calc(10vh + ${index * 5}em)`,
                  marginBottom: `${(servicesData.length - index - 1) * 5}rem`,
                }
              : { top: 0 }
          }
        >
          <div className="flex items-center justify-between gap-4 font-light">
            <div className="flex flex-col gap-4 sm:gap-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight">
                {service.title}
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed tracking-wide sm:tracking-widest text-white/60 text-pretty max-w-4xl">
                {service.description}
              </p>
              <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/80">
                {service.items.map((item, itemIndex) => (
                  <div key={`item-${index}-${itemIndex}`} className="group">
                    <h3 className="flex cursor-pointer transition-colors duration-300 hover:text-white">
                      <span className="mr-6 sm:mr-8 md:mr-10 lg:mr-12 text-sm sm:text-base md:text-lg text-white/30 flex-shrink-0">
                        0{itemIndex + 1}
                      </span>
                      <span className="leading-tight">{item.title}</span>
                    </h3>
                    
                    <div className="overflow-hidden max-h-0 group-hover:max-h-40 sm:group-hover:max-h-48 md:group-hover:max-h-56 transition-all duration-500 ease-out">
                      <p className="mt-2 ml-10 sm:ml-12 md:ml-14 lg:ml-18 text-sm sm:text-base lg:text-lg text-white/50 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 max-w-3xl">
                        {item.description}
                      </p>
                    </div>
                    
                    {itemIndex < service.items.length - 1 && (
                      <div className="w-full h-px my-2 sm:my-3 bg-white/30" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services;