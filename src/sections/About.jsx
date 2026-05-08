import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import  AnimatedTextLines  from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  const text = `Passionate about clean architecture
    I build scalable, high-performance solutions
    from prototype to production`;
  const aboutText = `I build fast, scalable, and maintainable applications with a strong focus on React, Next.js, and modern backend development. My expertise lies in creating robust frontends and efficient APIs that ensure performance and reliability.

Core Skills
⭐ React.js — component-driven development and state management
⭐ Next.js — server-side rendering, static site generation, and API routes
⭐ Node.js & Express — backend services, REST APIs, authentication, middleware
⭐ Authentication & Security — JWT, OAuth, and best practices for secure apps`;
  const imgRef = useRef(null);
  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
      ease: "power1.inOut",
    });

    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });
    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: { trigger: imgRef.current },
    });
  });
  return (
    <section id="about" className="min-h-screen bg-black rounded-b-4xl">
      <AnimatedHeaderSection
        subTitle={"Cod with purpose, Built to scale"}
        title={"About"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
        <img
          ref={imgRef}
          src="public/images/manisha.jpeg"
          alt="man"
          className="w-md rounded-3xl "
        />
        <AnimatedTextLines text={aboutText}   className={"w-full text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed sm:leading-loose"} 
 />
      </div>
    </section>
  );
};

export default About;