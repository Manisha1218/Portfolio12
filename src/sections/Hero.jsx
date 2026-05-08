import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
const Hero = () => {
  const text = `create modern animated and engaging websites
   that gain an unfair advantage through
    premium results driven webs/apps`;
  return (
    <section id="home" className="relative flex flex-col justify-end min-h-screen hero-gradient">
      <div className="absolute inset-0 hero-grid"></div>
      <div className="blob-layer">
        <span className="blob blob-blue"></span>
        <span className="blob blob-pink"></span>
        <span className="blob blob-amber"></span>
      </div>
      <div className="relative">
        <AnimatedHeaderSection
          subTitle={"404 No Bugs Found"}
          title={"Manisha Verma"}
          text={text}
          textColor={"text-gray-900"}
        />
      </div>
    </section>
  );
};

export default Hero;