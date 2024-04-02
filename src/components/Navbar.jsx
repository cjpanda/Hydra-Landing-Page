import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-scroll";
import Logo from "../assets/logo.png";
import { CgClose } from "react-icons/cg";
import { CgMenuRightAlt } from "react-icons/cg";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [header, setHeader] = useState(false);

  // React Responsive useMediaQuery
  const desktopMode = useMediaQuery({
    query: "(min-width: 1300px)",
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    };

    //add eventListener
    window.addEventListener("scroll", handleScroll);

    //remove event Listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header>
      <div>
        <div>
          <Link
            to="home"
            smooth={desktopMode}
            spy={true}
            className="cursor-pointer"
          >
            <img src={Logo} alt="logo" width={150} height={100} />
          </Link>
        </div>
        {/* Mobile Menu  */}
        <div onClick={() => setNav(!nav)} className="cursor-pointer xl:hidden">
          {nav ? (
            <CgClose className="w-10 h-10 " />
          ) : (
            <CgMenuRightAlt className="w-10 h-10 " />
          )}
        </div>

        <nav>
          <Link
            className="cursor-pointer uppercase"
            to="about"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            About
          </Link>
          <Link
            className="cursor-pointer uppercase"
            to="services"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Services
          </Link>
          <Link
            className="cursor-pointer uppercase"
            to="technologies"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Technologies
          </Link>
          <Link
            className="cursor-pointer uppercase"
            to="howto"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            How To
          </Link>
        </nav>
        <div>
          <button>Contact Us</button>
          <button>Join Hydra</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
