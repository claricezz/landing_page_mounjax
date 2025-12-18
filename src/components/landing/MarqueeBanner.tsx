import { motion } from "framer-motion";
import { Truck } from "lucide-react";

const MarqueeBanner = () => {
  const items = Array(12).fill("FRETE GRÁTIS");

  return (
    <div className="bg-primary py-3 overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {[...items, ...items].map((item, index) => (
          <span
            key={index}
            className="flex items-center gap-2 mx-6 text-primary-foreground font-bold text-sm uppercase tracking-wider"
          >
            <Truck className="w-4 h-4" />
            {item}
            <span className="text-accent">✱</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeBanner;
