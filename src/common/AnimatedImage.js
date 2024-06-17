import { motion } from "framer-motion";
import Image from "next/image";

const AnimatedImage = ({ src, alt, width, height }) => {
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -50 },
    visible: { opacity: 1, scale: 1, rotate: 0 },
  };
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      variants={imageVariants}
      whileHover={{ cursor: "pointer", opacity: 0.5 }}
      transition={{ duration: 0.5, ease: "easeInOut", rotate: { duration: 5 } }}
    >
      <Image src={src} alt={alt} width={width} height={height} />
    </motion.div>
  );
};

export default AnimatedImage;
