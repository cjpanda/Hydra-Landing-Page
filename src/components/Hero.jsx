import arrowButton from "../assets/arrowRight.png";
import heroImage from "../assets/hero-image.png";
import { Feature, FeatureMobile } from "./index";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const isDesktop = useMediaQuery({ minWidth: 992 }); // xl and lg
  const isMobile = useMediaQuery({ maxWidth: 991 }); // md and sm

  return (
    <section className="max-width padding-x pt-40" id="home">
      {/* Hero Container */}
      <div className="flex flex-col-reverse xl:flex-row sm:flex-col-reverse md:flex-col-reverse lg:flex-row w-full items-center justify-between gap-10">
        {/* Hero Text */}
        <div className="mx-auto text-center lg:text-left xl:text-left">
          <h1 className="xl:text-5xl text-4xl font-semibold ">
            <span className="gradient-left">Dive</span> Into The Depths <br />{" "}
            Of <span className="gradient-right">Virtual Reality</span>
          </h1>

          <p className="xl:block lg:block hidden text-sm w-1/2 py-8 font-light text-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
            Lectus mauris eros in vitae .
          </p>

          <div className="flex relative">
            <button className="button-gradient button-hover">
              Build your world
            </button>
            <img
              src={arrowButton}
              alt="arrow"
              className="arrow-icon arrow-hover"
            />
          </div>
        </div>

        {/* Hero Image */}
        <div className="image-container">
          <img src={heroImage} alt="heroImage" className="image-hero" />
        </div>
      </div>

      {isDesktop && <Feature />}
      {isMobile && <FeatureMobile />}
    </section>
  );
};

export default Hero;
