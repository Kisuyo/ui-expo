import { motion } from "framer-motion";
import { InfoIcon } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function ComponentWrapper({
  children,
  title,
  description,
  libraries,
}: {
  children: React.ReactNode;

  title: string;
  description: string;
  libraries: string[];
}) {
  const [showInfo, setShowInfo] = useState(false);
  const infoRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (infoRef.current && !infoRef.current.contains(event.target as Node)) {
      setShowInfo(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full relative h-[500px] border border-slate-400/30 flex items-center justify-center rounded-lg">
      <motion.div
        layout
        animate={{
          width: showInfo ? "280px" : "40px",
          height: showInfo ? "140px" : "40px",
        }}
        transition={{
          duration: 0.2,
          type: "spring",
          stiffness: 200,
          damping: 30,
        }}
        className="absolute top-2 left-2 w-fit flex flex-col rounded-md border border-slate-400/10 bg-gray-100"
        ref={infoRef}
      >
        {showInfo && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col justify-between p-3 h-full"
          >
            <div>
              <h1 className="text-[18px] font-bold">{title}</h1>
              <p className="text-sm text-slate-400">{description}</p>
            </div>
            <div className="flex flex-wrap gap-2 pt-3">
              {libraries.map((library, index) => (
                <div
                  key={index}
                  className="bg-white text-[12px] px-2 p-1 rounded-md shadow-md"
                >
                  {library}
                </div>
              ))}
            </div>
          </motion.div>
        )}
        {!showInfo && (
          <button
            className="w-full h-full flex items-center justify-center"
            onClick={() => setShowInfo(true)}
          >
            <InfoIcon className="w-4 h-4" />
          </button>
        )}
      </motion.div>
      {children}
    </div>
  );
}
