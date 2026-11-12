"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

type Direction = "up" | "left" | "right" | "none";

const offsets: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 28 },
  left: { x: -36, y: 0 },
  right: { x: 36, y: 0 },
  none: { x: 0, y: 0 },
};

type RevealProps = HTMLMotionProps<"div"> & { direction?: Direction; delay?: number };

/** Fades content in as it scrolls into view. Uses transform/opacity only. */
export function Reveal({ direction = "up", delay = 0, children, ...rest }: RevealProps) {
  const o = offsets[direction];
  return (
    <motion.div
      initial={{ opacity: 0, x: o.x, y: o.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/** Wraps a list so its <StaggerItem> children animate in sequence. */
export function Stagger({ children, ...rest }: HTMLMotionProps<"div">) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, ...rest }: HTMLMotionProps<"div">) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 32 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
