import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const Hero = () => {
  return (
    <div className="main">
      <div className="wrapper">
        <motion.div
          className="content"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.div className="name" variants={textVariants}>
            William Shakespeare
          </motion.div>
          <motion.div className="desc" variants={textVariants}>
            Learn Webdev
          </motion.div>
          <motion.div className="desc" variants={textVariants}>
            and UI design
          </motion.div>
        </motion.div>
        <motion.div className="hero">
          <img src="hero.png" alt="hero" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
