import Link from "next/link";
import path from "path";

import { FaGithub, FaWhatsapp, FaLinkedin, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Marioalf2002" },
  {
    icon: <FaWhatsapp />,
    path: "https://wa.me/message/MC62R3PTOHVDN1",
  },
  { icon: <FaLinkedin />, path: "" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className={iconStyles}
            target="_blank"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
