import Link from "next/link";

import { FaGithub, FaWhatsapp, FaLinkedin, FaDiscord } from "react-icons/fa";

const socials = [
  {
    name: "GitHub",
    icon: <FaGithub />,
    path: "https://github.com/Marioalf2002",
  },
  {
    name: "WhatsApp",
    icon: <FaWhatsapp />,
    path: "https://wa.me/message/MC62R3PTOHVDN1",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/mariowebdesign",
  },
  {
    name: "Discord",
    icon: <FaDiscord />,
    path: "https://discordapp.com/users/744348258893168680",
  },
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
            aria-label={item.name}
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
