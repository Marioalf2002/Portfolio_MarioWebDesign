import Link from "next/link";

import { FaGithub, FaWhatsapp, FaLinkedin, FaDiscord } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Marioalf2002" },
  {
    icon: <FaWhatsapp />,
    path: "https://wa.me/message/MC62R3PTOHVDN1",
  },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/mariowebdesign",
  },
  {
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
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
