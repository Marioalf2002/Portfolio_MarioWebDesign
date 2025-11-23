import Link from "next/link";
import {
  FaGithub,
  FaWhatsapp,
  FaLinkedin,
  FaDiscord,
  FaTelegramPlane,
} from "react-icons/fa";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";

const socials = [
  {
    name: "GitHub",
    icon: <FaGithub />,
    path: "https://github.com/Marioalf2002",
  },
  {
    name: "WhatsApp",
    icon: <FaWhatsapp />,
    path: "https://wa.me/573247773515?text=Hola%20Mario%2C%20estoy%20interesado%20en%20tus%20servicios.%20Me%20gustar%C3%ADa%20saber%20m%C3%A1s.",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/mariowebdesign",
  },
  {
    name: "Telegram",
    icon: <FaTelegramPlane />,
    path: "https://t.me/mariowebdesign",
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
            className={containerStyles}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.name}
          >
            <motion.div
              className="box"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 13 }}
            >
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className={iconStyles} aria-label={item.name}>
                    {item.icon}
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="capitalize font-semibold">{item.name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </motion.div>
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
