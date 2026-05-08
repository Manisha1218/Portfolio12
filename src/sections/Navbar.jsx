import React, { useEffect, useState } from 'react'
import { useRef } from "react";
import { socials } from '../constants';
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import { Link } from "react-scroll";

function Navbar() {
    const navRef = useRef(null);
    const linksRef = useRef([]);
    const contactRef = useRef(null);
    const topLineRef = useRef(null);
    const bottomLineRef = useRef(null);
    const tl = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const iconTl = useRef(null);
    const [showMenu, setShowMenu] = useState(true);

    useGSAP(() => {
      gsap.set(navRef.current, { xPercent: 100 });
      gsap.set([linksRef.current, contactRef.current], {
        autoAlpha: 0,
        x: -20,
      });

      tl.current= gsap.timeline({ paused:true}).to(navRef.current, {
        xPercent: 0,
        duration: 1,
        ease: "power3.out",
      }).to(
        linksRef.current,
        {
          autoAlpha:1,
          x:0,
          stagger:0.1,
          duration:0.5,
          ease: "power2.out",
        },
        "<"
      ).to(contactRef.current, {
        autoAlpha: 1,
        x: 0,
        duration: 0.5,
        ease: "power2.out"
      }, "<+0.2");

      iconTl.current = gsap.timeline({ paused: true }).to(topLineRef.current, {
        rotate: 45,
        y: 3.3,
        duration: 0.3,
        ease: "power2.inOut"
      }).to(bottomLineRef.current, {
        rotate: -45,
        y: -3.3,
        duration: 0.3,
        ease: "power2.inOut"
      }, "<");
    }, [])

    useEffect(() => {
      let lastScrollY = window.scrollY;
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        setShowMenu(currentScrollY <= lastScrollY || currentScrollY < 10);
        lastScrollY = currentScrollY;
      }
      window.addEventListener("scroll", handleScroll, {
        passive: true,
      });
      return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    const toggleMenu = () => {
      if(isOpen) {
        tl.current.reverse();
        iconTl.current.reverse();
      } else {
        tl.current.play();
        iconTl.current.play();
      }
      setIsOpen(!isOpen);
    }

    const closeMenu = () => {
      if(isOpen) {
        tl.current.reverse();
        iconTl.current.reverse();
        setIsOpen(false);
      }
    }
  return (
    <div>
      <nav ref={navRef} className='fixed z-50 flex flex-col justify-between w-1/2 h-full px-6 sm:px-8 md:px-10 uppercase bg-black text-white/80 py-16 sm:py-20 md:py-24 lg:py-28 gap-y-6 sm:gap-y-8 md:gap-y-10
      left-1/2'>
        
        <div className='flex flex-col text-3xl sm:text-4xl md:text-5xl lg:text-6xl gap-y-1 sm:gap-y-2'>
          {["home", "services", "about", "work", "contact"].map((section, index) => (
            <div key={index} ref={(el) => (linksRef.current[index] = el)}>
             <Link className='transition-all duration-300 cursor-pointer hover:text-white leading-tight' to={`${section}`} smooth offset={0} duration={2000} onClick={closeMenu}>{section}</Link>
            </div>
          ))}
        </div>
        <div ref={contactRef} className='flex flex-col flex-wrap justify-between gap-6 sm:gap-7 md:gap-8 md:flex-row'>
         <div className='font-light'>
            <p className='text-xs sm:text-sm md:text-base tracking-wider text-white/50 mb-1 sm:mb-2'>E-mail</p>
            <p className='text-sm sm:text-lg md:text-xl tracking-wide sm:tracking-wider md:tracking-widest lowercase break-all'>manisha15631@gmail.com</p>
         </div>
         <div className='font-light'>
            <p className='text-xs sm:text-sm md:text-base tracking-wider text-white/50 mb-2 sm:mb-3'>Social Media</p>
            <div className='flex flex-col flex-wrap md:flex-row gap-x-2 gap-y-1'>
                {socials.map((social, index) => (
                  <a 
                    key={index} 
                    href={social.href} 
                    className='text-xs sm:text-sm md:text-base leading-loose tracking-wide sm:tracking-wider md:tracking-widest uppercase hover:text-white transition-colors duration-300'
                  >
                     {social.name}
                  </a>
                ))}
            </div>
         </div>
        </div>
      </nav>

      <div onClick={toggleMenu} style={(showMenu || isOpen)? {clipPath: "circle(50% at 50% 50%)"} : {clipPath: "circle(0% at 50% 50%)"}} className='fixed z-50 flex flex-col items-center justify-center gap-1 transition-all duration-300 bg-black rounded-full cursor-pointer w-12 h-12 sm:w-14 sm:h-14 top-3 sm:top-4 right-6 sm:right-8 md:right-10'>
       <span ref={topLineRef} className='block w-6 sm:w-7 md:w-8 h-0.5 bg-white rounded-full origin-center'></span>
       <span ref={bottomLineRef} className='block w-6 sm:w-7 md:w-8 h-0.5 bg-white rounded-full origin-center'></span>
      </div>
    </div>
  )
}

export default Navbar