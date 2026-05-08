import React from "react";
import { useRef } from "react";
import AnimatedTextLines from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const AnimatedHeaderSection = ({
  subTitle,
  title,
  text,
  textColor,
  withScrollTrigger = false,
}) => {
  const contextRef = useRef(null);
  const headerRef = useRef(null);
  const shouldSplitTitle = title.includes(" ");
  const titleParts = shouldSplitTitle ? title.split(" ") : [title];

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: withScrollTrigger
        ? {
            trigger: contextRef.current,
          }
        : undefined,
    });
    tl.from(contextRef.current, {
      y: "50vh",
      duration: 1,
      ease: "circ.out",
    });
    tl.from(
      headerRef.current,
      {
        opacity: 0,
        y: "200",
        duration: 1,
        ease: "circ.out",
      },
      "<+0.2"
    );
  }, []);

  return (
    <div ref={contextRef}>
      <div style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}>
        <div
          ref={headerRef}
          className="flex flex-col justify-center gap-6 pt-6 sm:gap-8 md:gap-12 sm:pt-8 md:pt-12"
        >
          <p
            className={`text-xs sm:text-sm md:text-base font-light tracking-[0.2rem] sm:tracking-[0.3rem] md:tracking-[0.5rem] uppercase px-4 sm:px-6 md:px-10 ${textColor}`}
          >
            {subTitle}
          </p>
          <div className="px-4 sm:px-6 md:px-10">
            <h1
              className={`flex flex-col gap-4 md:gap-12 uppercase text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl sm:gap-16 md:block ${textColor}`}
            >
              {titleParts.map((part, index) => (
                <span key={index}>{part} </span>
              ))}
            </h1>
          </div>
        </div>
      </div>
      <div className={`relative px-4 sm:px-6 md:px-10 ${textColor}`}>
        <div className="absolute inset-x-0 border-t-2" />
        <div className="py-4 sm:py-6 md:py-8 lg:py-10 text-end text-lg sm:text-xl md:text-2xl lg:text-3xl">
          <AnimatedTextLines
            text={text}
            className={`font-light uppercase value-text-responsive ${textColor}`}
          />
        </div>
      </div>
    </div>
  );
};

export default AnimatedHeaderSection;