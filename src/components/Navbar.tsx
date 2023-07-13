import Image from "next/image";

import GithubIcon from "images/icon-github.svg";
import LinkedinIcon from "images/icon-linkedin.svg";

import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      className="py-5 md:py-[30px] flex flex-col md:flex-row md:justify-between md:px-[30px] min-[1139px]:px-0 min-[1139px]:pr-[30px] items-center mb-28 md:mb-0 relative"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: 0.9,
      }}
    >
      <p className="text-xl md:text-[32px] font-bold mb-5">ghulammurtaza</p>
      <ul className="flex justify-between items-center gap-[25px]">
        <motion.li
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 1,
          }}
        >
          <a href="https://github.com/murtazaghulam99" target="_blank">
            <Image
              className="h-5 w-5 md:h-auto md:w-auto"
              src={GithubIcon}
              alt="Icon"
            />
          </a>
        </motion.li>

        <motion.li
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 1.8,
          }}
        >
          <a
            href="https://www.linkedin.com/in/ghulammurtazamunir/"
            target="_blank"
          >
            <Image
              className="h-5 w-5 md:h-auto md:w-auto"
              src={LinkedinIcon}
              alt="Icon"
            />
          </a>
        </motion.li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
