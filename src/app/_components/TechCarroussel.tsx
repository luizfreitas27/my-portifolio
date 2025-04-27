"use client";

import { motion } from "framer-motion";
import { ICONS } from "@/utils/constants";

export const TechCarroussel: React.FC = () => {
  return (
    <div className="w-full overflow-hidden m-auto mt-5">
      <motion.div
        className="flex flex-nowrap gap-x-10"
        transition={{
          duration: 10 * 5,
          ease: "linear",
          repeat: Infinity,
        }}
        initial={{ x: "0%" }}
        animate={{ x: "-525%" }}
      >
        {[...Array(5)]
          .flatMap(() => ICONS)
          .map(({ icon, colorClassName }, iconIndex) => (
            <div
              key={iconIndex}
              className={`h-10 text-4xl flex-none ${colorClassName}`}
            >
              {icon}
            </div>
          ))}
      </motion.div>
    </div>
  );
};
