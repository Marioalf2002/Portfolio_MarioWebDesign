"use client";

// Dependencies
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "inicio", path: "/" },
  { name: "servicios", path: "/services" },
  { name: "historia", path: "/history" },
  { name: "proyectos", path: "/work" },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname &&
              "text-accent-hover font-semibold border-b-2 border-accent"
            } capitalize font-medium hover:text-accent-hover transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
