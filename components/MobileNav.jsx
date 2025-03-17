"use client";

// Dependencies
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import { Button } from "./ui/button";

const links = [
  { name: "inicio", path: "/" },
  { name: "servicios", path: "/services" },
  { name: "historia", path: "/history" },
  { name: "proyectos", path: "/work" },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger
        className="flex justify-center items-center"
        aria-label="Open menu"
      >
        <CiMenuFries className="text-[32px] text-accent" id="Menu" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* Logo */}
        <div className="mt-32 mb-20 flex justify-center">
          <Link href="/">
            <h1 className="text-3xl font-secondary hover:text-accent transition-all duration-500">
              MarioWebDesign<span className="text-accent">!</span>
            </h1>
          </Link>
        </div>

        {/* Nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`${
                  link.path === pathname &&
                  "text-accent border-b-2 border-accent"
                } text-xl capitalize hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link href="/contact" aria-label="Contact me">
            <Button aria-label="Botón para contactarme" role="button">
              Contáctame!
            </Button>
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
