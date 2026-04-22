import { motion } from "framer-motion";
import { easeOutExpo } from "../../lib/motion.js";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

const wordVariants = {
  hidden: { y: "110%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.95, ease: easeOutExpo },
  },
};

export default function SplitText({
  text,
  className = "",
  wordClassName = "",
  stagger = 0.06,
  delay = 0,
  as: Tag = "span",
  trigger = "view", // "view" | "mount"
}) {
  const words = text.split(" ");

  const motionProps =
    trigger === "mount"
      ? { initial: "hidden", animate: "visible" }
      : {
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true, amount: 0.1 },
        };

  return (
    <Tag className={className}>
      <motion.span
        className="inline"
        variants={{
          ...containerVariants,
          visible: {
            transition: {
              staggerChildren: stagger,
              delayChildren: delay,
            },
          },
        }}
        {...motionProps}
      >
        {words.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className={`inline-flex overflow-hidden align-baseline ${wordClassName}`}
            style={{ paddingBottom: "0.15em", marginBottom: "-0.15em" }}
          >
            <motion.span
              className="inline-block will-change-transform"
              variants={wordVariants}
            >
              {word}
              {i < words.length - 1 && " "}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
