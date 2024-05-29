// Dependencies
import Link from "next/link";
import { Button } from "./ui/button";

// Components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 pb-7 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="z-20">
          <h1 className="text-4xl font-secondary hover:text-accent transition-all duration-500">
            MarioWebDesign<span className="text-accent">!</span>
          </h1>
        </Link>

        {/* Desktop nav & hire me button*/}
        <div className="hidden xl:flex items-center gap-8 z-20">
          <Nav />
          <Link href="/contact" aria-label="Contact me">
            <Button aria-label="Botón para contactarme" role="button">
              Contáctame!
            </Button>
          </Link>
        </div>

        {/* Mobile nav */}
        <div className="xl:hidden z-20">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
