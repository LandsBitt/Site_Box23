import { motion } from "framer-motion";
import { fadeUp, stagger } from "../../lib/motion.js";

export function Reveal({
  children,
  className = "",
  delay = 0,
  amount = 0.25,
  variants = fadeUp,
  as: Component = motion.div,
}) {
  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </Component>
  );
}

export function RevealGroup({
  children,
  className = "",
  amount = 0.2,
  delay = 0.08,
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={stagger(delay)}
    >
      {children}
    </motion.div>
  );
}
