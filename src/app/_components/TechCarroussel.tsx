"use client";

import { motion } from "framer-motion";
import { ICONS } from "@/utils/constants";

export const TechCarroussel: React.FC = () => {
  // Duplicate list → translate -50% for a seamless infinite loop
  const items = [...ICONS, ...ICONS];

  return (
    <div className="w-full overflow-hidden py-2 mt-5">
      <motion.div
        className="flex flex-nowrap gap-x-10"
        initial={{ x: "0%" }}
        animate={{ x: "-50%" }}
        transition={{
          duration: 35,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {items.map(({ icon, colorClassName, name }, index) => (
          <div
            key={index}
            title={name}
            className={`h-10 text-4xl flex-none ${colorClassName}`}
          >
            {icon}
          </div>
        ))}
      </motion.div>
    </div>
  );
};
