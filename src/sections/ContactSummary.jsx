import { useRef } from "react";
import Marquee from "../components/Marquee";

function ContactSummary() {
  const containerRef = useRef(null);
  const items = ["Innovation", "Precision", "Trust", "Collaboration", "Excellence"];
    const items2 = [
    "contact us",
    "contact us",
    "contact us",
    "contact us",
    "contact us",
  ];
  return (
    <section ref={containerRef} className="relative flex flex-col items-center justify-between min-h-screen gap-12 mt-16 hero-gradient"> 
    <div className="absolute inset-0 hero-grid"></div>
    <div className="blob-layer">
      <span className="blob blob-blue"></span>
      <span className="blob blob-pink"></span>
      <span className="blob blob-amber"></span>
    </div>
    <Marquee items={items} />
        <div className="overflow-hidden font-light text-center text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl">
         <p>
          "Let's build a <br />
          <span className="font-normal">memorable</span> & <span className="italic">inspiring</span> <br />
          web application <span className="text-amber-500">together</span> "
         </p>
        </div>

         <Marquee
        items={items2}
        reverse={true}
        className="text-black bg-transparent border-y-2"
        iconClassName="stroke-amber-500 stroke-2 bg-transparent"
        icon="material-symbols-light:star-outline"
      />
    </section>
  )
}

export default ContactSummary
