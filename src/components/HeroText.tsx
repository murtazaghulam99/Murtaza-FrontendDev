import { useScreenSize } from "utils/useWindowDimensions";
import { motion } from "framer-motion";

const HeroText = () => {
  const [isMobile, isTab, isDesktop] = useScreenSize();

  return (
    <div className="text-center md:text-left mb-20 mt-[310px] md:mt-[50px] lg:mt-[76px] relative px-4 md:px-[30px] min-[1139px]:px-0">
      <motion.h1
        className="text-[40px] md:text-[72px] lg:text-[88px] leading-[40px] md:leading-[72px] lg:leading-[88px] md:tracking-[-2.5px] font-bold z-50"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.3,
        }}
      >
        Nice to {isTab ? <br /> : null} meet you!{" "}
        {isMobile || isDesktop ? <br /> : null} I&apos;m
        <span
          style={{
            borderBottomColor: "#4EE1A0",
            borderBottomWidth: "6px",
          }}
        >
          {isTab ? <br /> : null} Murtaza.
        </span>
      </motion.h1>

      <motion.p
        className="text-base md:text-lg mt-9 md:mt-[60px] sm:w-[445px] sm:mx-auto md:mx-0"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.5,
        }}
      >
        Based in the Pakistan, I&apos;m a front-end developer passionate about
        building accessible web apps that users love.
      </motion.p>
      <motion.p
        className="text-base md:text-lg mt-9 md:mt-[20px] sm:w-[445px] sm:mx-auto md:mx-0"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.5,
        }}
      >
        Unleashing the artistry of frontend, defying limits with React, creating
        remarkable experiences.
      </motion.p>

      <a href="mailto:ghulammurtaza.munir@yahoo.com">
        <motion.button
          className="uppercase font-bold text-base tracking-[2.29px] py-2 mt-6 md:mt-[34px] lg:mt-[66px] border-b-2 border-b-[#4EE1A0] hover:text-[#4EE1A0]"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.6,
          }}
        >
          contact me
        </motion.button>
      </a>
    </div>
  );
};

export default HeroText;
