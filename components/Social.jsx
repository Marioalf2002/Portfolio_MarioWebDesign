import Link from "next/link";
import path from "path";

import { FaGithub, FaWhatsapp, FaLinkedin, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "" },
  { icon: <FaWhatsapp />, path: "" },
  { icon: <FaInstagram />, path: "" },
  { icon: <FaLinkedin />, path: "" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
